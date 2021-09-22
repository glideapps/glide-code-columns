import { useEffect, useState } from "react";
import * as glide from "./glide";
import { useRouter } from "next/dist/client/router";
import { Manifest, Column } from "./glide";

export * from "./glide";
import { DuplicateIcon } from "@heroicons/react/solid";

export interface ColumnProps {
  manifest: Manifest;
}

const Row: React.FC<{ title: string }> = (props) => {
  const { children, title } = props;
  return (
    <div className="py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
      <dt className="font-medium opacity-80">{title}</dt>
      <dd className="mt-1 sm:mt-0 sm:col-span-3">{children}</dd>
    </div>
  );
};

const REPL: React.VFC<Manifest & { run: Column }> = (props) => {
  const {
    params,
    result: { type: resultType },
    run,
  } = props;
  const [result, setResult] = useState<any>();
  const [values, setValues] = useState<any[]>(params.map(() => undefined));

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
    "w-full py-2 px-3 border border-gray-400 rounded-lg text-sm";
  return (
    <div className="p-5 mt-5 overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-900">
      <div className="space-y-6">
        {params.map((p, i) => (
          <div>
            <div className="mb-1 text-xs font-semibold uppercase opacity-70">
              {p.displayName}
            </div>
            <input
              className={inputClassName}
              onChange={(e) => {
                setValues([
                  ...values.slice(0, i),
                  e.target.value,
                  ...values.slice(i + 1, values.length - i),
                ]);
              }}
              placeholder={p.displayName}
            ></input>
          </div>
        ))}
      </div>
      <hr className="my-8" />
      <div className="">
        <div className="mb-1 text-xs font-semibold uppercase opacity-70">
          Result
        </div>
        {resultType === "image-uri" ? (
          <img className="object-contain max-w-lg mx-auto" src={result} />
        ) : (
          <input disabled className={inputClassName} value={result}></input>
        )}
      </div>
    </div>
  );
};

// Loads the expected manifest to display and wire the column
export const ColumnComponent: React.VFC<Manifest & { run: Column }> = (
  props
) => {
  const { run, ...manifest } = props;
  const router = useRouter();
  const [host, setHost] = useState<string>();

  useEffect(() => {
    setHost(window.location.host);
    glide.column(run);
  }, []);

  if (manifest === undefined) {
    return null;
  }

  const installUrl =
    host === undefined ? undefined : `https://${host}${router.asPath}`;
  const github = `https://github.com/glideapps/glide-code-columns/blob/master/src/pages${router.asPath}.tsx`;

  return (
    <div className="h-screen max-w-2xl px-4 py-4 mx-auto bg-gray-100 dark:bg-black dark:text-white">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-900">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-2xl font-medium">{manifest.name}</h3>
          <p className="max-w-2xl mt-1 opacity-80">{manifest.description}</p>
        </div>
        <div className="px-4 py-5 border-t border-gray-200 dark:border-gray-700 sm:p-0">
          <dl className="">
            {/* <Row title="Author">{manifest.author}</Row> */}
            <Row title="URL">
              {installUrl && (
                <div className="flex items-center space-x-2">
                  <div className="opacity-70">{installUrl}</div>
                  <DuplicateIcon
                    className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100"
                    onClick={() => {
                      void navigator.clipboard.writeText(installUrl);
                    }}
                  />
                </div>
              )}
            </Row>
            <Row title="GitHub">
              <a className="text-blue-500" href={github} target="_blank">
                View source code
              </a>
            </Row>
          </dl>
        </div>
      </div>
      <REPL {...props} />
    </div>
  );
};
