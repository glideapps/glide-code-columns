import * as glide from "../glide";

export default glide
    .columnNamed("Not")
    .withCategory("General")
    .withReleased("direct")
    .withDescription(`True becomes false. False (and blank) become true.`)

    .withBooleanParam("value")
    .withBooleanResult()

    .withTest({ value: true }, false)
    .withTest({ value: false }, true)
    .withTest({ value: undefined }, true)

    .run(({ value }) => value !== true);
