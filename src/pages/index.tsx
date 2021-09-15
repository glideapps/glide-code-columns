import classNames from "classnames";
import * as fs from "fs";

import { GetStaticProps } from "next";
import { useState } from "react";
import { Manifest } from "../glide";

import { BeakerIcon } from "@heroicons/react/solid";

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
    <div className="flex flex-col h-screen">
      <div className="h-16 bg-[#12CCE5] shadow hidden">Header</div>
      <div className="flex flex-grow w-full">
        <div className="w-1/3 p-4 space-y-2 border-r">
          {columns.map((column) => {
            const manifest = manifests[column];
            return (
              <div
                className={classNames(
                  "p-4 border rounded-lg transition-shadow flex items-center space-x-2",
                  {
                    "text-gray-600 bg-gray-50 cursor-pointer hover:shadow-md hover:bg-white":
                      column !== selectedColumn,
                    "text-black bg-white shadow": column === selectedColumn,
                  }
                )}
                key={column}
                onClick={() => setSelectedColumn(column)}
              >
                <BeakerIcon className="w-8 h-8 text-green-600" />
                <div className="flex-grow">
                  <div className="font-medium">{manifest.name}</div>
                  <div className="text-sm opacity-80">
                    {manifest.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-grow bg-gray-100">
          <iframe className="w-full h-full" src={`/${selectedColumn}`}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Index;
