import Head from "next/head";
import Heading from "../components/Heading";
import SocialsInfo from "../components/SocialsInfo";
import { GetStaticProps } from "next";
import { ISocialsInfo } from "../shared/interfaces/types";

import styles from "../../styles/Home.module.scss";
import { useEffect } from "react";

export type SocialsPropsType = {
  socials: ISocialsInfo[];
}

export const getStaticProps: GetStaticProps = async () => {

  try {
    const response = await fetch(`${process.env.API_HOST}/socialsApi/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };

  } catch {
    return {
      props: { socials: null }
    }
  }
};

const Home = ({ socials }: SocialsPropsType) => {

  function messageOnWindowChanches() {
    if (document.hidden) {
      document.title = "Breacup"
    } else {
      document.title = "Home"
    }
  }

  useEffect(() => {

    window.addEventListener("visibilitychange", messageOnWindowChanches);
    return () => {
      window.removeEventListener("visibilitychange", messageOnWindowChanches);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" />
      <SocialsInfo socials={socials} />
    </div>
  );
};

export default Home;
