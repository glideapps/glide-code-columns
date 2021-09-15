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
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
      <dt className="font-medium opacity-80">{title}</dt>
      <dd className="mt-1 sm:mt-0 sm:col-span-3">{children}</dd>
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

  const installUrl = host === undefined ? undefined : `${host}${router.asPath}`;
  const github = `https://github.com/glideapps/glide-code-columns/blob/master/src/pages${router.asPath}.tsx`;

  return (
    <div className="h-screen px-10 py-4 bg-gray-100 dark:bg-black dark:text-white">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg dark:bg-gray-900">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-3xl font-medium">{manifest.name}</h3>
          <p className="max-w-2xl mt-1 text-lg opacity-80">
            {manifest.description}
          </p>
        </div>
        <div className="px-4 py-5 border-t border-gray-200 dark:border-gray-700 sm:p-0">
          <dl className="">
            <Row title="Author">{manifest.author}</Row>
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
    </div>
  );
};
