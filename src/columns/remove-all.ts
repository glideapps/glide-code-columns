import * as glide from "../glide";

// FIXME - Needs to support stringified numbers

export default glide
    .columnNamed("Remove all")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Remove all elements in an array from another array`)
    .withPrimitiveArrayResult()
    .withRequiredPrimitiveArrayParam("values")
    .withPrimitiveArrayParam("toRemove", "To remove")

    .withTest({ values: ["a", "b", "b", "c"], toRemove: ["b", "c"] }, ["a"])
    .withTest({ values: [3, 20, 100], toRemove: [20, "3"] }, [100])

    .run(({ values, toRemove }) => {
        if (toRemove === undefined) return values;
        return values.filter(v => !toRemove.some(x => x == v));
    });
