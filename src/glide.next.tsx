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

  return (
    <div>
      <pre>{JSON.stringify(manifest, null, 2)}</pre>
      {children}
    </div>
  );
};

export function column(column: glide.GlideColumn): React.VFC {
  return () => <Column calculate={column} />;
}
