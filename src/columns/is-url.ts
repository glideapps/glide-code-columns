import * as glide from "../glide";

export default glide
    .columnNamed("Text is URL")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Indicates whether text is a URL.`)

    .withStringParam("url")
    .withBooleanParam("requireProtocol", "Require Protocol (e.g. 'https://')")
    .withBooleanResult()

    .withTest({ url: `google.com`, requireProtocol: false }, true)
    .withTest({ url: `google.com` }, false)
    .withTest({ url: `https://www.google.com` }, true)

    .run(({ url, requireProtocol = true }) => {
        let fullUrl = url;
        if (!requireProtocol && !fullUrl?.includes(":")) {
            fullUrl = "https://" + fullUrl;
        }
        try {
            new URL(fullUrl);
            return true;
        } catch {
            return false;
        }
    });
