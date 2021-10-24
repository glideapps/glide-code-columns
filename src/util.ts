export function removeUndefineds<T>(x: T): T {
  return JSON.parse(JSON.stringify(x));
}

export function map<T, U>(f: (x: T) => U, x: T | undefined): U | undefined {
  return x === undefined ? undefined : f(x);
}

export function withWindow<T>(f: (window: Window) => T): T | undefined {
  return typeof window === "undefined" ? undefined : f(window);
}

export function hashCode(x: any): number {
  const s = `${x}`;
  let hash = 0;
  if (s.length === 0) {
    return hash;
  }
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
