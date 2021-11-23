import type { NextApiRequest, NextApiResponse } from "next";

import scrape from "html-metadata";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const url = req.query.url as string;
    const meta = await scrape(url);
    res.status(200).json(meta);
};
