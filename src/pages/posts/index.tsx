import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";

import { GetStaticProps } from "next";
import { IPost } from "../../shared/interfaces/types";

import styles from "../../../styles/Posts.module.scss";

type PostsTypeProps = {
    posts: IPost[];
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { posts: data },
    };
};

const Posts = ({ posts }: PostsTypeProps) => (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading text="Posts list:" />
        <ul className={styles.posts}>
            {posts && posts.map(({ id, title }: IPost) =>
                id <= 10 ? (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ) : null
            )}
        </ul>
    </>
);

export default Posts;
