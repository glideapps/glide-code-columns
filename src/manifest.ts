import * as fs from "fs";

import { Manifest } from "./glide.next";

const pages = fs
  .readdirSync(`${__dirname}/pages`)
  .filter((p) => !["_app.js", "index.js"].includes(p))
  .filter((p) => p.endsWith(".js"));

for (const page of pages) {
  const { default: exports } = require(`./pages/${page}`);
  const { props: manifest } = exports() as { props: Manifest };
  const manifestDir = `public/${page.split(".")[0]}`;
  const manifestFile = `${manifestDir}/glide.json`;

  // Props can have extra stuff, so we copy
  const strictManifest: Manifest = {
    name: manifest.name,
    description: manifest.description,
    author: manifest.author,
    params: manifest.params,
    result: manifest.result,
  };

  if (!fs.existsSync(manifestDir)) {
    fs.mkdirSync(manifestDir, { recursive: true });
  }
  fs.writeFileSync(manifestFile, JSON.stringify(strictManifest, null, 2));
}
