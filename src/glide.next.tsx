import { useEffect, useState } from "react";
import * as glide from "./glide";
import { useRouter } from "next/dist/client/router";
import { Manifest } from "./glide";

export * from "./glide";

export interface ColumnProps {
  calculate: glide.GlideColumn;
}

// Loads the expected manifest to display and wire the column
export const Column: React.FC<ColumnProps> = (props) => {
  const { children, calculate } = props;
  const router = useRouter();
  const [manifest, setManifest] = useState<Manifest | undefined>(undefined);

  useEffect(() => {
    fetch(`${router.asPath}/glide.json`)
      .then((x) => x.json())
      .then(setManifest);

    glide.column(calculate);
  }, []);

  if (manifest === undefined) {
    return null;
  }

  const github = `https://github.com/glideapps/glide-code-columns/blob/master/src/pages${router.asPath}.tsx`;

  return (
    <div className="relative rounded-lg shadow bg-white border p-5 space-y-10">
      <a
        className="inline-block absolute top-4 right-4 rounded border bg-gray-100 shadow px-4 py-1"
        href={github}
        target="_blank"
      >
        View Source
      </a>
      <pre>{JSON.stringify(manifest, null, 2)}</pre>
      {children}
    </div>
  );
};

export function column(column: glide.GlideColumn): React.VFC {
  return () => (
    <div className="bg-gray-100 p-10" style={{ height: "100vh" }}>
      <Column calculate={column} />
    </div>
  );
}
