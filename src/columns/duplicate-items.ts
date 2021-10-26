import * as glide from "../glide";

export default glide
  .columnNamed("Duplicated Items")
  .withCategory("Code")
  .withReleased("direct")
  .withDescription(`Find items duplicated in an array`)
  .withStringArrayResult()
  .withRequiredStringArrayParam("values")

  .withTest({ values: ["a", "b", "b", "c"] }, ["b"])
  .withTest({ values: ["a", "b", "a", "b", "c"] }, ["a", "b"])
  .withTest({ values: ["a", "b", "c"] }, [])
  .withTest({ values: undefined }, undefined)

  .run(({ values }) =>
    values.filter((v, ind) => values.slice(ind + 1).includes(v))
  );
