import * as glide from "../glide";

export default glide
    .columnNamed("Prefix Array of Text")
    .withCategory("Text")
    .withDescription(`Returns an array of prefixed text from a given prefix and text value that are joined together.`)
    .withStringArrayResult()
    .withRequiredStringArrayParam("text")
    .withRequiredStringParam("prefix")

    .withTest({ text: ["$3.99", "$6.00", "$450.00"], prefix: "Meal cost per cat:" }, [
        "Meal cost per cat: $3.99",
        "Meal cost per cat: $6.00",
        "Meal cost per cat: $450.00",
    ])
    .withTest({ text: ["14 minutes", "12:03:07"], prefix: "Summer Sale starts in:" }, [
        "Summer Sale starts in: 14 minutes",
        "Summer Sale starts in: 12:03:07",
    ])
    .withTest({ text: ["25", "12.4", "45"], prefix: "Average MPG:" }, [
        "Average MPG: 25",
        "Average MPG: 12.4",
        "Average MPG: 45",
    ])

    .run(({ text, prefix }) =>
        text.map(el => {
            return `${prefix} ${el}`;
        })
    );
