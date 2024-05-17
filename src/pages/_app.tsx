import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../../styles/globals.scss";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <Layout>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>
      <main>
        <AnyComponent {...pageProps} />
      </main>
    </Layout>
  );
};

export default MyApp;
