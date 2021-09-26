import { Column, ColumnComponent } from "../glide.next";
import { exec, env } from "@jcubic/lips";

const run: Column = async (code, ...params) => {
  if (code?.value === undefined) return undefined;

  const local = env.inherit(
    "name",
    Object.fromEntries(params.map((p, i) => [`p${i + 1}`, p.value]))
  );
  try {
    const results = await exec(code.value, local);
    return results[0];
  } catch {
    return undefined;
  }
};

const LispColumn = () => (
  <ColumnComponent
    name="LISP"
    description="Runs LISP using https://github.com/jcubic/lips"
    author="David Siegel <david@glideapps.com>"
    params={{
      code: {
        displayName: "LISP",
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
      p4: {
        displayName: "p4",
        type: "primitive",
      },

      p5: {
        displayName: "p5",
        type: "primitive",
      },
    }}
    example={{
      code: `(+ 1 2 p1)`,
      p1: 5,
    }}
    result={{ type: "primitive" }}
    run={run}
  />
);

export default LispColumn;
