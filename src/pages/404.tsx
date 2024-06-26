import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";

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
