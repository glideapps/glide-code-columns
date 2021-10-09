import * as fs from "fs";
import type { Manifest } from "../src/glide";

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
  const columns = fs.readdirSync(`src/columns`).filter(p => p.endsWith(".ts"));

  let manifests: Record<string, Manifest> = {};

  for (const src of columns) {
    const slug = src.split(".")[0];
    const manifest = require(`../public/${slug}/glide.json`);
    manifests[slug] = manifest;
  }

  fs.writeFileSync(`public/all.json`, JSON.stringify(manifests, null, 2));
}

writeManifests();
writeGlideBrandImages();
