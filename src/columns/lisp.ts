import * as glide from "../glide";
const { exec, env } = require("../lips");

const run: glide.Column = async (code, ...params) => {
  if (code?.value === undefined) return undefined;

  const local = env.inherit(
    "name",
    Object.fromEntries(params.map((p, i) => [`p${i + 1}`, p.value]))
  );
  try {
    const results = await exec(code.value, local);
    return results[0];
  } catch {
    return undefined;
  }
};

export default glide.column({
  name: "LISP",
  run,
  description: "Runs LISP code",
  about: `
      Uses [github.com/jcubic/lips](https://github.com/jcubic/lips), a 
      "scheme-based powerful lisp interpreter written in JavaScript."
    `,
  video: "https://www.youtube.com/watch?v=G3FDnNZF5uA",
  author: "David Siegel <david@glideapps.com>",
  params: {
    code: {
      displayName: "LISP",
      type: "string",
    },
    p1: {
      displayName: "p1",
      type: "primitive",
    },
    p2: {
      displayName: "p2",
      type: "primitive",
    },
    p3: {
      displayName: "p3",
      type: "primitive",
    },
    p4: {
      displayName: "p4",
      type: "primitive",
    },

    p5: {
      displayName: "p5",
      type: "primitive",
    },
  },
  example: {
    code: `(+ 1 2 p1)`,
    p1: 5,
  },
  result: { type: "primitive" },
});
