import { getColumnDefinition, getColumnSlugs } from "./columns";
import { ColumnValue } from "./glide";

import { execSync } from "child_process";

const changedSlugs = Array.from(
    execSync("git diff --name-only HEAD", { encoding: "utf-8" }).matchAll(/src\/columns\/(.+)\.ts/g)
).map(x => x[1]);

const slugsToTest = changedSlugs.length > 0 ? changedSlugs : getColumnSlugs();

slugsToTest.forEach(slug => {
    const { run, tests = [], params: staticParams } = getColumnDefinition(slug);

    if (tests.length === 0) return;

    describe(slug, () => {
        for (const { params: testParams, expectedResult, allowFailure } of tests) {
            const paramsDescription = Object.entries(testParams)
                .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
                .join(", ");
            const description = `{ ${paramsDescription} } = ${JSON.stringify(expectedResult)}${
                allowFailure === true ? " FAILURE EXPECTED" : ""
            }`;
            test(description, async () => {
                try {
                    const params = Object.entries(staticParams).map(
                        ([name, columnParam]) =>
                            ({
                                type: columnParam.type,
                                value: testParams[name],
                            } as ColumnValue)
                    );

                    const result = await run(...params);
                    expect(result).toStrictEqual(expectedResult);
                } catch (error) {
                    if (allowFailure !== true) {
                        throw error;
                    }
                }
            });
        }
    });
});
