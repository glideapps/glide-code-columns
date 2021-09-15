import { Column, ColumnComponent } from "../glide.next";

// TODO support more of https://doodleipsum.com/ API

const run: Column = async (sizeValue, categoryValue, randomSeed) => {
  const { value: size = 600 } = sizeValue;
  const { value: seed = "1" } = randomSeed;
  let { value: category = "" } = categoryValue;
  if (category === "random") {
    category = "";
  }

  return `https://doodleipsum.com/${size}/${category}?n=${encodeURIComponent(
    seed
  )}`;
};

const DoodleColumn = () => (
  <ColumnComponent
    name="Doodle Ipsum"
    description="Generate random doodles with https://doodleipsum.com/"
    author="David Siegel <david@glideapps.com>"
    params={[
      {
        name: "size",
        displayName: "Size",
        type: "number",
      },
      {
        name: "category",
        displayName:
          "Category (random|flat|hand-drawn|outline|abstract|avatar)",
        type: "string",
      },
      {
        name: "random",
        displayName: "Random Seed",
        type: "primitive",
      },
    ]}
    result={{ type: "image-uri" }}
    run={run}
  />
);

export default DoodleColumn;
