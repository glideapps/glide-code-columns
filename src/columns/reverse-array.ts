import * as glide from "../glide";

export default glide
    .columnNamed("Reverse Array")
    .withCategory("Array")
    .withDescription("Reverses the order of items in an array")
    .withReleased("direct")
    .withPrimitiveArrayResult()
    .withRequiredPrimitiveArrayParam("array")
    .run(({ array }) => {
        return [...array].reverse();
    });
