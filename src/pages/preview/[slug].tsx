import { GetStaticPaths, GetStaticProps } from "next";
import { getColumnDefinition } from "../../columns";
import REPL from "../../components/REPL";

interface Props {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
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
  const manifest = getColumnDefinition(slug);
  return <REPL key={slug} {...manifest} />;
};

export default PreviewPage;
