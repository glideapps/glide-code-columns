import "whatwg-fetch";

import { Face, FacesResponse, findSize } from "./faces";
import * as glide from "./glide";

type FaceSet = {
  currentPage: number;
  unassigned: Face[];
  assigned: Record<string, Face>;
};

type FaceParams = {
  emotion: string;
};

function makeParams(params: Partial<FaceParams>): FaceParams {
  return {
    emotion: params.emotion ?? "neutral",
  };
}

function makeParamsKey(params: FaceParams): string {
  return JSON.stringify(params);
}

const faceSets: Record<string, FaceSet> = {};

function getFaceSet(partial: Partial<FaceParams>): FaceSet {
  const key = makeParamsKey(makeParams(partial));
  const set: FaceSet = faceSets[key] ?? {
    currentPage: 0,
    unassigned: [],
    assigned: {},
  };
  return (faceSets[key] = set);
}

async function getMoreFaces(
  key: string,
  partialParams: Partial<FaceParams> = {}
) {
  const params = makeParams(partialParams);
  const faceSet = getFaceSet(params);

  faceSet.currentPage++;

  const { faces }: FacesResponse = await fetch(
    `https://api.generated.photos/api/v1/faces` +
      `?order_by=oldest` +
      `&page=${faceSet.currentPage}` +
      `&per_page=100` +
      `&emotion=${params.emotion}` +
      `&api_key=${key}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  ).then((x) => x.json());

  faceSet.unassigned.push(...faces);
}

export default glide.column(async (seed, emotion, key) => {
  if (key.value === undefined) throw new Error("Missing key");
  if (seed.value === undefined) return undefined;

  const faceKey = `${seed.value}`;
  const faceParams = { emotion: emotion.value };
  const { assigned, unassigned } = getFaceSet(faceParams);

  let face = assigned[faceKey];
  while (face === undefined) {
    if (unassigned.length > 0) {
      face = assigned[faceKey] = unassigned.pop()!;
    } else {
      await getMoreFaces(key.value, faceParams);
    }
  }

  const image = findSize(face, "256");
  return image;
});
