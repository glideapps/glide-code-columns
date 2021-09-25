import classNames from "classnames";
import * as fs from "fs";

import { GetStaticProps } from "next";
import { useState } from "react";
import { Manifest } from "../glide";

export async function getAllColumnComponents(): Promise<string[]> {
  return fs
    .readdirSync(`src/pages`)
    .filter((p) => p.endsWith(".tsx"))
    .filter((p) => !["_app.tsx", "index.tsx"].includes(p))
    .map((p) => p.replace(".tsx", ""));
}

export async function getAllManifests(): Promise<Record<string, Manifest>> {
  const columns = await getAllColumnComponents();
  const manifests: Record<string, Manifest> = {};
  for (const column of columns) {
    const json = fs.readFileSync(`public/${column}/glide.json`, "utf8");
    manifests[column] = JSON.parse(json);
  }
  return manifests;
}

interface Props {
  manifests: Record<string, Manifest>;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const manifests = await getAllManifests();
  return {
    props: {
      manifests,
    },
  };
};

const Index = ({ manifests }: Props) => {
  const columns = Object.keys(manifests).sort((a, b) =>
    manifests[a].name.localeCompare(manifests[b].name)
  );
  const [selectedColumn, setSelectedColumn] = useState(columns[0]);
  return (
    <div className="flex flex-col h-screen text-gray-700 dark:text-gray-50">
      <div className="h-16 bg-[#12CCE5] shadow hidden">Header</div>
      <div className="flex flex-grow w-full">
        <div className="border-r w-72 dark:bg-gray-900 dark:border-transparent">
          {columns.map((column) => {
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
                onClick={() => setSelectedColumn(column)}
              >
                <div className="flex-grow">
                  <div className="text-base">{manifest.name}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-grow bg-gray-100 dark:bg-black">
          <iframe className="w-full h-full" src={`/${selectedColumn}`}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Index;
