import * as glide from "../glide";
import { isFalsey } from "./truthy";

export default glide
    .columnNamed("Is Falsey")
    .withCategory("General")
    .withReleased("direct")
    .withDescription(`True if value is false or false-like.`)

    .withPrimitiveParam("value")
    .withBooleanResult()

    .withTest({ value: true }, !true)
    .withTest({ value: "true" }, !true)
    .withTest({ value: "TRUE" }, !true)
    .withTest({ value: "yes" }, !true)
    .withTest({ value: "" }, !false)
    .withTest({ value: [] }, !false)
    .withTest({ value: 0 }, !false)
    .withTest({ value: "false" }, !false)
    .withTest({ value: "FALSE" }, !false)
    .withTest({ value: "no" }, !false)
    .withTest({ value: undefined }, !false)
    .withTest({ value: null }, !false)

    .run(({ value }) => isFalsey(value));
