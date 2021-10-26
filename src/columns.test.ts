import { getColumnDefinitions } from "./columns";
import { ColumnValue } from "./glide";

const definitions = getColumnDefinitions();

Object.values(definitions).forEach(definition => {
    const { name, tests = [], params: staticParams } = definition;

    if (tests.length === 0) return;

    for (const { params: testParams, expectedResult, allowFailure } of tests) {
        const paramsDescription = Object.entries(testParams)
            .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
            .join(", ");
        const description = `${name} { ${paramsDescription} } = ${JSON.stringify(expectedResult)}${
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

                const result = await definition.run(...params);
                expect(result).toStrictEqual(expectedResult);
            } catch (error) {
                if (allowFailure !== true) {
                    throw error;
                }
            }
        });
    }
});
