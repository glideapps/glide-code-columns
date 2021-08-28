export interface FacesResponse {
  faces: Face[];
  total: number;
}

export interface Face {
  id: string;
  version: string;
  urls: SizedURL[];
  meta: Meta;
}

export interface Meta {
  confidence: number;
  gender: string[];
  age: string[];
  ethnicity: string[];
  eye_color: string[];
  hair_color: string[];
  hair_length: string[];
  emotion: string[];
}

type SizedURL =
  | { "32": string }
  | { "64": string }
  | { "128": string }
  | { "256": string }
  | { "512": string }
  | { "1024": string };

export function findSize(face: Face, size: "256"): string | undefined {
  const found = face.urls.find((url) => Object.keys(url)[0] === size);
  return found !== undefined ? found[size] : undefined;
}
