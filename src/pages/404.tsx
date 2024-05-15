import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";



// @ts-expect-error TS(2307): Cannot find module '@/components/Heading' or its c... Remove this comment to see the full error message
import Heading from "@/components/Heading";

import styles from "../../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Page not found" />
      </div>
    </div>
  );
};

export default Error;
