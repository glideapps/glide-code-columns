import * as glide from "../glide";

import { DateTime } from "luxon";

export default glide
  .columnNamed("Format Date")
  .withDescription(`Powerful date & time formatting with luxon.`)
  .withCategory("Date & Time")
  .withAuthor("luxon", "https://moment.github.io/luxon")
  .withAbout(
    `
    Learn about date formatting in [luxon's documentation](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
  `
  )
  .withStringResult()
  .withRequiredDateParam("date")
  .withRequiredStringParam("format")

  .withTest({ date: "2021-10-21T14:35:46.216Z", format: "cccc" }, "Thursday")
  .withTest({ date: "10/21/2021", format: "cccc" }, "Thursday")
  .withTest({ date: "Invalid date!", format: "cccc" }, undefined)

  .run(({ date, format }) => {
    const millis = Date.parse(date);
    if (isNaN(millis)) return undefined;

    const dateTime = DateTime.fromMillis(millis);
    return dateTime.toFormat(format);
  });
