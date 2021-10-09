#!/bin/bash

for COLUMN in src/columns/*.ts
do
    F=$(basename -- $COLUMN)
    SLUG="${F%.*}"

    mkdir -p public/$SLUG

    # First build is to extract metadata and build manifest
    esbuild $COLUMN --bundle --outfile=public/$SLUG/index.js --format=cjs --log-level=silent --external:fs --external:path
    cp script/manifest.js public/$SLUG
    node public/$SLUG/manifest.js
    rm public/$SLUG/manifest.js


    echo "<script type='module'>import './$SLUG.js';</script>" > public/$SLUG/index.html
done

# Now we build the actual column
esbuild src/columns/*.ts --bundle --minify --sourcemap --outdir=public/ --external:fs --external:path --splitting --format=esm

ts-node script/build.ts