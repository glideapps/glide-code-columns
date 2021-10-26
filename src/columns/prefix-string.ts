import * as glide from "../glide";

export default glide
  .columnNamed("Prefix Text")
  .withCategory("Text")
  .withDescription(
    `Returns the result text from a given prefix and text value that are joined together.`
  )
  .withRequiredStringParam("text")
  .withRequiredStringParam("prefix")
  .withStringResult()

  .withTest({ text: "$3.99", prefix: "Price per cat:" }, "Price per cat: $3.99")
  .withTest(
    { text: "14 minutes", prefix: "Summer Sale starts in:" },
    "Summer Sale starts in: 14 minutes"
  )
  .withTest({ text: "25", prefix: "Average MPG:" }, "Average MPG: 25")

  .run(({ text, prefix }) => {
    return `${prefix} ${text}`;
  });
