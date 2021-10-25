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
  .withDescription(
    `Returns the plural version of a given word if the value is not 1. The default suffix is 's'.`
  )
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")

  .withRequiredStringParam("id", "Classifier ID")
  .withRequiredStringParam("phrase")
  .withStringParam("category", "Category for Training")
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
