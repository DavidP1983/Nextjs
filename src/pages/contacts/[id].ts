import Head from "next/head";







// @ts-expect-error TS(2307): Cannot find module '@/components/ContactInfo' or i... Remove this comment to see the full error message
import ContactInfo from "@/components/ContactInfo";

export const getServerSideProps = async (context: any) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contact: data }
    }
}


const Contact = ({
    contact
}: any) => (








    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    <>







        // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Head>







            // @ts-expect-error TS(2304): Cannot find name 'title'.
            <title>Contact</title>
        </Head>







        // @ts-expect-error TS(7022): 'contact' implicitly has type 'any' because it doe... Remove this comment to see the full error message
        <ContactInfo contact={contact} />
    </>
);

export default Contact;