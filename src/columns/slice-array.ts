import * as glide from "../glide";

export default glide
    .columnNamed("Slice Array")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Produces a subsection of an array by specifying the start and end indices`)
    .withPrimitiveArrayResult()
    .withRequiredPrimitiveArrayParam("values")
    .withNumberParam("start")
    .withNumberParam("end")

    .withTest({ values: ["0", "1", "2", "3", "4"], start: 0, end: 1 }, ["0"])
    .withTest({ values: ["0", "1", "2", "3", "4"], start: 2, end: undefined }, ["2", "3", "4"])
    .withTest({ values: ["0", "1", "2", "3", "4"], start: undefined, end: 3 }, ["0", "1", "2"])
    .withTest({ values: ["0", "1", "2", "3", "4"], start: 1, end: 3 }, ["1", "2"])
    .withTest({ values: ["0", "1", "2", "3", "4"], start: -2, end: -1 }, ["3"])
    .withTest({ values: ["0", "1", "2", "3", "4"], start: 2, end: -1 }, ["2", "3"])
    .withTest({ values: undefined }, undefined)

    .run(({ values, start, end }) => {
        const op = [...values];
        return op.slice(start, end);
    });
