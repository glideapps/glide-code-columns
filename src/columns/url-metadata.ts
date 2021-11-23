import { Cache } from "../cache";
import * as glide from "../glide";

import * as cheerio from "cheerio";

const cache = new Cache();

const defaultPart = "all";

const parts = {
    [defaultPart]: JSON.stringify,
    title: x => x.title,
    description: x => x.description,
    image: x => x.image,
};

async function fetchMetadata(url: string) {
    const html = await cache.getWith(url, () => fetch(url).then(x => x.text()));
    const $ = cheerio.load(html);

    const title = $("title").text();
    const description = $(`meta[property="og:description"]`).attr("content");
    const image = $(`meta[property="og:image"]`).attr("content");
    const type = $(`meta[property="og:type"]`).attr("content");

    const result = { title, description, image, type };
    return result;
}

export default glide
    .columnNamed("URL Metadata")
    .withCategory("Data & APIs")
    .withReleased("direct")
    .withDescription(`Scrape metadata for a URL.`)

    .withRequiredURIParam("url")
    .withStringParam("part", `Parts (${Object.keys(parts).join(", ")})`)

    .withStringResult()

    .withFailingTest({ url: `https://www.glideapps.com` }, "???")

    .run(async ({ url, part = defaultPart }) => {
        try {
            const toPart = parts[part];
            if (toPart === undefined) return undefined;
            return toPart(await fetchMetadata(url));
        } catch {
            return undefined;
        }
    });
