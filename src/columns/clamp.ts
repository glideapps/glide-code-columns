import * as glide from "../glide";

export default glide
  .columnNamed("Clamp")
  .withDescription(`"hello world" → "Hello World"`)
  .withNumberResult()
  .withNumberParam("number")
  .withNumberParam("lower", "Lower Bound")
  .withNumberParam("upper", "Upper Bound")
  .withExample({ number: -10, lower: -5, upper: 5 })
  .run(({ number, lower, upper }) => {
    if (number === undefined || lower === undefined || upper === undefined) {
      return undefined;
    }
    return Math.max(lower, Math.min(number, upper));
  });
