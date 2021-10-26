import * as glide from "../glide";
import { HyperFormula } from "hyperformula";

const options = {
    precisionRounding: 4,
    licenseKey: "gpl-v3",
};

const run: glide.Column = async (formula, ...params) => {
    if (formula === undefined) return undefined;
    const B1 = formula.value;
    const [row1, ...rest] = params.map(p => p.value);
    const data = [[row1, B1], ...rest.map(x => [x])];

    const hyperformula = HyperFormula.buildFromArray(data, options);
    return hyperformula.getCellValue({ row: 0, col: 1, sheet: 0 });
};

export default glide.column({
    name: "Hyperformula",
    category: "Code",
    released: "sandboxed",
    description: "Run Excel formulas",
    about: `
      Uses [handsontable.github.io/hyperformula](https://handsontable.github.io/hyperformula) to evaluate
      Excel formulas.
    `,
    video: "https://www.youtube.com/watch?v=JJXUmACTDdk",
    author: "David Siegel <david@glideapps.com>",
    params: {
        formula: {
            displayName: "Formula",
            type: "string",
        },
        A1: {
            displayName: "A1",
            type: "primitive",
        },
        A2: {
            displayName: "A2",
            type: "primitive",
        },
        A3: {
            displayName: "A3",
            type: "primitive",
        },
        A4: {
            displayName: "A4",
            type: "primitive",
        },
        A5: {
            displayName: "A5",
            type: "primitive",
        },
    },
    example: {
        formula: `= A1 + A2`,
        A1: `= MAX(3, A3, 5)`,
        A2: `= LEN("Glide")`,
        A3: 42,
    },
    result: { type: "primitive" },
    run,
    icon: `<svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.802 1.61791C32.2704 0.484412 34.0962 -0.0858159 35.9487 0.0104718H40.6196L38.3202 4.0615H35.9127C35.2336 4.01682 34.5631 4.23344 34.0385 4.66699C33.518 5.22337 33.1787 5.92466 33.0654 6.67808L26.4122 37.7528C26.067 39.5449 25.1304 41.1693 23.7524 42.366C22.2845 43.5066 20.4547 44.0799 18.5985 43.9807H15.5089L15.5078 43.9861H10.4044L14.849 21.527C14.9408 21.1299 14.9868 20.7236 14.9859 20.316C15.0128 19.9308 14.9594 19.5442 14.8292 19.1806C14.6989 18.817 14.4945 18.4845 14.229 18.204C13.5913 17.6788 12.7751 17.4205 11.9512 17.4832C10.7477 17.4322 9.56904 17.8362 8.64988 18.6149C7.69907 19.5239 7.07776 20.7234 6.88386 22.0244L5.13947 31.0059H0L4.87276 6.57716H10.0122L8.36155 14.9099C9.90333 13.6526 11.8438 12.9879 13.8326 13.0357C15.5452 12.9446 17.2282 13.509 18.5396 14.6143C19.135 15.1912 19.5991 15.8897 19.9001 16.6622C20.2011 17.4347 20.3321 18.263 20.284 19.0906C20.2821 19.8008 20.2048 20.5088 20.0533 21.2027L16.3186 39.9224H18.6417C18.9779 39.9484 19.316 39.9076 19.6364 39.8024C19.9567 39.6973 20.2532 39.5298 20.5087 39.3097C21.0365 38.7613 21.3772 38.0598 21.4818 37.3059L28.135 6.23117C28.4858 4.43947 29.4244 2.81601 30.802 1.61791Z" fill="currentColor"/>
</svg>
`,
});
