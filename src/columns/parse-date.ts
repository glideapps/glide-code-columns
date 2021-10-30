import * as glide from "../glide";

import { DateTime } from "luxon";

export default glide
    .columnNamed("Text to Date")
    .withDescription(`Convert text to a date.`)
    .withReleased("direct")
    .withCategory("Date & Time")
    .withAuthor("luxon", "https://moment.github.io/luxon")
    .withAbout(
        `
    Learn about date formatting in [luxon's documentation](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
  `
    )

    .withRequiredStringParam("text")
    .withStringParam("format", "Format (see https://gl.ink/date-format)")
    .withStringParam("locale")
    .withStringParam("zone", "Timezone")
    .withDateResult()

    .withTest({ text: "12 August 1982", format: "d MMMM yyyy", zone: "utc" }, new Date("1982-08-12T07:00:00.000Z"))

    .run(({ text, format, locale, zone }) => {
        let dt: DateTime;
        const options = { locale, zone };
        if (format === undefined) {
            dt = DateTime.fromISO(text, options);
        } else {
            dt = DateTime.fromFormat(text, format, options);
        }
        if (!dt.isValid) {
            return undefined;
        }
        return dt.toJSDate();
    });
