import Heading from "./Heading";

const PostInfo = ({
    post
}: any) => {
    const { title, body } = post || {};

    // //Если contact не существует, то возвращаем сообщение
    if (!post) {










        // @ts-expect-error TS(2749): 'Heading' refers to a value, but is being used as ... Remove this comment to see the full error message
        return <Heading tag="h3" text="Empty Post" />
    }

    return (
        <>










            // @ts-expect-error TS(2749): 'Heading' refers to a value, but is being used as ... Remove this comment to see the full error message
            <Heading tag="h3" text={title} />










            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div>
                {body}
            </div>
        </>
    );
}

export default PostInfo;