











// @ts-expect-error TS(2307): Cannot find module '@/components/Layout' or its co... Remove this comment to see the full error message
import Layout from '@/components/Layout';
import '../../styles/globals.scss';

const MyApp = ({
  Component,
  pageProps
}: any) => {
  return (












    <Layout>











      // @ts-expect-error TS(2304): Cannot find name 'main'.
      <main>











        // @ts-expect-error TS(2749): 'Component' refers to a value, but is being used a... Remove this comment to see the full error message
        <Component {...pageProps} />
      </main>
    </Layout>


  )
};

export default MyApp;
