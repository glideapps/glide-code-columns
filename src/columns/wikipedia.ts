import * as glide from "../glide";

import wiki from "wikijs";

export default glide
    .columnNamed("Wikipedia")
    .withCategory("Data & APIs")
    .withReleased("sandboxed")
    .withDescription(`Get a relevant wikipedia article for search term`)
    .withStringResult()
    .withRequiredPrimitiveParam("searchTerm", "Wikipedia Search Term")
    .withTest({ searchTerm: "supercollider" }, "https://en.wikipedia.org/wiki/Particle_accelerator")
    .run(async ({ searchTerm }) => {
        try {
            const result = await wiki().page(searchTerm);
            if (result === undefined || result === null) return "";
            return (result as any).fullurl ?? "";
        } catch {
            return "";
        }
    });
