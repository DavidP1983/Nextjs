import Head from "next/head";












// @ts-expect-error TS(2307): Cannot find module '@/components/Heading' or its c... Remove this comment to see the full error message
import Heading from "@/components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contacts: data }
    }
}

const Contacts = ({
    contacts
}: any) => {













    return <>











        // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Head>











            // @ts-expect-error TS(2304): Cannot find name 'title'.
            <title>Contacts</title>
        </Head>











        // @ts-expect-error TS(2552): Cannot find name 'text'. Did you mean 'Text'?
        <Heading text="Contacts list:" />











        // @ts-expect-error TS(2304): Cannot find name 'ul'.
        <ul>
            {contacts && contacts.map(({
                id,
                name,
                email
            }: any) => (












                <li key={id}>











                    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
                    <Link href={`/contacts/${id}`}><strong>{name}</strong></Link>
                </li>
            ))}
        </ul>
    </>;
};

export default Contacts;