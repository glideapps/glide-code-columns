import * as glide from "../glide";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";

// Example from https://github.com/tensorflow/tfjs-models/tree/master/mobilenet
const version = 2;
const alpha = 0.5;

const mobilenet = require("@tensorflow-models/mobilenet");

async function loadImage(uri) {
    console.log(uri);
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = uri.text;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}

const run: glide.Column = async imageUri => {
    // Load the model.
    const model = await mobilenet.load();

    var img = await loadImage(imageUri);

    // Classify the image.
    const predictions = await model.classify(img);

    const labels = predictions.map(p => [p.className, p.probability.toFixed(2)]);
    labels.sort((l1, l2) => l2[1] - l1[1]);
    return labels.map(p => p.join(":"));
};

export default glide
    .columnNamed("Classify Images")
    .withCategory("Machine Learning")
    .withRequiredStringParam("text")
    .withReleased("direct")
    .withDescription("Returns an array of most likely predictions and their confidences")
    .withFailingTest("https://images.unsplash.com/photo-1495360010541-f48722b34f7d", "test")
    .run(run);
