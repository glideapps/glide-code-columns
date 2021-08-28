export type StringColumnValue = { type: "string"; value?: string };

export type ColumnValue =
  | { type: "primitive"; value?: any }
  | StringColumnValue;

export type GlideColumn = (
  ...values: ColumnValue[]
) => Promise<any | undefined>;

export function assertStringColumn(
  x: ColumnValue
): asserts x is StringColumnValue {
  if (x.type !== "string") throw new Error("Not a StringColumnValue");
}

export function column(column: GlideColumn) {
  return column;
}
