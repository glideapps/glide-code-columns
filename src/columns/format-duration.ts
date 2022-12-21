import * as glide from "../glide";

import { Duration } from "luxon";

export default glide
    .columnNamed("Format Duration")
    .withDescription(`Format a duration in seconds into text like '1:30'.`)
    .withReleased("direct")
    .withCategory("Date & Time")
    .withAuthor("luxon", "https://moment.github.io/luxon")
    .withAbout(
        `
    Learn about date formatting in [luxon's documentation](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
  `
    )
    .withStringResult()
    .withRequiredNumberParam("seconds")
    .withRequiredStringParam("format", "Format (e.g. mm:ss)")

    .withTest({ seconds: 100, format: "mm:ss" }, "01:40")

    .run(({ seconds, format }) => {
        const duration = Duration.fromMillis(seconds * 1000);
        return duration.toFormat(format);
    });
