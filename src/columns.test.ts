import { getColumnDefinitions } from "./columns";
import { ColumnValue } from "./glide";

const definitions = getColumnDefinitions();

Object.values(definitions).forEach(definition => {
  const { name, tests = [], params: staticParams } = definition;

  if (tests.length === 0) return;

  test(name, async () => {
    for (const { params: testParams, expectedResult } of tests) {
      const params = Object.entries(staticParams).map(
        ([name, columnParam]) =>
          ({
            type: columnParam.type,
            value: testParams[name],
          } as ColumnValue)
      );
      const result = await definition.run(...params);
      expect(result).toBe(expectedResult);
    }
  });
});
