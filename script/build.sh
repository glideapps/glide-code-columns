#!/bin/bash

for COLUMN in src/columns/*.ts
do
    F=$(basename -- $COLUMN)
    SLUG="${F%.*}"

    mkdir -p public/$SLUG
    esbuild $COLUMN --bundle --outfile=public/$SLUG/index.js --format=cjs
    cp script/manifest.js public/$SLUG
    node public/$SLUG/manifest.js
    rm public/$SLUG/manifest.js

    esbuild $COLUMN --bundle --outfile=public/$SLUG/index.js
    echo "<script src='/$SLUG/index.js'></script>" > public/$SLUG/index.html
done