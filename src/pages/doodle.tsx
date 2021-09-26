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
    params={{
      size: {
        displayName: "Size",
        type: "number",
      },
      category: {
        displayName:
          "Category (random|flat|hand-drawn|outline|abstract|avatar)",
        type: "string",
      },
      random: {
        displayName: "Random Seed",
        type: "primitive",
      },
    }}
    example={{ size: 200, category: "avatar", random: 42 }}
    result={{ type: "image-uri" }}
    run={run}
  />
);

export default DoodleColumn;
