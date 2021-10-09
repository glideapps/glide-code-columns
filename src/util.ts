export function removeUndefineds<T>(x: T): T {
  return JSON.parse(JSON.stringify(x));
}
