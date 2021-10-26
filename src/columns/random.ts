import * as glide from "../glide";

import seedrandom from "seedrandom";

export default glide
  .columnNamed("Random Number")
  .withCategory("Number")
  .withDescription(`Turn any value into a stable random number.`)
  .withAuthor("davidbau", "github.com/davidbau/seedrandom")
  .withVideo("https://www.youtube.com/watch?v=GtOt7EBNEwQ")

  .withRequiredPrimitiveParam("seed")
  .withNumberResult()

  .withTest({ seed: "Glide" }, 0.3711851882348728)

  .run(({ seed }) => seedrandom(seed)());
