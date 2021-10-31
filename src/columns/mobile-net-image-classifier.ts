import * as glide from "../glide";

/* Example from https://github.com/tensorflow/tfjs-models/tree/master/mobilenet
const mobilenet = require('@tensorflow-models/mobilenet');

const img = document.getElementById('img');

// Load the model.
const model = await mobilenet.load();

// Classify the image.
const predictions = await model.classify(img);

console.log('Predictions: ');
console.log(predictions);
*/

const run: glide.Column = async (image) => {
    return "test";
};

export default glide
    .columnNamed("Classify Images")
    .withCategory("Machine Learning")
    .withReleased("direct")
    .withDescription("Returns an array of most likely predictions and their confidences")
    .withTest("Test", "test")
    .run(run)