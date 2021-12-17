import * as glide from "../glide";

import Humanize from "humanize-plus";

export default glide
    .columnNamed("Pluralize Text")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Returns the plural version of a given word if the value is not 1. The default suffix is 's'.`)
    .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")

    .withRequiredNumberParam("number")
    .withRequiredStringParam("singular", "One")
    .withStringParam("plural", "Many")
    .withStringParam("zero", "Zero (default: same as Many)")
    .withBooleanParam("includeNumber")
    .withStringResult()

    .withTest({ number: 0, singular: "duck", plural: "duckies" }, "duckies")
    .withTest({ number: 1, singular: "duck", plural: "duckies" }, "duck")
    .withTest({ number: 1, singular: "duck", plural: "duckies", includeNumber: true }, "1 duck")
    .withTest({ number: 3, singular: "duck", plural: "duckies" }, "duckies")

    .withTest({ number: 0, singular: "clue", plural: "clues" }, "clues")
    .withTest({ number: 0, singular: "clue", plural: "clues", zero: "clue" }, "clue")

    .run(({ number, singular, plural, zero = plural, includeNumber = false }) => {
        const label = (() => {
            if (number === 0) {
                return zero;
            }
            return Humanize.pluralize(number, singular, plural);
        })();
        return includeNumber ? `${number} ${label}` : label;
    });
