import Head from "next/head";




// @ts-expect-error TS(2307): Cannot find module '@/components/PostInfo' or its ... Remove this comment to see the full error message
import PostInfo from "@/components/PostInfo";


export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    const paths = data.map(({
        id
    }: any) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { post: data }
    }
}



const Post = ({
    post
}: any) => {
    return (




        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        <>




            // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
            <Head>




                // @ts-expect-error TS(2304): Cannot find name 'title'.
                <title>Post</title>
            </Head>




            // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
            <PostInfo post={post} />
        </>

    );
};

export default Post;