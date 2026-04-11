const fs = require("fs");

const {
    default: { json },
} = require("./index");

fs.writeFileSync(`${__dirname}/glide.json`, json);
process.exit(0);
