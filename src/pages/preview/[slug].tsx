import * as fs from "fs";

import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import REPL from "../../components/REPL";
import { ColumnDefinition, Manifest } from "../../glide";

interface Props {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const manifests: Record<string, Manifest> = JSON.parse(
    fs.readFileSync(`public/all.json`, "utf8")
  );
  return {
    paths: Object.keys(manifests).map(slug => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string;
  return {
    revalidate: 3600,
    props: { slug },
  };
};

const PreviewPage = (props: Props) => {
  const { slug } = props;
  const { default: manifest } = require(`../../columns/${slug}`) as {
    default: ColumnDefinition<any>;
  };
  return <REPL {...manifest} />;
};

export default PreviewPage;
