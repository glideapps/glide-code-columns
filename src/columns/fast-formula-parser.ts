import * as glide from "../glide";

import FormulaParser, { FormulaHelpers, Types } from "fast-formula-parser";

function convertCell(cell: any): any {
    try {
        if (typeof cell === "string") {
            const res = JSON.parse(cell);
            if (typeof res === "number") {
                return res;
            }
        }
        return cell;
    } catch (err) {
        return cell;
    }
}

const run: glide.Column = (formula, ...params) => {
    const data: any[][] = params.map(p => [p.value]);

    const parser = new FormulaParser({
        functions: {
            UPPER: text => {
                text = FormulaHelpers.accept(text, Types.STRING);
                return text.toUpperCase();
            },
        },
        onCell: ({ _, row, col }) => {
            return convertCell(data[row - 1][col - 1]);
        },
        onRange: (ref: { from: { row: number; col: number }; to: { row: number; col: number } }) => {
            const arr: any[][] = [];
            for (let row = ref.from.row; row <= ref.to.row; row++) {
                const innerArr: any[] = [];
                if (data[row - 1]) {
                    for (let col = ref.from.col; col <= ref.to.col; col++) {
                        innerArr.push(convertCell(data[row - 1][col - 1]));
                    }
                }
                arr.push(innerArr);
            }
            return arr;
        },
    });

    if (formula?.value === undefined) return undefined;
    const position = { row: 1, col: 1, sheet: 0 };
    try {
        const v = parser.parse(formula.value, position);
        // fast-formula-parser can return non-primitives such as arrays, but
        // also error objects, none of which we want to, or are allowed to,
        // return.
        if (typeof v === "number" || typeof v === "string" || typeof v === "boolean") {
            return v;
        } else {
            return undefined;
        }
    } catch (err) {}
};

export default glide.column({
    name: "Excel Formula",
    category: "Code",
    released: "direct",
    description: "Run Excel formulas",
    about: `Uses [lesterlyu.github.io/fast-formula-parser](https://lesterlyu.github.io/fast-formula-parser) to evaluate Excel formulas.`,
    author: "Chris Ozgo <chris.ozgo@heyglide.com>",
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
    result: {
        type: "primitive",
    },
    example: {
        formula: "SUM(A1, A2)",
        A1: 1,
        A2: 2,
    },
    run,
    tests: [
        { params: { formula: "A1 + A2", A1: 1, A2: 2 }, expectedResult: 3 },
        { params: { formula: "SUM(A1:A3)", A1: 1, A2: 2, A3: 3 }, expectedResult: 6 },
        { params: { formula: "AVERAGE(1, A1)", A1: 3 }, expectedResult: 2 },
        { params: { formula: "SUM(A1, A2)", A1: 4, A2: "4" }, expectedResult: 8 },
        { params: { formula: "SUM(A1, A2, 5)", A1: "5", A2: "10" }, expectedResult: 20 },
        { params: { formula: 'UPPER("hello")' }, expectedResult: "HELLO" },
        {
            params: { formula: 'IF(ISBLANK(A1),"",REPLACE(A1,FIND(" ",A1),1,""))', A1: "Unknown" },
            expectedResult: undefined,
        },
    ],
});
