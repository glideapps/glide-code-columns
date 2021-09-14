import { useEffect, useState } from "react";
import * as glide from "./glide";
import { useRouter } from "next/dist/client/router";
import { Manifest, GlideColumn } from "./glide";

export * from "./glide";

export interface ColumnProps {
  manifest: Manifest;
}

const Row: React.FC<{ title: string }> = (props) => {
  const { children, title } = props;
  return (
    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {children}
      </dd>
    </div>
  );
};

// Loads the expected manifest to display and wire the column
export const Column: React.VFC<Manifest & { children: GlideColumn }> = (
  props
) => {
  const { children: run, ...manifest } = props;
  const router = useRouter();

  useEffect(() => {
    glide.column(run);
  }, []);

  if (manifest === undefined) {
    return null;
  }

  const installUrl = `https://column.sh${router.asPath}`;
  const github = `https://github.com/glideapps/glide-code-columns/blob/master/src/pages${router.asPath}.tsx`;

  return (
    <div className="p-10 bg-gray-100" style={{ height: "100vh" }}>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {manifest.name}
          </h3>
          <p className="max-w-2xl mt-1 text-sm text-gray-500">
            {manifest.description}
          </p>
        </div>
        <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <Row title="Author">{manifest.author}</Row>
            <Row title="URL">
              <a className="text-blue-500" href={installUrl} target="_blank">
                {installUrl}
              </a>
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
