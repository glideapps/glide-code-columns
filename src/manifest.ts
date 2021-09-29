import * as fs from "fs";

import { ColumnParam, Manifest } from "./glide.next";

export type ManifestConvenient<T> = Omit<Manifest, "params"> & {
  params: { [Name in keyof T]: Omit<ColumnParam, "name"> };
};

function toStrictManifest(convenient: ManifestConvenient<any>): Manifest {
  // We carefully pick out just the props in manifest, because more
  // could come in from the component.
  const { name, description, author, result, params } = convenient;
  return {
    name,
    description,
    author,
    result,
    params: Object.entries(params).map(([name, param]) => ({
      name,
      ...param,
    })),
  };
}

function writeGlideBrandImages() {
  const listImages = (c: string) =>
    fs
      .readdirSync(`public/glide-brand-image/${c}`)
      .filter(p => p.endsWith(".jpg") || p.endsWith(".png"))
      .map(p => `/glide-brand-image/${c}/${p}`);

  const images = {
    "3d": listImages("3d"),
    avatar: listImages("avatar"),
    gradient: listImages("gradient"),
  };

  fs.writeFileSync(
    `public/glide-brand-image/images.json`,
    JSON.stringify(images, null, 2)
  );
}

function writeManifests() {
  const pages = fs
    .readdirSync(`${__dirname}/pages`)
    .filter(p => !["_app.js", "index.js"].includes(p))
    .filter(p => p.endsWith(".js"));

  let manifests: Record<string, Manifest> = {};

  for (const pageJSFile of pages) {
    const { default: exports } = require(`./pages/${pageJSFile}`);
    const { props: manifestConvenient } = exports() as {
      props: ManifestConvenient<any>;
    };
    const shortname = pageJSFile.split(".")[0];
    const manifestDir = `public/${shortname}`;
    const manifestFile = `${manifestDir}/glide.json`;
    const manifest = toStrictManifest(manifestConvenient);

    if (!fs.existsSync(manifestDir)) {
      fs.mkdirSync(manifestDir, { recursive: true });
    }
    fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));

    manifests[shortname] = manifest;
  }

  fs.writeFileSync(`public/all.json`, JSON.stringify(manifests, null, 2));
}

writeManifests();
writeGlideBrandImages();
