import * as glide from "../glide";

export default glide
    .columnNamed("Duplicated Items")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Find items duplicated in an array`)
    .withStringArrayResult()
    .withRequiredStringArrayParam("values")

    .withTest({ values: ["a", "b", "b", "c"] }, ["b"])
    .withTest({ values: ["a", "b", "a", "b", "c", "b"] }, ["a", "b"])
    .withTest({ values: ["a", "b", "c"] }, [])
    .withTest({ values: undefined }, undefined)

    .run(({ values }) => {
        const counts = new Map<string, number>();
        const results: string[] = [];
        // The previous behavior was:
        // uniq(values.filter((v, i) => values.slice(i+1).includes(v)))
        // The filter/slice/includes is an O(n^2) operation, and the uniq
        // is internally implemented as an O(n^2) operation, though it
        // happens as a separate step so this is really O(n^2).
        // For large arrays this is still way too slow, and especially
        // disastrous on self-joined tables where the array happens to
        // contain all of the rows.
        for (let i = values.length - 1; i >= 0; i--) {
            const value = values[i];
            const prevCount = counts.get(value);
            if (prevCount === undefined) {
                counts.set(value, 1);
            } else if (prevCount === 1) {
                counts.set(value, 2);
                results.unshift(value);
            } else {
                // We already know there's a duplicate, we don't need
                // to increment the count here.
                continue;
            }
        }
        return results;
    });
