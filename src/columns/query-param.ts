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
        const params = new URLSearchParams(window.location.search);
        return params.get(parameter) ?? undefined;
    });
