/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFiles: ["./jest.setup.js"],
    roots: ["src"],
    transformIgnorePatterns: [
        "/node_modules/(?!(chroma-js|javascript-time-ago|mathjs|nanoid)/)",
    ],
};
