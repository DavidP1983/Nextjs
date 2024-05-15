import Navbar from "./Navbar";

const Header = () => (





    // @ts-expect-error TS(2552): Cannot find name 'header'. Did you mean 'Headers'?
    <header>





        // @ts-expect-error TS(2749): 'Navbar' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Navbar />
    </header>
);

export default Header; 