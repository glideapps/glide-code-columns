import * as glide from "../glide";

export function isFalsey(x: any): boolean {
    if (typeof x === "string") {
        return ["", "no", "false"].includes(x.trim().toLowerCase());
    }
    if (Array.isArray(x)) {
        return x.length === 0;
    }
    return Boolean(x) === false;
}

export default glide
    .columnNamed("Is Falsey")
    .withCategory("General")
    .withReleased("direct")
    .withDescription(`True if value is false or false-like, otherwise false.`)

    .withPrimitiveParam("value")
    .withBooleanResult()

    .withTest({ value: true }, false)
    .withTest({ value: "true" }, false)
    .withTest({ value: "TRUE" }, false)
    .withTest({ value: "yes" }, false)
    .withTest({ value: "" }, true)
    .withTest({ value: [] }, true)
    .withTest({ value: 0 }, true)
    .withTest({ value: "false" }, true)
    .withTest({ value: "FALSE" }, true)
    .withTest({ value: "no" }, true)
    .withTest({ value: undefined }, true)
    .withTest({ value: null }, true)

    .run(({ value }) => isFalsey(value));
