
const Heading = ({
    tag,
    text
}: any) => {
    const Tag = tag || "h1";









    // @ts-expect-error TS(2749): 'Tag' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    return <Tag>{text}</Tag>
}

export default Heading;