import { Cache } from "../cache";
import * as glide from "../glide";

const cache = new Cache();

export default glide
    .columnNamed("URL Metadata")
    .withCategory("Data & APIs")
    .withReleased("sandboxed")
    .withDescription(`Scrape metadata for a URL.`)

    .withRequiredURIParam("url")

    .withStringResult()

    .withFailingTest({ url: `https://www.glideapps.com` }, "???")

    .run(async ({ url }) => {
        try {
            const meta = await cache.fetch(`/api/fetch-metadata?url=${encodeURIComponent(url)}`);
            return JSON.stringify(meta);
        } catch {
            return undefined;
        }
    });
