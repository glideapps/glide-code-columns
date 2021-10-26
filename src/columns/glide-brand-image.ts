import seedrandom from "seedrandom";
import { Cache } from "../cache";
import * as glide from "../glide";

const defaultCategory: ImageCategory = "3d";

type ImageCategory = "3d" | "avatar" | "gradient";

const cache = new Cache<Record<ImageCategory, string[]>>({
  timeoutSeconds: Number.MAX_SAFE_INTEGER,
});

const run: glide.Column = async (categoryValue, randomSeed) => {
  const { value: category = defaultCategory } = categoryValue;
  const { value: seed } = randomSeed;
  if (seed === undefined) return undefined;

  const images = await cache.fetch(
    `https://column.sh/glide-brand-image/images.json`
  );
  const is = images[category.toString()] ?? images[defaultCategory];
  const random = seedrandom(seed.toString())();
  const image = is[Math.floor(random * is.length)];

  // TODO move these images to CDN, not Vercel
  return `https://column.sh${image}`;
};

export default glide.column({
  name: "Glide Brand Image",
  category: "Glide",
  description: "Glide 3D Data Shapes",
  author: "David Siegel <david@glideapps.com>",
  params: {
    category: {
      displayName: "Category (3d, avatar, or gradient)",
      type: "string",
    },
    random: {
      displayName: "Seed Value",
      type: "string",
    },
  },
  example: { category: "3d", random: "glideapps.com" },
  result: { type: "image-uri" },
  run,
  icon: "glide",
});
