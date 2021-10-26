import * as glide from "../glide";

export default glide
    .columnNamed("Reverse Array")
    .withDescription("Reverses the order of items in an array")
    .withReleased("direct")
    .withPrimitiveArrayResult()
    .withPrimitiveArrayParam("array")
    .run(({ array }) => {
        if (array === undefined) return undefined;
        return [...array].reverse();
    });
