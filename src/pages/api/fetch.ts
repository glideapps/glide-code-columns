import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const url = req.query.url as string;
    const html = await fetch(url).then(x => x.text());
    res.status(200).send(html);
};
