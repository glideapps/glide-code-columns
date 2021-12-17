import * as glide from "../glide";

export default glide
    .columnNamed("Array Length")
    .withCategory("Array")
    .withDescription("Get the length of an array.")
    .withReleased("direct")

    .withRequiredPrimitiveArrayParam("array")
    .withNumberResult()

    .withTest({ array: [1, 2, 3] }, 3)
    .withTest({ array: [] }, 0)
    .withTest({ array: undefined }, undefined)

    .run(({ array }) => array.length);
