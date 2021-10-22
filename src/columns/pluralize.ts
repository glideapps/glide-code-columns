import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
  .columnNamed("Pluralize Text")
  .withCategory("Text")
  .withDescription(
    `Returns the plural version of a given word if the value is not 1. The default suffix is 's'.`
  )
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")

  .withRequiredNumberParam("number")
  .withStringParam("singular")
  .withStringParam("plural")
  .withStringResult()

  .withTest({ number: 0, singular: "duck", plural: "duckies" }, "duckies")
  .withTest({ number: 1, singular: "duck", plural: "duckies" }, "duck")
  .withTest({ number: 3, singular: "duck", plural: "duckies" }, "duckies")

  .run(({ number, singular, plural }) =>
    Humanize.pluralize(number, singular, plural)
  );
