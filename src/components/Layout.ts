import Header from "./Header";
import Footer from "./Footer";


const Layout = ({
    children
}: any) => {
    return (
        <>



            // @ts-expect-error TS(2749): 'Header' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Header />
            {children}



            // @ts-expect-error TS(2749): 'Footer' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Footer />
        </>
    )
}

export default Layout;