export function url(root: string, params: Record<string, any>): string {
  const search =
    "?" +
    Object.entries(params)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
  return root + search;
}
