import * as glide from "../glide";

import uniq from "lodash/uniq";

export default glide
    .columnNamed("Duplicated Items")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Find items duplicated in an array`)
    .withStringArrayResult()
    .withRequiredStringArrayParam("values")

    .withTest({ values: ["a", "b", "b", "c"] }, ["b"])
    .withTest({ values: ["a", "b", "a", "b", "c", "b"] }, ["a", "b"])
    .withTest({ values: ["a", "b", "c"] }, [])
    .withTest({ values: undefined }, undefined)

    .run(({ values }) => uniq(values.filter((v: string, ind: number) => values.slice(ind + 1).includes(v))));
