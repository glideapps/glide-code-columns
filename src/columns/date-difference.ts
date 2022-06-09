import * as glide from "../glide";

import { DateTime, DurationObjectUnits, DurationUnit } from "luxon";
const units: Array<keyof DurationObjectUnits> = ["days", "weeks", "months", "years"];

export default glide
    .columnNamed("Date Difference")
    .withCategory("Date & Time")
    .withReleased("direct")
    .withDescription("Get the number of days, months, or years between dates.")

    .withRequiredDateParam("startDate")
    .withRequiredDateParam("endDate")
    .withStringParam("unit", `Unit (${units.join(", ")})`)
    .withNumberResult()

    .withTest({ startDate: "6/1/2022", endDate: "6/2/2022", unit: "days" }, 1)
    .withTest({ startDate: "6/2/2022", endDate: "6/1/2022", unit: "days" }, -1)

    .run(({ startDate, endDate, unit = "days" }) => {
        const start = DateTime.fromJSDate(new Date(startDate));
        const end = DateTime.fromJSDate(new Date(endDate));
        const diff = end.diff(start, unit as DurationUnit);
        return diff.days;
    });
