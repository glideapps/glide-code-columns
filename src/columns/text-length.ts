import * as glide from "../glide";

export default glide
    .columnNamed("Text Length")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`Gets the length of a text snippet`)
    .withNumberResult()
    .withRequiredStringParam("text")
    .withTest({ text: "This is some text" }, 17)
    .withTest({ text: "Naughty string: <script>alert('XSS')</script>" }, 16)
    .withTest({ text: "Another naughty string: <img src='x' onerror='alert(\"XSS\")'>" }, 60)
    .run(({ text }) => {
        // Sanitize the input to remove some "naughty" strings
        const sanitizedText = text.replace(/<script.*?>.*?<\/script>/gi, "");
        return sanitizedText.length;
    });
