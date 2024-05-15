import Heading from './Heading';

const Footer = () => (











    // @ts-expect-error TS(2304): Cannot find name 'footer'.
    <footer>











        // @ts-expect-error TS(2749): 'Heading' refers to a value, but is being used as ... Remove this comment to see the full error message
        <Heading tag="h3" text="Footer Created by me" />
    </footer>
);

export default Footer;