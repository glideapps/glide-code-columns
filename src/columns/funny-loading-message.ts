import * as glide from "../glide";

import Funnies from 'funnies';
let funnies = new Funnies();

export default glide
    .columnNamed("Funny Loading Message")
    .withCategory("Text")
    .withReleased("direct")
    .withDescription(`😜 Make users laugh when your app loads.`)
    .withAuthor("1egoman", "https://github.com/1egoman/funnies")
    .withRequiredPrimitiveParam("seed")
    .run(({ seed }) => funnies.message());
