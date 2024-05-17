import { ReactHTML } from "react";



interface IHeadingType {
  text: string;
  tag?: ReactHTML["h1"] | string;
}

const Heading = ({ tag, text }: IHeadingType) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
