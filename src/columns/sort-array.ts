import * as glide from "../glide";

import sortBy from "lodash/sortBy";

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
    .withTest({ values: [23, 20, 100] }, [20, 23, 100])
    .withTest({ values: [23, 20, "100"] }, [20, 23, "100"])
    .withTest({ values: undefined }, undefined)

    .run(({ values }) => {
        return sortBy(values, x => x);
    });
