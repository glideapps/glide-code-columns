import * as glide from "../glide";

import { DateTime } from "luxon";

const testDate = "2021-10-21T14:35:46.216Z";

export default glide
  .columnNamed("Format Date")
  .withCategory("Date & Time")
  .withAuthor("luxon", "https://moment.github.io/luxon")
  .withAbout(
    `
    Learn about date formatting in [luxon's documentation](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
  `
  )
  .withDescription(`Format a date`)
  .withStringResult()
  .withRequiredDateParam("date")
  .withRequiredStringParam("format")

  .withTest({ date: testDate, format: "cccc" }, "Thursday")

  .run(({ date, format }) => {
    console.log({ date, type: typeof date });
    return DateTime.fromISO(date).toFormat(format);
  });
