import * as glide from "../glide";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default glide
  .columnNamed("Relative Time")
  .withDescription(`International relative time formatting.`)
  .withCategory("Date & Time")
  .withAuthor("Nikolay Kuchumov", "gitlab.com/catamphetamine")
  .withAbout(
    `
    Learn more at [gitlab.com/catamphetamine/javascript-time-ago](https://gitlab.com/catamphetamine/javascript-time-ago).
  `
  )
  .withStringResult()
  .withRequiredDateParam("relativeTo", "Relative To")
  .withRequiredDateParam("date")

  .withTest(
    {
      relativeTo: "2021-10-21T14:35:46.216Z",
      date: "2020-10-21T14:35:46.216Z",
    },
    "1 year ago"
  )
  .withTest(
    {
      relativeTo: "2021-10-21T14:35:46.216Z",
      date: "2021-10-21T14:35:46.216Z",
    },
    "just now"
  )
  .withTest(
    {
      relativeTo: "2021-10-21T14:35:46.216Z",
      date: "2021-10-21T14:40:46.216Z",
    },
    "in 5 minutes"
  )

  .run(({ relativeTo, date }) => {
    const relativeToMillis = Date.parse(relativeTo);
    if (isNaN(relativeToMillis)) return undefined;

    const dateMillis = Date.parse(date);
    if (isNaN(dateMillis)) return undefined;

    return timeAgo.format(dateMillis, "round", { now: relativeToMillis });
  });
