import * as glide from "../glide";

export function isFalsey(x: any): boolean {
    if (typeof x === "string") {
        return ["", "no", "false"].includes(x.toLowerCase());
    }
    if (Array.isArray(x)) {
        return x.length === 0;
    }
    return Boolean(x) === false;
}

export default glide
    .columnNamed("Is Truthy")
    .withCategory("General")
    .withReleased("direct")
    .withDescription(`True if value is true or truth-like.`)

    .withPrimitiveParam("value")
    .withBooleanResult()

    .withTest({ value: true }, true)
    .withTest({ value: "true" }, true)
    .withTest({ value: "TRUE" }, true)
    .withTest({ value: "yes" }, true)
    .withTest({ value: "" }, false)
    .withTest({ value: [] }, false)
    .withTest({ value: 0 }, false)
    .withTest({ value: "false" }, false)
    .withTest({ value: "FALSE" }, false)
    .withTest({ value: "no" }, false)
    .withTest({ value: undefined }, false)
    .withTest({ value: null }, false)

    .run(({ value }) => !isFalsey(value));
