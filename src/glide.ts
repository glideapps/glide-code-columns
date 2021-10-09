type ColumnType = "string" | "primitive" | "number" | "image-uri" | "uri";

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

export type Column = (...values: ColumnValue[]) => Promise<any | undefined>;

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

export type Manifest = {
  name: string;
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

export type ColumnDefinition<TColumnParams> =
  ManifestConvenient<TColumnParams> & {
    run: Column;
    example?: Partial<TColumnParams>;
  };

export function column<TColumnParams>(
  manifest: ColumnDefinition<TColumnParams>
): ColumnDefinition<TColumnParams> & { json: string } {
  // We run this code in node to output manifests, so check for window.
  if (typeof window !== "undefined") {
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
  const { name, description, author, result, params, about, video } =
    convenient;

  let { icon = defaultIcon } = convenient;
  if (icon === "glide") {
    icon = glideIcon;
  }

  return {
    name,
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
