import * as glide from "../glide";

import { DATEDIF } from "fast-formula-parser/formulas/functions/date";

const units = { days: "d", months: "m", years: "y", md: "md", yd: "yd", ym: "ym" };

export default glide
    .columnNamed("Date Difference")
    .withCategory("Date & Time")
    .withReleased("direct")
    .withDescription("Get the number of days, months, or years between dates.")

    .withRequiredDateParam("startDate")
    .withRequiredDateParam("endDate")
    .withStringParam("unit", `Unit (${Object.keys(units).join(", ")})`)
    .withNumberResult()

    .withTest({ startDate: "6/1/2022", endDate: "6/2/2022", unit: "days" }, 1)

    .run(({ startDate, endDate, unit = "days" }) => DATEDIF(startDate, endDate, units[unit] ?? unit));
