# Glide Atomic Counter

This is an [Experimental Code Column](https://docs.glideapps.com/all/reference/data-editor/computed-columns/experimental-code-column) and webhooks for Glide that allow you to implement atomic counters.

## Increment

Add a webhook for `https://glide-atomic-counter.vercel.app/api/increment` and pass the value `counter` to increment the counter with that name by `1`.

## Decrement

Add a webhook for `https://glide-atomic-counter.vercel.app/api/decrement` and pass the value `counter` to decrement the counter with that name by `1`.

## Reading the counter

Add an Experimental Code Column with address `https://glide-atomic-counter.vercel.app/`. Supply the `counter` name to read the counter with that name; supply the current time to cause Glide to periodically re-read the counter.

## Details

- It's written in TypeScript.
- It's deployed on GitHub Pages.
- It's unit-testable.

## Development

```
$ npm install
$ npm run build
$ npm test
```

Edit the main file `src/column.ts` and the manifest in `public/glide.json`.
