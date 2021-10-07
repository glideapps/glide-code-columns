import { Cache } from "../cache";
import { Column, ColumnComponent } from "../glide.next";

function hashCode(x: any): number {
  const s = `${x}`;
  let hash = 0;
  if (s.length === 0) {
    return hash;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

const defaultCategory: ImageCategory = "3d";

type ImageCategory = "3d" | "avatar" | "gradient";

const cache = new Cache<Record<ImageCategory, string[]>>({
  timeoutSeconds: Number.MAX_SAFE_INTEGER,
});

const run: Column = async (categoryValue, randomSeed) => {
  const { value: category = defaultCategory } = categoryValue;
  const { value: seed } = randomSeed;
  if (seed === undefined) return undefined;

  const images = await cache.fetch(`/glide-brand-image/images.json`);
  const is = images[category] ?? images[defaultCategory];
  const hash = Math.abs(hashCode(seed));
  const image = is[hash % is.length];

  // TODO move these images to CDN, not Vercel
  return `https://column.sh${image}`;
};

const GlideBrandImage = () => (
  <ColumnComponent
    name="Glide Brand Image"
    description="Glide 3D Data Shapes"
    author="David Siegel <david@glideapps.com>"
    params={{
      category: {
        displayName: "Category (3d, avatar, or gradient)",
        type: "string",
      },
      random: {
        displayName: "Seed Value",
        type: "string",
      },
    }}
    example={{ category: "3d", random: "glideapps.com" }}
    result={{ type: "image-uri" }}
    run={run}
    icon="glide"
  />
);

export default GlideBrandImage;
