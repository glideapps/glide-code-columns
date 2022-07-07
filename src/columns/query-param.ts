import * as glide from "../glide";

export default glide
    .columnNamed("Query Parameter")
    .withCategory("Data & APIs")
    .withReleased("direct")
    .withDescription(`Read a query parameter from current url`)

    .withRequiredStringParam("parameter")
    .withStringResult()

    // .withTest({ parameter: query }, false)

    .run(({ parameter }) => {
        console.log("Getting query parameter", parameter);
        console.log("window.location", window.location);
        console.log("window.location.search", window.location.search);
        const params = new URLSearchParams(window.location.search);
        return params.get(parameter) ?? undefined;
    });
