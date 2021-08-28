// This substitues 'BUNDLE' in public/index.html.in with the
// hashed bundle filename created by esbuild. esbuild can
// probably do this natively but I couldn't figure it out.

const fs = require("fs");

const bundle = fs
  .readdirSync("public")
  .find((name) => name.startsWith("bundle-"));

if (bundle === undefined) {
  throw new Error("Cannot find JavaScript bundle");
}

const html = fs
  .readFileSync("public/index.html.in")
  .toString()
  .replace("BUNDLE", bundle);

fs.writeFileSync("public/index.html", html);

console.log({ bundle });
