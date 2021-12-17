import * as glide from "../glide";

export default glide
    .columnNamed("Find Element Index")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Finds the first index of an element in an array`)
    .withNumberResult()
    .withRequiredPrimitiveArrayParam("values")
    .withPrimitiveParam("toFind", "To find")

    .withTest({ values: ["a", "b", "b", "c"], toFind: "b" }, 1)
    .withTest({ values: [3, 20, 100], toFind: "20" }, 1)
    .withTest({ values: [3, 20, 100], toFind: 25 }, undefined)

    .run(({ values, toFind }) => {
        const result = values.findIndex(x => x == toFind);
        return result === -1 ? undefined : result;
    });
