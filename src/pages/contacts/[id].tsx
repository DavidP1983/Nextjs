import { GetServerSideProps, GetServerSidePropsContext } from "next"; //аннатация ф-ии c динаическим Rout-гом и его context
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { IContactType } from "../../shared/interfaces/types";

// аннотация передаваеммых пропсов полученные от серевера для одного контакта
type ContactTypeProps = {
    contact: IContactType
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params?.id}`
    );
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { contact: data },
    };
};

const Contact = ({ contact }: ContactTypeProps) => (
    <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactInfo contact={contact} />
    </>
);

export default Contact;
