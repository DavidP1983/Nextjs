import Head from "next/head";










// @ts-expect-error TS(2307): Cannot find module '@/components/Heading' or its c... Remove this comment to see the full error message
import Heading from "@/components/Heading";










// @ts-expect-error TS(2307): Cannot find module '@/components/SocialsInfo' or i... Remove this comment to see the full error message
import SocialsInfo from "@/components/SocialsInfo";











// @ts-expect-error TS(2307): Cannot find module '../../styles/Home.module.scss'... Remove this comment to see the full error message
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


const Home = ({
  socials
}: any) => (










  // @ts-expect-error TS(2304): Cannot find name 'div'.
  <div className={styles.wrapper}>










    // @ts-expect-error TS(2749): 'Head' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Head>










      // @ts-expect-error TS(2304): Cannot find name 'title'.
      <title>Home</title>
    </Head>










    // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
    <Heading text="Next.js Application" />










    // @ts-expect-error TS(2448): Block-scoped variable 'socials' used before its de... Remove this comment to see the full error message
    <SocialsInfo socials={socials} />
  </div>
);

export default Home;
