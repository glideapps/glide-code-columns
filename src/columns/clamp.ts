import * as glide from "../glide";

export default glide
  .columnNamed("Clamp")
  .withCategory("Number")
  .withDescription(`Clamps a number within inclusive lower and upper bounds.`)
  .withNumberResult()
  .withRequiredNumberParam("number")
  .withRequiredNumberParam("lower", "Lower Bound")
  .withRequiredNumberParam("upper", "Upper Bound")

  .withTest({ number: -10, lower: -5, upper: 5 }, -5)
  .withTest({ number: 10, lower: -5, upper: 5 }, 5)

  .run(({ number, lower, upper }) => Math.max(lower, Math.min(number, upper)));
