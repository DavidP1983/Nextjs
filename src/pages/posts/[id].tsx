import Head from "next/head";
import PostInfo from "../../components/PostInfo";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { IPost } from "../../shared/interfaces/types";

type PostTypeProps = {
    post: IPost;
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    const paths = data.map(({ id }: any) => ({
        params: { id: id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params?.id}`
    );
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { post: data },
    };
};


const Post = ({ post }: PostTypeProps) => {
    return (
        <>
            <Head>
                <title>Post</title>
            </Head>
            <PostInfo post={post} />
        </>
    );
};

export default Post;
