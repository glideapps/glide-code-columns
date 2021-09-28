import { Column, ColumnComponent } from "../glide.next";

require("lodash");

const functions = new Map<string, any>();

const run: Column = async (code, ...params) => {
  if (code?.value === undefined) return undefined;

  const functionCode = `async (p1,p2,p3)=>{ ${code.value} }`;
  const fn = eval(functionCode);
  functions.set(code.value, fn);

  return fn(...params.map((p) => p.value));
};

const HellYesCodeColumn = () => (
  <ColumnComponent
    name="Hell Yes-Code"
    description="Runs JavaScript. Includes lodash (_)."
    author="Mark Probst <mark@glideapps.com>"
    params={{
      code: {
        displayName: "JavaScript code",
        type: "string",
      },
      p1: {
        displayName: "p1",
        type: "primitive",
      },
      p2: {
        displayName: "p2",
        type: "primitive",
      },
      p3: {
        displayName: "p3",
        type: "primitive",
      },
    }}
    example={{
      code: `return "Hell " + p1.replace("no", "yes") + "!".repeat(p2)`,
      p1: `no-code`,
      p2: 5,
    }}
    result={{ type: "primitive" }}
    run={run}
  />
);

export default HellYesCodeColumn;
