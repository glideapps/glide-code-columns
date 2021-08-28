# Generated Faces Column

This is an [Experimental Code Column](https://docs.glideapps.com/all/reference/data-editor/computed-columns/experimental-code-column) for Glide that generates artifical faces using the [generated.photos](https://generated.photos) API.

For example, none of these people exist:

![](preview.png)

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

Edit the main file `src/column.ts`.

## Deployment

Commits to `master` compile and deploy the column on the `gh-pages` branch, so be sure to enabled GitHub Pages for that branch in your repo settings to host your column on GitHub.

The column URL for the origin repo is https://dvdsgl.github.io/glide-generated-faces/
