import * as glide from "../glide";

import seedrandom from "seedrandom";

export default glide
  .columnNamed("Random Value")
  .withCategory("Number")
  .withDescription(`Seeded random number generator.`)
  .withAuthor("davidbau", "github.com/davidbau/seedrandom")
  .withVideo("https://www.youtube.com/watch?v=GtOt7EBNEwQ")

  .withRequiredPrimitiveParam("seed")
  .withNumberResult()

  .run(({ seed }) => seedrandom(seed)());
