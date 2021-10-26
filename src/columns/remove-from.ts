import * as glide from "../glide";

export default glide
    .columnNamed("Remove item")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Remove all instances of an item from an array`)
    .withPrimitiveArrayResult()
    .withRequiredPrimitiveArrayParam("values")
    .withPrimitiveParam("toRemove", "To remove")

    .withTest({ values: ["a", "b", "b", "c"], toRemove: "b" }, ["a", "c"])
    .withTest({ values: [3, 20, 100], toRemove: 20 }, [3, 100])

    .run(({ values, toRemove }) => {
        if (toRemove === undefined) return values;
        return values.filter(v => v !== toRemove);
    });
