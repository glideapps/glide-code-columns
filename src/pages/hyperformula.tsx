import { Column, ColumnComponent } from "../glide.next";
import { HyperFormula } from "hyperformula";

const options = {
  precisionRounding: 4,
  licenseKey: "gpl-v3",
};

const run: Column = async (formula, ...params) => {
  if (formula === undefined) return undefined;
  const B1 = formula.value;
  const [row1, ...rest] = params.map((p) => p.value);
  const data = [[row1, B1], ...rest.map((x) => [x])];

  const hyperformula = HyperFormula.buildFromArray(data, options);
  return hyperformula.getCellValue({ row: 0, col: 1, sheet: 0 });
};

const HyperformulaColumn = () => (
  <ColumnComponent
    name="Hyperformula"
    description="https://handsontable.github.io/hyperformula/"
    author="David Siegel <david@glideapps.com>"
    params={{
      formula: {
        displayName: "Formula",
        type: "string",
      },
      A1: {
        displayName: "A1",
        type: "primitive",
      },
      A2: {
        displayName: "A2",
        type: "primitive",
      },
      A3: {
        displayName: "A3",
        type: "primitive",
      },
      A4: {
        displayName: "A4",
        type: "primitive",
      },
      A5: {
        displayName: "A5",
        type: "primitive",
      },
    }}
    example={{
      formula: `= A1 + A2`,
      A1: `= MAX(3, A3, 5)`,
      A2: `= LEN("Glide")`,
      A3: 42,
    }}
    result={{ type: "primitive" }}
    run={run}
  />
);

export default HyperformulaColumn;
