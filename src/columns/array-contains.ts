import * as glide from "../glide";

export default glide
    .columnNamed("Array Contains Element")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`True if array contains the element. False otherwise.`)
    .withBooleanResult()
    .withRequiredPrimitiveArrayParam("values")
    .withPrimitiveParam("toFind", "To find")

    .withTest({ values: ["a", "b", "b", "c"], toFind: "b" }, true)
    .withTest({ values: [3, 20, 100], toFind: 20 }, true)
    .withTest({ values: [3, 20, 100], toFind: 25 }, false)

    .run(({ values, toFind }) => {
        return values.includes(toFind);
    });
