import { GetStaticPaths, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import { getColumnSlugs, getColumnDefinitionAsync } from "../../columns";
import { ColumnDefinition } from "../../glide";
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
    const [manifest, setManifest] = useState<ColumnDefinition<any> | null>(null);

    useEffect(() => {
        getColumnDefinitionAsync(slug).then(setManifest);
    }, [slug]);

    if (!manifest) return null;
    return <REPL key={slug} {...manifest} />;
};

export default PreviewPage;
