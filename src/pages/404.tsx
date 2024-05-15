import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";





// @ts-expect-error TS(2307): Cannot find module '@/components/Heading' or its c... Remove this comment to see the full error message
import Heading from "@/components/Heading";






// @ts-expect-error TS(2307): Cannot find module '../../styles/404.module.scss' ... Remove this comment to see the full error message
import styles from '../../styles/404.module.scss';

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        const redirect = setTimeout(() => {
            router.push("/");
        }, 3000);
        return () => {
            clearTimeout(redirect);
        }
    }, [router]);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles.wrapper}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Head>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <title>Error</title>
            </Head>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Heading text="404" />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Heading tag="h2" text="Page not found" />
            </div>
        </div>
    );
};

export default Error;