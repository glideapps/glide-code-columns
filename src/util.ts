export function removeUndefineds<T>(x: T): T {
  return JSON.parse(JSON.stringify(x));
}

export function map<T, U>(f: (x: T) => U, x: T | undefined): U | undefined {
  return x === undefined ? undefined : f(x);
}

export function withWindow<T>(f: (window: Window) => T): T | undefined {
  return typeof window === "undefined" ? undefined : f(window);
}
