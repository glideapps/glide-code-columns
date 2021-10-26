import * as glide from "../glide";

export default glide
    .columnNamed("Sort array")
    .withCategory("Code")
    .withReleased("direct")
    .withDescription(`Sort the items in an array`)
    .withStringArrayResult()
    .withRequiredStringArrayParam("values")

    .withTest({ values: ["a", "b", "b", "c"] }, ["a", "b", "b", "c"])
    .withTest({ values: ["a", "b", "a", "b", "c"] }, ["a", "a", "b", "b", "c"])
    .withTest({ values: ["c", "a", "b"] }, ["a", "b", "c"])
    .withTest({ values: undefined }, undefined)

    .run(({ values }) => values.sort());
