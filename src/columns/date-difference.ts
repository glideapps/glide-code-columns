import * as glide from "../glide";

import { ConversionAccuracy, DateTime, DurationObjectUnits, DurationUnit } from "luxon";
const units: Array<keyof DurationObjectUnits> = ["days", "weeks", "months", "years"];

export default glide
    .columnNamed("Date Difference")
    .withCategory("Date & Time")
    .withReleased("direct")
    .withDescription(
        "Get the number of days, weeks, months, or years between dates. Accuracy is casual by default, but you can use 'longterm' accuracy for a pedantic 400-year calendar."
    )

    .withRequiredDateParam("startDate")
    .withRequiredDateParam("endDate")
    .withRequiredStringParam("unit", `Unit (${units.join(", ")})`)
    .withStringParam("conversionAccuracy", `Accuracy (casual, longterm)`)
    .withNumberResult()

    .withTest({ startDate: "6/1/2022", endDate: "6/2/2022", unit: "days" }, 1)
    .withTest({ startDate: "6/2/2022", endDate: "6/1/2022", unit: "days" }, -1)
    .withTest({ startDate: "5/1/2022", endDate: "5/15/2022", unit: "weeks" }, 2)

    .run(({ startDate, endDate, unit = "days", conversionAccuracy = "casual" }) => {
        const start = DateTime.fromJSDate(new Date(startDate));
        const end = DateTime.fromJSDate(new Date(endDate));
        const diff = end.diff(start, unit as DurationUnit, {
            conversionAccuracy: conversionAccuracy as ConversionAccuracy,
        });
        return diff[unit];
    });
