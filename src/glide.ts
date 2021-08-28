export type StringColumnValue = { type: "string"; value?: string };

export type ColumnValue =
  | { type: "primitive"; value?: any }
  | StringColumnValue;

export type GlideColumn = (
  ...values: ColumnValue[]
) => Promise<any | undefined>;

export function column(column: GlideColumn) {
  return column;
}
