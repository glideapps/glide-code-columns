import * as glide from "../glide";

import { RRule } from "rrule";

export default glide
  .columnNamed("Next Recurring Event")
  .withCategory("Date & Time")
  .withDescription(`Find the next time a recurring event will occur`)
  .withStringResult()
  .withRequiredDateParam("start", "First time event occurred")
  .withRequiredStringParam("recurrence", "eg. 'every 2 weeks', 'every month'")
  .withDateParam("after", "Find next event after this time (default now)")

  .withTest({ start: "2021-10-21T14:35:46.216Z", recurrence: "every day", after: "2021-10-24T00:00:00Z" }, "2021-10-24T14:35:46.216Z")
  .withTest({ start: "2021-01-01T00:00:00Z", recurrence: "every 6 hours", after: "2021-01-02T00:00:00Z" }, "2021-01-02T06:00:00.000Z")

  .run(({ start, recurrence, after }) => {
    const parsed = RRule.parseText(recurrence);
    // If we didn't at least get a freq out of it, assume it failed to parse
    if (parsed === null || parsed.freq === undefined) {
        return undefined;
    }
    const startDate = new Date(start);
    if (isNaN(startDate.getTime())) {
        return undefined;
    }
    const afterDate = after === undefined ? new Date() : new Date(after);
    if (isNaN(afterDate.getTime())) {
        return undefined;
    }
    const rule = new RRule({...parsed, dtstart: startDate});

    const result = rule.after(afterDate);
    if (result === null) {
        return undefined;
    }
    return result.toISOString();
  });
