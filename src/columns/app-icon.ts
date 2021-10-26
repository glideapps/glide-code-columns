import { Cache } from "../cache";

import * as cheerio from "cheerio";
import * as glide from "../glide";

const cache = new Cache<string | undefined>({ timeoutSeconds: 5 * 60 });

// This was causing a timeout on generating expert pages
async function fetchAppIconPotentiallyBlockingIndefinitely(appUrl: string): Promise<string | undefined> {
    try {
        const html = await fetch(appUrl).then(x => x.text());
        const $ = cheerio.load(html);
        return $(`meta[property="og:image"]`).attr("content");
    } catch {
        return undefined;
    }
}

export async function fetchAppIcon(appUrl: string): Promise<string | undefined> {
    const timeout = new Promise<undefined>(res => setTimeout(() => res(undefined), 3000));
    return await Promise.race([fetchAppIconPotentiallyBlockingIndefinitely(appUrl), timeout]);
}

const run: glide.Column = async url => {
    if (url.value === undefined) return undefined;
    return await cache.getWith(url.value.toString(), fetchAppIcon);
};

export default glide.column({
    name: "Glide App Icon",
    category: "Glide",
    description: "Gets a Glide app's icon",
    author: "David Siegel <david@glideapps.com>",
    params: {
        url: {
            displayName: "Glide URL",
            type: "uri",
        },
    },
    result: { type: "image-uri" },
    example: {
        url: "https://employees.glideapp.io",
    },
    run,
    about: `
      Given a URL to a Glide app or page, this column produces a link to the icon for that app or page.
    `,
    icon: "glide",
});
