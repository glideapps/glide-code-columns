import startCase from "lodash/startCase";

export type ColumnType =
  | "string"
  | "primitive"
  | "number"
  | "boolean"
  | "image-uri"
  | "date-time"
  | "uri";

export type StringColumnValue = { type: "string"; value?: string };

export type ColumnParam = {
  name: string;
  displayName: string;
  type: ColumnType;
};

export type ColumnValue =
  | { type: "primitive"; value?: any }
  | { type: "number"; value?: number }
  | StringColumnValue;

export type Column = (...values: ColumnValue[]) => any | Promise<any>;

function convert(x: any) {
  if (x instanceof Date) {
    return x.toISOString();
  } else if (Array.isArray(x)) {
    return x.map(convert);
  } else {
    return x;
  }
}

export async function listen(event: MessageEvent<any>, main: Column) {
  const {
    // origin,
    data: { key, params },
  } = event;

  let result;
  let error;
  try {
    result = await main(...params);
  } catch (e) {
    result = undefined;
    try {
      error = e.toString();
    } catch (e) {
      error = "Exception can't be stringified.";
    }
  }

  const response: any = { key };
  if (result !== undefined) {
    result = convert(result);
    response.result = { type: "string", value: result };
  }
  if (error !== undefined) {
    response.error = error;
  }

  // TODO fix this type
  (event.source?.postMessage as any)(response, "*");
}

export type Category =
  | "Glide"
  | "General"
  | "Number"
  | "Encoding"
  | "Text"
  | "Data & APIs"
  | "Image"
  | "Date & Time"
  | "Code";

export type Manifest = {
  name: string;
  category: Category;
  description: string;
  author: string;
  params: ColumnParam[];
  result: { type: ColumnType };
  icon: string;
  about?: string;
  video?: string;
};

export type ManifestConvenient<T> = Omit<Manifest, "params" | "icon"> & {
  params: { [Name in keyof T]: Omit<ColumnParam, "name"> };
  icon?: "glide" | string;
};

export type ColumnDefinition<TColumnParams = {}> =
  ManifestConvenient<TColumnParams> & {
    run: Column;
    example?: Partial<TColumnParams>;
    tests?: Array<{ params: Partial<TColumnParams>; expectedResult: any }>;
  };

export function column<TColumnParams>(
  manifest: ColumnDefinition<TColumnParams>
): ColumnDefinition<TColumnParams> & {
  json: string;
} {
  // We run this code in node to output manifests, so check for window.
  if (!process.env.DIRECT && typeof window !== "undefined") {
    window.addEventListener("message", e => listen(e, manifest.run));
  }

  return {
    ...manifest,
    json: JSON.stringify(toStrictManifest(manifest), null, 2),
  };
}

const glideIcon = `
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `;

const defaultIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;

export function toStrictManifest(
  convenient: ManifestConvenient<any>
): Manifest {
  // We carefully pick out just the props in manifest, because more
  // could come in from the component.
  const { name, category, description, author, result, params, about, video } =
    convenient;

  let { icon = defaultIcon } = convenient;
  if (icon === "glide") {
    icon = glideIcon;
  }

  return {
    name,
    category,
    description,
    author,
    result,
    about,
    icon,
    video,
    params: Object.entries(params).map(([name, param]) => ({
      name,
      ...param,
    })),
  };
}

const defaultDefinition: ColumnDefinition = {
  name: "Glide Column",
  category: "General",
  description: "No description",
  author: "Glide <hello@glideapps.com>",
  params: {},
  result: { type: "string" },
  icon: defaultIcon,
  about: undefined,
  video: undefined,
  tests: [],
  async run() {
    return undefined;
  },
};

export class Col<TParams = {}, TResult = string> {
  readonly definition: ColumnDefinition<TParams>;
  readonly requiredParams: string[];

  constructor(
    m: Partial<ColumnDefinition<TParams>> = {},
    requiredParams: string[] = []
  ) {
    this.definition = {
      ...(defaultDefinition as ColumnDefinition<TParams>),
      ...m,
    };
    this.requiredParams = [...requiredParams];
  }

  public with(
    m: Partial<ColumnDefinition<TParams>>,
    requiredParams: string[] = []
  ): Col<TParams, TResult> {
    return new Col({ ...this.definition, ...m }, [
      ...this.requiredParams,
      ...requiredParams,
    ]);
  }

  public withName(name: string) {
    return this.with({ name });
  }

  public withCategory(category: Manifest["category"]) {
    return this.with({ category });
  }

  public withDescription(description: string) {
    return this.with({ description });
  }

  public withAbout(about: string) {
    return this.with({ about });
  }

  public withAuthor(name: string, email: string) {
    return this.with({ author: `${name} <${email}>` });
  }

  public withTest(
    params: Partial<TParams>,
    expectedResult: TResult | undefined
  ) {
    const { tests = [] } = this.definition;

    return this.with({
      tests: [...tests, { params, expectedResult }],
    });
  }

  public withResult<T>(type: ColumnType) {
    return this.with({ result: { type } }) as Col<TParams, T>;
  }

  public withStringResult() {
    return this.withResult<string>("string");
  }

  public withNumberResult() {
    return this.withResult<number>("number");
  }

  public withBooleanResult() {
    return this.withResult<boolean>("boolean");
  }

  public withParam<TParam, TName extends string>(
    type: ColumnType,
    name: TName,
    displayName?: string
  ) {
    if (displayName === undefined) {
      displayName = startCase(name);
    }
    return this.with({
      params: { ...this.definition.params, [name]: { type, displayName } },
    }) as Col<TParams & { readonly [K in TName]?: TParam }, TResult>;
  }

  public withRequiredParam<TParam, TName extends string>(
    type: ColumnType,
    name: TName,
    displayName?: string
  ) {
    return this.withParam(type, name, displayName).with({}, [name]) as Col<
      TParams & { readonly [K in TName]: TParam },
      TResult
    >;
  }

  public withStringParam<T extends string>(name: T, displayName?: string) {
    return this.withParam<string, T>("string", name, displayName);
  }

  public withDateParam<T extends string>(name: T, displayName?: string) {
    return this.withParam<string, T>("date-time", name, displayName);
  }

  public withNumberParam<T extends string>(name: T, displayName?: string) {
    return this.withParam<number, T>("number", name, displayName);
  }

  public withRequiredStringParam<T extends string>(
    name: T,
    displayName?: string
  ) {
    return this.withRequiredParam<string, T>("string", name, displayName);
  }

  public withRequiredDateParam<T extends string>(
    name: T,
    displayName?: string
  ) {
    return this.withRequiredParam<string, T>("date-time", name, displayName);
  }

  public withRequiredNumberParam<T extends string>(
    name: T,
    displayName?: string
  ) {
    return this.withRequiredParam<number, T>("number", name, displayName);
  }

  public run(
    columnFunction: (
      params: TParams
    ) => Promise<TResult | undefined> | TResult | undefined
  ) {
    const { params: staticParams } = this.definition;
    const requiredParamNames = this.requiredParams;
    const staticParamNames = Object.keys(staticParams);

    function run(...dynamicParams) {
      const params = {} as TParams;

      dynamicParams.forEach(({ value }, i) => {
        params[staticParamNames[i]] = value;
      });

      if (requiredParamNames.some(name => params[name] === undefined)) {
        return undefined;
      }

      return columnFunction(params);
    }

    return column({
      ...this.definition,
      run,
    });
  }
}

export function columnNamed(name: string) {
  return new Col({ name });
}
