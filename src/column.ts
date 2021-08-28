// let page = 1;
// let page_size = 100;

export default async function (seed, key) {
  console.log({ seed });
  seed = seed.value;
  if (seed === undefined) return undefined;

  key = key.value;
  if (key === undefined) return undefined;

  // const {} = await fetch(
  //   `https://api.generated.photos/api/v1/faces` +
  //     `?order_by=oldest` +
  //     `&page=${page}` +
  //     `&per_page=${page_size}` +
  //     `&api_key=${key}`,
  //   {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify({}),
  //   }
  // ).then((x) => x.json());

  return seed;
}
