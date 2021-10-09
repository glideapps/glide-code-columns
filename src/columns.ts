import * as fs from "fs";
import * as path from "path";

import { ColumnDefinition, Manifest, toStrictManifest } from "./glide";

export function getColumnSlugs(): string[] {
  const columnsDir = path.join(process.cwd(), "src/columns");
  return fs
    .readdirSync(columnsDir)
    .filter(p => p.endsWith(".ts"))
    .map(p => p.replace(".ts", ""));
}

export function getColumnDefinition(slug: string): ColumnDefinition<any> {
  const { default: manifest } = require(`${__dirname}/columns/${slug}`) as {
    default: ColumnDefinition<any>;
  };
  return manifest;
}

export function getColumnDefinitions(): Record<string, ColumnDefinition<any>> {
  const defs = {};
  const slugs = getColumnSlugs();
  for (const slug of slugs) {
    defs[slug] = getColumnDefinition(slug);
  }
  return defs;
}

export function getColumnManifests(): Record<string, Manifest> {
  const definitions = getColumnDefinitions();
  const manifests = Object.fromEntries(
    Object.entries(definitions).map(([slug, def]) => [
      slug,
      toStrictManifest(def),
    ])
  );
  return manifests;
}
