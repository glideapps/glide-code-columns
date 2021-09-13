import type { NextApiRequest, NextApiResponse } from "next";
import { ColumnValue } from "./glide";

export function allowCors(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<unknown>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    return await handler(req, res);
  };
}

export async function fetchWithColumns(
  path: string,
  cols: Record<string, ColumnValue>
) {
  const query = Object.entries(cols)
    .map(([k, v]) => `${k}=${encodeURIComponent(v.value)}`)
    .join("&");
  const route = `${path}?${query}`;
  return await fetch(route).then((x) => x.json());
}
