import * as fs from "fs";

import { Manifest } from "./glide";

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
    .readdirSync(`${__dirname}/columns`)
    .filter(p => p.endsWith(".js"));

  let manifests: Record<string, Manifest> = {};

  for (const pageJSFile of pages) {
    const c = require(`./columns/${pageJSFile}`);
    const shortname = pageJSFile.split(".")[0];
    const manifestDir = `public/${shortname}`;
    const manifestFile = `${manifestDir}/glide.json`;

    if (!fs.existsSync(manifestDir)) {
      fs.mkdirSync(manifestDir, { recursive: true });
    }
    fs.writeFileSync(manifestFile, JSON.stringify(c, null, 2));

    manifests[shortname] = c;
  }

  fs.writeFileSync(`public/all.json`, JSON.stringify(manifests, null, 2));
}

writeManifests();
writeGlideBrandImages();
