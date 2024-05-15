import Head from "next/head";
import Heading from "@/components/Heading";
import SocialsInfo from "@/components/SocialsInfo";

import styles from "../../styles/Home.module.scss";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socialsApi`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { socials: data }
  }
}


const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application" />
    <SocialsInfo socials={socials} />
  </div>
);

export default Home;
