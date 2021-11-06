import * as glide from "../glide";

const gravatar = require("gravatar.js");

const defaults = ["404", "mp", "indenticon", "monsterid", "wavatar", "retro", "robohash", "blank"];

export default glide
    .columnNamed("Photo for Email")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription(`Uses gravatar.com to find a person's photo given their email address.`)

    .withRequiredStringParam("email")
    .withNumberParam("size")
    .withStringParam("defaultIcon", `Fallback ${defaults.join(", ")}`)
    .withImageResult()

    .withFailingTest({ email: `david@glideapps.com` }, "???")

    .run(async ({ email, size = 200, defaultIcon = "404" }) => {
        try {
            const response = await gravatar.resolve(email, { defaultIcon, size });
            console.log({ response });
            return response;
        } catch {
            return undefined;
        }
    });
