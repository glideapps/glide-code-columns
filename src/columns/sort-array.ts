import * as glide from "../glide";

export default glide
    .columnNamed("Sort array")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Sort the items in an array`)
    .withPrimitiveArrayResult()
    .withRequiredPrimitiveArrayParam("values")

    .withTest({ values: ["a", "b", "b", "c"] }, ["a", "b", "b", "c"])
    .withTest({ values: ["a", "b", "a", "b", "c"] }, ["a", "a", "b", "b", "c"])
    .withTest({ values: ["c", "a", "b"] }, ["a", "b", "c"])
    .withTest({ values: ["3", "20", "100"] }, ["100", "20", "3"])
    .withTest({ values: [3, 20, 100] }, [3, 20, 100])
    .withTest({ values: undefined }, undefined)

    .run(({ values }) => {
        if (values.some(v => typeof v !== "number")) return values.sort();
        return values.sort((a: number, b: number) => a - b);
    });
