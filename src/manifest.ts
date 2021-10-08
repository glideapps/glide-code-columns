import * as fs from "fs";

import { ColumnParam, Manifest } from "./glide.next";

export type ManifestConvenient<T> = Omit<Manifest, "params" | "icon"> & {
  params: { [Name in keyof T]: Omit<ColumnParam, "name"> };
  icon?: "glide" | string;
};

const glideIcon = `
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `;

const defaultIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;

function toStrictManifest(convenient: ManifestConvenient<any>): Manifest {
  // We carefully pick out just the props in manifest, because more
  // could come in from the component.
  const { name, description, author, result, params, about, video } =
    convenient;

  let { icon = defaultIcon } = convenient;
  if (icon === "glide") {
    icon = glideIcon;
  }

  return {
    name,
    description,
    author,
    result,
    about,
    icon,
    video,
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
