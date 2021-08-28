import "whatwg-fetch";

import { Face, FacesResponse, findSize } from "./faces";
import * as glide from "./glide";

let page = 0;

const unassigned: Face[] = [];
const assigned: Record<string, Face> = {};

async function getMoreFaces(key: string) {
  page++;

  const { faces }: FacesResponse = await fetch(
    `https://api.generated.photos/api/v1/faces` +
      `?order_by=oldest` +
      `&page=${page}` +
      `&per_page=100` +
      `&api_key=${key}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  ).then((x) => x.json());

  unassigned.push(...faces);
}

export default glide.column(async (seed, key) => {
  if (key.value === undefined) throw new Error("Missing key");
  if (seed.value === undefined) return undefined;

  const faceKey = `${seed.value}`;

  let face = assigned[faceKey];
  while (face === undefined) {
    if (unassigned.length > 0) {
      face = assigned[faceKey] = unassigned.pop()!;
    } else {
      await getMoreFaces(key.value);
    }
  }

  const image = findSize(face, "256");
  return image;
});
