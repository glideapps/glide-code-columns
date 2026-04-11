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

// Synchronous version — works in Jest/ts-jest where ESM deps are transpiled to CJS.
export function getColumnDefinition(slug: string): ColumnDefinition<any> {
    const { default: manifest } = require(`${__dirname}/columns/${slug}`) as {
        default: ColumnDefinition<any>;
    };
    return manifest;
}

// Async version — works in Next.js webpack server context where ESM packages
// may be compiled as async modules (using import() properly awaits them).
export async function getColumnDefinitionAsync(slug: string): Promise<ColumnDefinition<any>> {
    const { default: manifest } = await import(`./columns/${slug}`) as {
        default: ColumnDefinition<any>;
    };
    return manifest;
}

export async function getColumnManifests(): Promise<Record<string, Manifest>> {
    const slugs = getColumnSlugs();
    const pairs = await Promise.all(
        slugs.map(async slug => [slug, toStrictManifest(await getColumnDefinitionAsync(slug))] as const)
    );
    return Object.fromEntries(pairs);
}
