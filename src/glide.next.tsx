import { useEffect, useState } from "react";
import * as glide from "./glide";
import { Column } from "./glide";

import "iframe-resizer";

export * from "./glide";
import type { ManifestConvenient } from "./manifest";

type Props<TColumnParams> = ManifestConvenient<TColumnParams> & {
  run: Column;
  example?: Partial<TColumnParams>;
};

// Loads the expected manifest to display and wire the column
export function ColumnComponent<TColumnParams>(props: Props<TColumnParams>) {
  const {
    params,
    result: { type: resultType },
    run,
    example = {},
  } = props;
  const [result, setResult] = useState<any>();
  const [values, setValues] = useState<any[]>(
    Object.keys(params).map(name => example[name])
  );

  useEffect(() => glide.column(run));

  useEffect(() => {
    const args = values.map(
      (value, i) =>
        ({
          ...params[i],
          value,
        } as glide.ColumnValue)
    );
    run(...args).then(setResult);
  }, [values.join("")]);

  const inputClassName =
    "w-full py-2 px-3 border border-gray-400 rounded-md text-xs bg-white font-mono";

  return (
    <div className="p-5">
      <div className="space-y-6">
        {Object.values(params).map((p, i) => (
          <div>
            <div className="mb-1 text-sm font-semibold opacity-70">
              {p.displayName}
            </div>
            <input
              className={inputClassName}
              defaultValue={values[i]}
              onChange={e => {
                // TODO make this better
                // We need to coerce the value depending on the parameter type.
                let value: any = e.target.value;
                if (p.type === "number" || p.type === "primitive") {
                  if (NaN !== Number(value)) {
                    value = Number(value);
                  }
                }
                setValues([
                  ...values.slice(0, i),
                  value,
                  ...values.slice(i + 1, values.length - i),
                ]);
              }}
            ></input>
          </div>
        ))}
      </div>
      <hr className="my-8" />
      <div className="">
        <div className="mb-1 text-xs font-semibold opacity-70">Result</div>
        {resultType === "image-uri" ? (
          <img className="object-contain max-w-lg mx-auto" src={result} />
        ) : (
          <input
            disabled
            className={inputClassName}
            value={result ?? ""}
          ></input>
        )}
      </div>
    </div>
  );
}
