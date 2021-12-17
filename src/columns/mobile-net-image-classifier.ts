import * as glide from "../glide";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";

// Example from https://github.com/tensorflow/tfjs-models/tree/master/mobilenet
const mobilenet = require("@tensorflow-models/mobilenet");
const version = 2;
const alpha = 0.5;

async function loadImage(uri) {
    // From https://replit.com/@clementwalter/mobilenet
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
    const model = await mobilenet.load({ version, alpha });

    var img = await loadImage(imageUri);

    // Classify the image.
    const predictions = await model.classify(img);

    const labels = predictions.map(p => [p.className, p.probability.toFixed(2)]);

    labels.sort((l1, l2) => l2[1] - l1[1]);

    console.log(labels);

    return labels.map(p => p.join(":"));
};

export default glide
    .columnNamed("Classify Images")
    .withCategory("Machine Learning")
    .withRequiredStringParam("uri")
    .withDescription("Returns an array of most likely predictions and their confidences")
    .withFailingTest({ uri: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d" }, undefined)
    .run(run);
