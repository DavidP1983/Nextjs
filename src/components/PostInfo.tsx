import Heading from "./Heading";
import { IPost } from "../shared/interfaces/types";

type PostType = {
  post: IPost
}

const PostInfo = ({ post }: PostType) => {
  const { title, body } = post || {};

  // //Если post не существует, то возвращаем сообщение
  if (!post) {
    return <Heading tag="h3" text="Empty Post" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <div>{body}</div>
    </>
  );
};

export default PostInfo;
