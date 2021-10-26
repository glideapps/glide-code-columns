import * as glide from "../glide";

import seedrandom from "seedrandom";

function roll(seed: any, sides: number): number | undefined {
  if (sides === 0) return undefined;

  const sign = sides > 0 ? 1 : -1;
  const random = seedrandom(seed)();
  return sign * (Math.floor(Math.abs(sides * random)) + 1);
}

export default glide
  .columnNamed("Roll Dice")
  .withCategory("Number")
  .withDescription(`Roll dice of various sizes.`)

  .withRequiredPrimitiveParam("seed", "Roll Seed")
  .withNumberParam("sides", "Sides (default is 6)")
  .withNumberResult()

  .withTest({ seed: 6 }, 1)
  .withTest({ seed: 6, sides: 6 }, 1)
  .withTest({ seed: 6, sides: 0 }, undefined)

  .run(({ seed, sides = 6 }) => roll(seed, sides));
