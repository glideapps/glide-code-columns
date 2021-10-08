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
    origin,
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

export function column(column: Column): void {
  window.addEventListener("message", e => listen(e, column));
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
