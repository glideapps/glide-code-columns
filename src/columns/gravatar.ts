import * as glide from "../glide";

const gravatar = require("gravatar.js");

export default glide
    .columnNamed("Email to Photo")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription(`Uses gravatar.com to find a person's photo given their email address.`)

    .withRequiredStringParam("email")
    .withNumberParam("size")
    .withImageResult()

    .withFailingTest({ email: `david@glideapps.com` }, "???")

    .run(async ({ email, size = 200 }) => {
        try {
            return await gravatar.resolve(email, { defaultIcon: "404", size });
        } catch {
            return undefined;
        }
    });
