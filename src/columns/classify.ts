import * as glide from "../glide";

interface Classifier {
    learn(sample: string, category: string);
    categorize(doc: string): string;
    toJson(): string;
}

const bayes = require("bayes") as {
    (): Classifier;
    fromJson(json: string): Classifier;
};

const defaultClassifier = "";

const classifiers: Record<string, Classifier> = {};
function getClassifier(id: string): Classifier {
    return (classifiers[id] ??= bayes());
}

export default glide
    .columnNamed("Classify Text")
    .withCategory("Machine Learning")
    .withDescription(`Categorize text based on examples.`)
    .withAuthor("ttezel", "https://github.com/ttezel/bayes")
    .withAbout(
        `
      The Classify Text column takes training data in the form of text values, and known categories for those text values. When it sees new text values without categories provided, it tries to infer the category based on the examples it's seen.

      **This is just a proof of concept. Because Glide does not guarantee that all columns are evaluated (it only evaluates columns required to show the current screen), this will usually not produce good results.**`
    )
    .withVideo("https://www.youtube.com/watch?v=Qu9MM8YAAM0")

    .withRequiredStringParam("phrase")
    .withStringParam("category", "Training Data")
    .withStringParam("id", "Classifier ID")
    .withStringResult()

    .run(({ id = defaultClassifier, phrase, category }) => {
        const classifer = getClassifier(id);

        if (category !== undefined) {
            classifer.learn(phrase, category);
            return category;
        } else {
            return classifer.categorize(phrase);
        }
    });
