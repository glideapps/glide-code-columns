import * as glide from "../glide";

import { DATEDIF } from "fast-formula-parser/formulas/functions/date";

const units = { days: "d" };

export default glide
    .columnNamed("Date Difference")
    .withCategory("Date & Time")
    .withReleased("direct")
    .withDescription("Get the number of days, weeks, months, or years between dates.")

    .withRequiredDateParam("startDate")
    .withRequiredDateParam("endDate")
    .withStringParam("unit", `Unit (${Object.keys(units).join(", ")})`)
    .withNumberResult()

    // .withTest({ text: "SGVsbG8sIHdvcmxkIQ==" }, `Hello, world!`)

    .run(({ startDate, endDate, unit = "days" }) => DATEDIF(startDate, endDate, unit));
