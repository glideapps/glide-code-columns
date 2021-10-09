import { GetStaticPaths, GetStaticProps } from "next";
import { Manifest } from "../../glide";
import * as fs from "fs";

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
  return <div>{slug}</div>;
};

export default PreviewPage;
