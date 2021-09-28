import { SVGProps, useEffect, useState } from "react";
import * as glide from "./glide";
import { useRouter } from "next/dist/client/router";
import { Column } from "./glide";

export * from "./glide";
import { DuplicateIcon } from "@heroicons/react/outline";
import type { ManifestConvenient } from "./manifest";

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

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// Loads the expected manifest to display and wire the column
export function ColumnComponent<TColumnParams>(props: Props<TColumnParams>) {
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

  const installUrl = host === undefined ? undefined : `${host}${router.asPath}`;
  const github = `https://github.com/glideapps/glide-code-columns/blob/master/src/pages${router.asPath}.tsx`;

  return (
    <div className="h-screen max-w-screen-lg p-5 mx-auto space-y-2 bg-gray-100 dark:bg-black dark:text-white">
      <div className="items-start md:flex">
        <div className="flex-grow mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-medium">{manifest.name}</h3>
            <GitHubIcon
              className="w-6 h-6 opacity-50 cursor-pointer hover:opacity-100"
              onClick={() => window.open(github, "_blank")}
            />
          </div>
          <p className="max-w-2xl text-sm opacity-80">{manifest.description}</p>
        </div>
        {installUrl && (
          <div
            className="flex items-center py-1 pl-3 pr-2 space-x-2 font-mono text-xs bg-white border rounded cursor-pointer dark:border-gray-600 dark:bg-gray-800"
            onClick={() => {
              void navigator.clipboard.writeText(`https://${installUrl}`);
            }}
          >
            <div className="opacity-70">{installUrl}</div>
            <DuplicateIcon className="w-5 h-5 opacity-60 hover:opacity-100" />
          </div>
        )}
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
