import * as glide from "../glide";

import uniq from "lodash/uniq";

export default glide
    .columnNamed("Unique")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Remove duplicate entries from an array`)
    .withStringArrayResult()
    .withRequiredStringArrayParam("values")

    .withTest({ values: ["a", "b", "b", "c"] }, ["a", "b", "c"])
    .withTest({ values: ["a", "b", "a", "b", "c"] }, ["a", "b", "c"])
    .withTest({ values: ["a", "b", "c"] }, ["a", "b", "c"])
    .withTest({ values: undefined }, undefined)

    .run(({ values }) => uniq(values));
