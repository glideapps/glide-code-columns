import * as glide from "../glide";

const parts: Record<string, (url: URL) => string> = {
    host: x => x.host,
    pathname: x => x.pathname,
    hostname: x => x.hostname,
    protocol: x => x.protocol,
    search: x => x.search,
    hash: x => x.hash,
    filename: x => x.pathname.split("/").pop() ?? "",
    all: getAllParts,
};

function getAllParts(url: URL): string {
    const all = {};
    for (const [part, get] of Object.entries(parts)) {
        if (part === "all") continue;
        all[part] = get(url);
    }
    return JSON.stringify(all);
}

export default glide
    .columnNamed("Get Part of URL")
    .withCategory("Data & APIs")
    .withDescription(`Extract pieces of a URL.`)
    .withReleased("direct")

    .withRequiredURIParam("uri", "URL")
    .withStringParam("part", `Part (${Object.keys(parts).sort().join(", ")}, or parameter name)`)
    .withStringResult()

    .withTest({ uri: "https://www.glideapps.com", part: "hostname" }, "www.glideapps.com")
    .withTest({ uri: "https://www.glideapps.com", part: "protocol" }, "https:")
    .withTest({ uri: "https://www.glideapps.com/blog", part: "pathname" }, "/blog")
    .withTest({ uri: "https://www.glideapps.com?message=hello%20world", part: "message" }, "hello world")

    .withTest({ uri: "https://www.glideapps.com/blog/post/123", part: "filename" }, "123")
    .withTest({ uri: "https://www.glideapps.com/blog/post/123.pdf", part: "filename" }, "123.pdf")
    .withTest({ uri: "https://www.glideapps.com/blog/post/123.pdf?message=hello%20world", part: "filename" }, "123.pdf")

    .run(({ uri, part = "all" }) => {
        try {
            const url = new URL(uri);
            const extractPart = parts[part];
            if (extractPart !== undefined) {
                return extractPart(url);
            }
            if (url.searchParams.has(part)) {
                return url.searchParams.get(part) ?? undefined;
            }
            return undefined;
        } catch {
            return undefined;
        }
    });
