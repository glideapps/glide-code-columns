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

const classifer = bayes();

export default glide
  .columnNamed("Classify")
  .withCategory("Text")
  .withDescription(
    `Returns the plural version of a given word if the value is not 1. The default suffix is 's'.`
  )
  .withAuthor("HubSpot", "https://github.com/HubSpot/humanize")

  .withRequiredStringParam("id", "Classifier ID")
  .withRequiredStringParam("phrase")
  .withStringParam("category", "Category for Training")
  .withStringResult()

  .run(({ phrase, category }) => {
    if (category !== undefined) {
      classifer.learn(phrase, category);
      return category;
    } else {
      return classifer.categorize(phrase);
    }
  });
