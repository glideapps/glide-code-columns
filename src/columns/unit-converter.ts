import * as glide from "../glide";

import * as math from "mathjs";

export default glide
    .columnNamed("Convert Units")
    .withDescription(`Convert a quantity from one unit to another.`)

    .withCategory("Number")
    .withReleased("direct")
    .withNumberResult()
    .withRequiredNumberParam("number")
    .withRequiredStringParam("from", "From Unit")
    .withRequiredStringParam("to", "To Unit")

    // Fails because of floating point
    .withFailingTest({ number: 100, from: "feet / second", to: "miles / hour" }, 12)

    .run(({ number, from, to }) => {
        try {
            return math.unit(number, from).toNumber(to);
        } catch {
            return undefined;
        }
    });
