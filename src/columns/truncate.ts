import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
  .columnNamed("Truncate Text")
  .withCategory("Text")
  .withDescription(
    `Truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…").`
  )
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")

  .withRequiredStringParam("string")
  .withNumberParam("length")
  .withStringParam("ending")
  .withStringResult()

  .withTest({ string: "long text is good for you", length: 12 }, "long text...")

  .run(({ string, length, ending }) =>
    Humanize.truncate(string, length, ending)
  );
