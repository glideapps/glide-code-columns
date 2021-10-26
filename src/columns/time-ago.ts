import * as glide from "../glide";

import TimeAgo, { FormatStyleName } from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

const styles: FormatStyleName[] = ["round", "mini", "twitter"];

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export default glide
    .columnNamed("Relative Time")
    .withDescription(`Given a date, returns a string with the relative time (e.g. '1 day ago').`)
    .withCategory("Date & Time")
    .withAuthor("Nikolay Kuchumov", "gitlab.com/catamphetamine")
    .withAbout(
        `
    Learn more at [gitlab.com/catamphetamine/javascript-time-ago](https://gitlab.com/catamphetamine/javascript-time-ago).
  `
    )
    .withStringResult()
    .withRequiredDateParam("date")
    .withDateParam("now")
    .withStringParam("style", `Style (${styles.join(", ")})`)

    .withTest(
        {
            now: "2021-10-21T14:35:46.216Z",
            date: "2020-10-21T14:35:46.216Z",
            style: "round",
        },
        "1 year ago"
    )
    .withTest(
        {
            now: "2021-10-21T14:35:46.216Z",
            date: "2021-10-21T14:35:46.216Z",
            style: "round",
        },
        "just now"
    )
    .withTest(
        {
            now: "2021-10-21T14:35:46.216Z",
            date: "2021-10-21T14:40:46.216Z",
            style: "round",
        },
        "in 5 minutes"
    )

    .run(({ date, now, style }) => {
        const dateMillis = Date.parse(date);
        if (isNaN(dateMillis)) return undefined;

        const nowMillis = now === undefined ? Date.now() : Date.parse(now);
        if (isNaN(nowMillis)) return undefined;

        return timeAgo.format(dateMillis, style as FormatStyleName | undefined, {
            now: nowMillis,
        }) as string;
    });
