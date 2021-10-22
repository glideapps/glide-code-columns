import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
  .columnNamed("Ordinal")
  .withCategory("Number")
  .withDescription(`Converts an integer to its ordinal as a string.`)
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")
  .withStringResult()
  .withRequiredNumberParam("number")
  .withTest({ number: 22 }, "22nd")
  .run(({ number }) => Humanize.ordinal(number));
