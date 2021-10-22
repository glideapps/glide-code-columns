import classNames from "classnames";

import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { getColumnManifests } from "../columns";
import { Manifest } from "../glide";
import { removeUndefineds } from "../util";
import PreviewPage from "./preview/[slug]";

interface Props {
  manifests: Record<string, Manifest>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const manifests = getColumnManifests();
  return {
    props: {
      manifests: removeUndefineds(manifests),
    },
  };
};

const Index = ({ manifests }: Props) => {
  const columns = Object.keys(manifests).sort((a, b) =>
    manifests[a].name.localeCompare(manifests[b].name)
  );
  const [selectedColumn, setSelectedColumn] = useState<string>();

  useEffect(() => {
    let { column } = localStorage;
    if (manifests[column] === undefined) {
      column = columns[0];
    }
    setSelectedColumn(column);
  });

  return (
    <div className="flex flex-col h-screen text-gray-700 dark:text-gray-50">
      <div className="h-16 bg-[#12CCE5] shadow hidden">Header</div>
      <div className="flex flex-grow w-full">
        <div className="h-screen overflow-scroll border-r w-72 dark:bg-gray-900 dark:border-transparent">
          {columns.map(column => {
            const manifest = manifests[column];
            return (
              <div
                className={classNames(
                  "p-4 flex items-center space-x-4 overflow-hidden cursor-pointer border-b dark:border-gray-600",
                  {
                    " dark:bg-gray-900 cursor-pointer hover:bg-white dark:hover:bg-gray-800":
                      column !== selectedColumn,
                    "bg-blue-500 text-white": column === selectedColumn,
                  }
                )}
                key={column}
                onClick={() => {
                  localStorage.column = column;
                  setSelectedColumn(column);
                }}
              >
                <div className="flex-grow">
                  <div className="text-base">{manifest.name}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-grow bg-gray-100 dark:bg-black">
          {selectedColumn && <PreviewPage slug={selectedColumn} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
