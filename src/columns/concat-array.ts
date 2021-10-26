import * as glide from "../glide";

export default glide
    .columnNamed("Append array")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Add one array to the end of another`)
    .withPrimitiveArrayResult()
    .withRequiredPrimitiveArrayParam("values")
    .withPrimitiveArrayParam("toAppend", "To append")

    .withTest({ values: ["a", "b", "b", "c"], toAppend: ["b", "c"] }, ["a", "b", "b", "c", "b", "c"])
    .withTest({ values: [3, 20, 100], toAppend: [20, 3] }, [3, 20, 100, 20, 3])

    .run(({ values, toAppend }) => {
        return [...values, ...(toAppend ?? [])];
    });
