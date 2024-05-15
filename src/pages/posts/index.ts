import Head from "next/head";







// @ts-expect-error TS(2307): Cannot find module '@/components/Heading' or its c... Remove this comment to see the full error message
import Heading from "@/components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { posts: data }
    }
}


const Posts = ({
    posts
}: any) => (







    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>







        // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Head>







            // @ts-expect-error TS(2304): Cannot find name 'title'.
            <title>Posts</title>
        </Head>







        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <Heading text="Posts list:" />







        // @ts-expect-error TS(2304): Cannot find name 'ul'.
        <ul>







            // @ts-expect-error TS(2552): Cannot find name 'posts'. Did you mean 'Posts'?
            {posts && posts.map(({
                id,
                title
            // @ts-expect-error TS(2364): The left-hand side of an assignment expression mus... Remove this comment to see the full error message
            }: any) => (







                // @ts-expect-error TS(2304): Cannot find name 'li'.
                id <= 10 ? <li key={id}>







                    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
                    <Link href={`/posts/${id}`}>{title}</Link>
                </li>
                    : null
            ))}
        </ul>

    </>
);

export default Posts;
