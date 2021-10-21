import * as glide from "../glide";

import { DateTime } from "luxon";

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

  .withTest({ date: "2021-10-21T14:35:46.216Z", format: "cccc" }, "Thursday")
  .withTest({ date: "10/21/2021", format: "cccc" }, "Thursday")

  .run(({ date, format }) => {
    const jsDate = new Date(date);
    const dateTime = DateTime.fromJSDate(jsDate);
    return dateTime.toFormat(format);
  });
