import { GetStaticPaths, GetStaticProps } from "next";
import { getColumnSlugs, getColumnDefinition } from "../../columns";
import REPL from "../../components/REPL";

interface Props {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getColumnSlugs();
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
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
  const manifest = getColumnDefinition(slug);
  return <REPL key={slug} {...manifest} />;
};

export default PreviewPage;
