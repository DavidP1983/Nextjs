import Heading from "./Heading";

const PostInfo = ({ post }) => {
    const { title, body } = post || {};

    // //Если contact не существует, то возвращаем сообщение
    if (!post) {
        return <Heading tag="h3" text="Empty Post" />
    }

    return (
        <>
            <Heading tag="h3" text={title} />
            <div>
                {body}
            </div>
        </>
    );
}

export default PostInfo;