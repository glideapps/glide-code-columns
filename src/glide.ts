import startCase from "lodash/startCase";
import { getIconForManifest } from "./icons";

export type PrimitiveColumnType = "string" | "primitive" | "number" | "boolean" | "image-uri" | "date-time" | "uri";

export type ColumnType = PrimitiveColumnType | { kind: "array"; items: PrimitiveColumnType };

export type StringColumnValue = { type: "string"; value?: string };

export type ColumnParam = {
    name: string;
    displayName: string;
    type: ColumnType;
};

export type PrimitiveValue = string | number | boolean;

export type ColumnValue =
    | { type: "primitive"; value?: PrimitiveValue }
    | { type: "number"; value?: number }
    | { type: "boolean"; value?: boolean }
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
    | "Machine Learning"
    | "Glide"
    | "General"
    | "Array"
    | "Number"
    | "Encoding"
    | "Text"
    | "Data & APIs"
    | "Image"
    | "Fun"
    | "Date & Time"
    | "Cryptography"
    | "Code";

type Released = "direct" | "sandboxed";

export type Manifest = {
    name: string;
    category: Category;
    deprecated?: boolean;
    released?: Released;
    description: string;
    author: string;
    params: ColumnParam[];
    result: { type: ColumnType };
    icon: string;
    about?: string;
    video?: string;
};

export type ManifestConvenient<T> = Omit<Manifest, "params" | "icon"> & {
    params: Record<keyof T, Omit<ColumnParam, "name">>;
    icon?: string;
};

type Test<TParams> = { params: Partial<TParams>; expectedResult: any; allowFailure?: boolean };

export type ColumnDefinition<TColumnParams = {}> = ManifestConvenient<TColumnParams> & {
    run: Column;
    example?: Partial<TColumnParams>;
    tests?: Test<TColumnParams>[];
};

export function column<TColumnParams>(manifest: ColumnDefinition<TColumnParams>): ColumnDefinition<TColumnParams> & {
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

export function toStrictManifest(convenient: ManifestConvenient<any>): Manifest {
    // We carefully pick out just the props in manifest, because more
    // could come in from the component.
    const { name, category, released, description, author, result, params, about, video } = convenient;
    const icon = getIconForManifest(convenient);

    return {
        name,
        category,
        released,
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
    released: undefined,
    description: "No description",
    author: "Glide <hello@glideapps.com>",
    params: {},
    result: { type: "string" },
    icon: undefined,
    about: undefined,
    video: "https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",
    tests: [],
    async run() {
        return undefined;
    },
};

export class Col<TParams = {}, TResult = string> {
    readonly definition: ColumnDefinition<TParams>;
    readonly requiredParams: string[];

    constructor(m: Partial<ColumnDefinition<TParams>> = {}, requiredParams: string[] = []) {
        this.definition = {
            ...(defaultDefinition as ColumnDefinition<TParams>),
            ...m,
        };
        this.requiredParams = [...requiredParams];
    }

    public with(m: Partial<ColumnDefinition<TParams>>, requiredParams: string[] = []): Col<TParams, TResult> {
        return new Col({ ...this.definition, ...m }, [...this.requiredParams, ...requiredParams]);
    }

    public withName(name: string) {
        return this.with({ name });
    }

    public withCategory(category: Manifest["category"]) {
        const { icon } = this.definition;
        return this.with({ category, icon: getIconForManifest({ icon, category }) });
    }

    public withReleased(released: "direct" | "sandboxed") {
        return this.with({ released });
    }

    public withDescription(description: string) {
        return this.with({ description });
    }

    public withAbout(about: string) {
        return this.with({ about });
    }

    public withVideo(video: Manifest["video"]) {
        return this.with({ video });
    }

    public withIcon(icon: Manifest["icon"]) {
        return this.with({ icon });
    }

    public withAuthor(name: string, email: string) {
        return this.with({ author: `${name} <${email}>` });
    }

    public withTest(params: Partial<TParams>, expectedResult: TResult | undefined) {
        const { tests = [] } = this.definition;

        return this.with({
            tests: [...tests, { params, expectedResult }],
        });
    }

    public withFailingTest(params: Partial<TParams>, expectedResult: TResult | undefined) {
        const { tests = [] } = this.definition;

        return this.with({
            tests: [...tests, { params, expectedResult, allowFailure: true }],
        });
    }

    public withResult<T>(type: ColumnType) {
        return this.with({ result: { type } }) as Col<TParams, T>;
    }

    public withStringResult() {
        return this.withResult<string>("string");
    }

    public withDateResult() {
        return this.withResult<Date>("date-time");
    }

    public withPrimitiveResult() {
        return this.withResult<string>("primitive");
    }

    public withImageResult() {
        return this.withResult<string>("image-uri");
    }

    public withNumberResult() {
        return this.withResult<number>("number");
    }

    public withBooleanResult() {
        return this.withResult<boolean>("boolean");
    }

    public withStringArrayResult() {
        return this.withResult<string[]>({ kind: "array", items: "string" });
    }

    public withNumberArrayResult() {
        return this.withResult<number[]>({ kind: "array", items: "number" });
    }

    public withPrimitiveArrayResult() {
        return this.withResult<PrimitiveValue[]>({ kind: "array", items: "primitive" });
    }

    public withParam<TParam, TName extends string>(type: ColumnType, name: TName, displayName?: string) {
        if (displayName === undefined) {
            displayName = startCase(name);
        }
        return this.with({
            params: { ...this.definition.params, [name]: { type, displayName } },
        }) as Col<TParams & Partial<Record<TName, TParam>>, TResult>;
    }

    public withRequiredParam<TParam, TName extends string>(type: ColumnType, name: TName, displayName?: string) {
        return this.withParam(type, name, displayName).with({}, [name]) as Col<
            TParams & Record<TName, TParam>,
            TResult
        >;
    }

    public withPrimitiveParam<T extends string>(name: T, displayName?: string) {
        return this.withParam<any, T>("primitive", name, displayName);
    }

    public withBooleanParam<T extends string>(name: T, displayName?: string) {
        return this.withParam<boolean, T>("boolean", name, displayName);
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

    public withRequiredPrimitiveParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<any, T>("primitive", name, displayName);
    }

    public withRequiredURIParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<string, T>("uri", name, displayName);
    }

    public withRequiredBooleanParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<boolean, T>("boolean", name, displayName);
    }

    public withRequiredStringParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<string, T>("string", name, displayName);
    }

    public withRequiredDateParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<string, T>("date-time", name, displayName);
    }

    public withRequiredNumberParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<number, T>("number", name, displayName);
    }

    public withStringArrayParam<T extends string>(name: T, displayName?: string) {
        return this.withParam<string[], T>({ kind: "array", items: "string" }, name, displayName);
    }

    public withRequiredStringArrayParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<string[], T>({ kind: "array", items: "string" }, name, displayName);
    }

    public withNumberArrayParam<T extends string>(name: T, displayName?: string) {
        return this.withParam<number[], T>({ kind: "array", items: "number" }, name, displayName);
    }

    public withPrimitiveArrayParam<T extends string>(name: T, displayName?: string) {
        return this.withParam<PrimitiveValue[], T>({ kind: "array", items: "primitive" }, name, displayName);
    }

    public withRequiredPrimitiveArrayParam<T extends string>(name: T, displayName?: string) {
        return this.withRequiredParam<PrimitiveValue[], T>({ kind: "array", items: "primitive" }, name, displayName);
    }

    public withExample(example: TParams) {
        return this.with({ example });
    }

    public run(columnFunction: (params: TParams) => Promise<TResult | undefined> | TResult | undefined) {
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
