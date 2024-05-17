import { GetStaticProps } from "next"; // аннотация ф-ии по получнеие данных
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { IContacts } from "../../shared/interfaces/types";

import styles from "../../../styles/Contacts.module.scss";

// аннотация контактов на нлавонй странице
type ContactsTypeProps = {
    contacts: IContacts[];
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { contacts: data },
    };
};

const Contacts = ({ contacts }: ContactsTypeProps) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text="Contacts list:" />
            <ol className={styles.contacts}>
                {contacts &&
                    contacts.map(({ id, name, email }: IContacts) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>
                                <strong>{name}</strong>
                            </Link>
                        </li>
                    ))}
            </ol>
        </>
    );
};

export default Contacts;
