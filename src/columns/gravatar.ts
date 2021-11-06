import * as glide from "../glide";
const gravatar = require("gravatar.js");

export default glide
    .columnNamed("Photo for Email")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription(`Indicates whether text is an email.`)

    .withRequiredStringParam("email")
    .withNumberParam("size")
    .withImageResult()

    .withFailingTest({ email: `david@glideapps.com` }, "???")

    .run(({ email, size = 200 }) => gravatar.resolve(email, { defaultIcon: "404", size }));
