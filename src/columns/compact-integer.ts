import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
  .columnNamed("Compact Integer")
  .withCategory("Number")
  .withDescription(`Converts an integer into its most compact representation.`)
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")
  .withStringResult()
  .withRequiredNumberParam("number")
  .withNumberParam("decimals", "Decimal Places")
  .withExample({ number: 123456789 })

  .withTest({ number: 123456789 }, "123M")
  .withTest({ number: 123456789, decimals: 2 }, "123.46M")

  .run(({ number, decimals }) => Humanize.compactInteger(number, decimals));
