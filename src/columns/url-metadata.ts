import { Cache } from "../cache";
import * as glide from "../glide";

import * as cheerio from "cheerio";

const cache = new Cache();

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
    // .withReleased("direct")
    .withDescription(`Scrape metadata for a URL.`)

    .withRequiredURIParam("url")
    .withStringResult()

    .withFailingTest({ url: `https://www.glideapps.com` }, "???")

    .run(async ({ url }) => {
        try {
            return JSON.stringify(await fetchMetadata(url));
        } catch {
            return undefined;
        }
    });
