import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
  .columnNamed("Compact Integer", "Number")
  .withDescription(`Converts an integer into its most compact representation.`)
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")
  .withStringResult()
  .withRequiredNumberParam("number")
  .withNumberParam("decimals", "Decimal Places")
  .withExample({ number: 123456789 })
  .run(({ number, decimals }) => Humanize.compactInteger(number, decimals));
