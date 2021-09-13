# Glide Fetch Column

Fetches JSON data from a public API and transforms it with an optional [jq query](https://stedolan.github.io/jq/tutorial/).

## Example: Fetch a Cat Fact

1. Set URL to `https://cat-fact.herokuapp.com/facts` to fetch cat facts.
1. Set query to `.[0].text` to get the text of the first fact.

## Development

```
$ npm install
$ npm run build
$ npm test
```
