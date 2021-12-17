import * as glide from "../glide";

import { isFalsey } from "./falsey";

export default glide
    .columnNamed("Is Truthy")
    .withCategory("General")
    .withReleased("direct")
    .withDescription(`True if value is true or true-like, otherwise false.`)

    .withPrimitiveParam("value")
    .withBooleanResult()

    .withTest({ value: true }, true)
    .withTest({ value: "true" }, true)
    .withTest({ value: "TRUE" }, true)
    .withTest({ value: "yes" }, true)
    .withTest({ value: "" }, false)
    .withTest({ value: [] }, false)
    .withTest({ value: 0 }, false)
    .withTest({ value: "0" }, false)
    .withTest({ value: "false" }, false)
    .withTest({ value: "FALSE" }, false)
    .withTest({ value: "no" }, false)
    .withTest({ value: undefined }, false)
    .withTest({ value: null }, false)

    .run(({ value }) => !isFalsey(value));
