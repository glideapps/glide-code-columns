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

const classifiers: Record<string, Classifier> = {};
function getClassifier(id: string): Classifier {
  return (classifiers[id] ??= bayes());
}

export default glide
  .columnNamed("Classify Text")
  .withCategory("Machine Learning")
  .withDescription(`Categorize text based on examples.`)
  .withAuthor("ttezel", "https://github.com/ttezel/bayes")

  .withRequiredStringParam("id", "Classifier ID")
  .withRequiredStringParam("phrase")
  .withStringParam("example", "Training Data")
  .withStringResult()

  .run(({ id, phrase, category }) => {
    const classifer = getClassifier(id);

    if (category !== undefined) {
      classifer.learn(phrase, category);
      return category;
    } else {
      return classifer.categorize(phrase);
    }
  });
