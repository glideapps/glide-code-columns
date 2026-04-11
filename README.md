# Glide Code Columns

Code columns are an open source way to create computations using your data in [Glide Apps](https://glideapps.com).

## How glide consumes columns

The glide main app loads columns as static JS bundles served from this repo's Vercel deployment — **not** as an npm package. Each column is independently bundled by esbuild and served at:

| URL | Description |
|-----|-------------|
| `/{slug}/index.js` | CJS bundle (CommonJS, no React) |
| `/{slug}/function.js` | ESM bundle |
| `/{slug}/glide.json` | Column metadata (name, params, result type) |
| `/all.json` | Master manifest of all columns |

Column bundles communicate with the glide host app via `window.postMessage()`. The bundles have no React dependency and are fully independent of the Next.js demo site.

### Caching

Column bundles (`index.js`, `function.js`, `glide.json`) are immutably cached at the CDN — content is tied to a specific Vercel deployment. `/all.json` uses a shorter cache with stale-while-revalidate to reflect newly added columns sooner.

## Develop

```
$ npm install
$ npm run build
$ npm test
```
