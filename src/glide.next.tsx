import { useEffect, useState } from "react";
import * as glide from "./glide";
import { useRouter } from "next/dist/client/router";
import { Column } from "./glide";

export * from "./glide";
import { DuplicateIcon } from "@heroicons/react/solid";
import type { ManifestConvenient } from "./manifest";

import mixpanel from "mixpanel-browser";

type Props<TColumnParams> = ManifestConvenient<TColumnParams> & {
  run: Column;
  example?: Partial<TColumnParams>;
};

const Row: React.FC<{ title: string }> = (props) => {
  const { children, title } = props;
  return (
    <div className="py-1 sm:grid sm:grid-cols-4 sm:gap-4">
      <dt className="font-medium opacity-80">{title}</dt>
      <dd className="mt-1 sm:mt-0 sm:col-span-3">{children}</dd>
    </div>
  );
};

const Logo = () => (
  <svg
    className="w-10 h-10"
    viewBox="0 0 98 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="49" cy="49" r="49" fill="black" />
    <path
      d="M14.8667 52.3399L52.3404 14.8662V33.2624C52.3404 43.7986 43.7991 52.3399 33.2629 52.3399H14.8667Z"
      fill="white"
    />
    <path
      d="M45.527 64.604C45.527 54.0678 54.0683 45.5265 64.6045 45.5265H83.0007L45.527 83.0002V64.604Z"
      fill="white"
    />
  </svg>
);

const REPL: React.VFC<Props<any>> = (props) => {
  const {
    params,
    result: { type: resultType },
    run,
    example = {},
  } = props;
  const [result, setResult] = useState<any>();
  const [values, setValues] = useState<any[]>(
    Object.keys(params).map((name) => example[name])
  );

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
    "w-full py-2 px-3 border border-gray-400 rounded-md text-sm dark:bg-gray-700 bg-gray-50 font-mono";

  return (
    <div className="p-5 overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-900">
      <div className="space-y-6">
        {Object.values(params).map((p, i) => (
          <div>
            <div className="mb-1 text-xs font-semibold opacity-70">
              {p.displayName}
            </div>
            <input
              className={inputClassName}
              defaultValue={values[i]}
              onChange={(e) => {
                // TODO make this better
                // We need to coerce the value depending on the parameter type.
                let value: any = e.target.value;
                if (p.type === "number") {
                  value = Number.parseFloat(value);
                } else if (p.type === "primitive") {
                  try {
                    value = Number.parseFloat(value);
                  } catch {
                    // Pass
                  }
                }
                setValues([
                  ...values.slice(0, i),
                  value,
                  ...values.slice(i + 1, values.length - i),
                ]);
              }}
              placeholder={p.displayName}
            ></input>
          </div>
        ))}
      </div>
      <hr className="my-8 dark:border-gray-500" />
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
};

// Loads the expected manifest to display and wire the column
export function ColumnComponent<TColumnParams>(props: Props<TColumnParams>) {
  const { run, ...manifest } = props;
  const router = useRouter();
  const [host, setHost] = useState<string>();

  useEffect(() => {
    setHost(window.location.host);
    glide.column(run);

    mixpanel.init("085a64083ef900e51ed4ac6b864431cc");
    mixpanel.track("mount", { name: manifest.name });
  }, []);

  if (manifest === undefined) {
    return null;
  }

  const installUrl =
    host === undefined ? undefined : `https://${host}${router.asPath}`;
  const github = `https://github.com/glideapps/glide-code-columns/blob/master/src/pages${router.asPath}.tsx`;

  return (
    <div className="h-screen max-w-screen-lg p-5 mx-auto space-y-2 bg-gray-100 dark:bg-black dark:text-white">
      <div className="md:flex">
        <div className="flex-grow">
          <h3 className="text-2xl font-medium">{manifest.name}</h3>
          <p className="max-w-2xl mt-1 mb-4 opacity-80">
            {manifest.description}
          </p>
        </div>
        <dl className="">
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
          <Row title="Source">
            <a className="text-blue-500" href={github} target="_blank">
              Open on GitHub
            </a>
          </Row>
        </dl>
      </div>
      <REPL {...props} />
      <div className="absolute right-4 bottom-4">
        <a href="https://glideapps.com" target="_blank">
          <Logo />
        </a>
      </div>
    </div>
  );
}
