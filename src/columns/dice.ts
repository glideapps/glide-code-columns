import * as glide from "../glide";

import seedrandom from "seedrandom";

function roll(seed: any, sides: 0): undefined;
function roll(seed: any, sides: number): number;
function roll(seed: any, sides: number): number | undefined {
    if (sides === 0) return undefined;
    if (sides < 0) return -roll(seed, -sides);

    const random = seedrandom(seed)();
    return Math.floor(sides * random) + 1;
}

export default glide
    .columnNamed("Roll Dice")
    .withCategory("Number")
    .withReleased("direct")
    .withDescription(`Roll dice of various sizes.`)

    .withRequiredPrimitiveParam("seed", "Roll Seed")
    .withNumberParam("sides", "Sides (default is 6)")
    .withNumberResult()

    .withTest({ seed: "I'm feeling lucky!" }, 1)
    .withTest({ seed: "I'm feeling lucky!", sides: 6 }, 1)
    .withTest({ seed: "I'm feeling lucky!", sides: -6 }, -1)
    .withTest({ seed: "I'm feeling lucky!", sides: 0 }, undefined)

    .run(({ seed, sides = 6 }) => roll(seed, sides));
