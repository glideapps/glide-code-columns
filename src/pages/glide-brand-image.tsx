import * as fs from "fs";

import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

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

const listImages = (c: ImageCategory) =>
  fs
    .readdirSync(`public/glide-data-shapes/${c}`)
    .filter(p => p.endsWith(".jpg") || p.endsWith(".png"))
    .map(p => `/glide-data-shapes/${c}/${p}`);

export async function getAllColumnComponents(): Promise<
  Record<ImageCategory, string[]>
> {
  return {
    "3d": listImages("3d"),
    avatar: listImages("avatar"),
    gradient: listImages("gradient"),
  };
}

type ImageCategory = "3d" | "avatar" | "gradient";

interface Props {
  images: Record<ImageCategory, string[]>;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await getAllColumnComponents();
  return {
    props: {
      images,
    },
  };
};

function run(host: string | undefined, { images }: Props): Column {
  return async (categoryValue, randomSeed) => {
    if (host === undefined) return undefined;

    const { value: category = defaultCategory } = categoryValue;
    const { value: seed } = randomSeed;
    if (seed === undefined) return undefined;

    const is = images[category] ?? images[defaultCategory];
    const image = is[hashCode(seed) % is.length];

    return `${host}/${image}`;
  };
}

const GlideBrandImage = (props: Props) => {
  const [host, setHost] = useState<string | undefined>();

  useEffect(() => {
    setHost(window.location.origin);
  });

  return (
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
          displayName: "Random Seed",
          type: "primitive",
        },
      }}
      example={{ category: "3d", random: 42 }}
      result={{ type: "image-uri" }}
      run={run(host, props)}
    />
  );
};

export default GlideBrandImage;
