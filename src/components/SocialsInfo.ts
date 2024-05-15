import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// @ts-expect-error TS(2307): Cannot find module '../../styles/Socials.module.sc... Remove this comment to see the full error message
import styles from "../../styles/Socials.module.scss";

const SocialsInfo = ({
    socials
}: any) => {

    if (!socials) {
        return null;
    }

    return <>
        {/* <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
        </Head> */}
        // @ts-expect-error TS(2304): Cannot find name 'ul'.
        <ul className={styles.socials}>
            {socials && socials.map(({
                id,
                icon,
                path,
                fa
            }: any) => (
                // @ts-expect-error TS(2304): Cannot find name 'li'.
                <li key={id}>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href={path} target="_blank" rel="noopener noreferrer">
                        {/* <i className={`fab fa-${icon}`} aria-hidden="true" /> */}
                        <FontAwesomeIcon
                            // @ts-expect-error TS(2304): Cannot find name 'icon'.
                            icon={fa}
                            // @ts-expect-error TS(2304): Cannot find name 'className'.
                            className={`fab fa-${icon}`}
                            // @ts-expect-error TS(2304): Cannot find name 'aria'.
                            aria-hidden="true"
                            // @ts-expect-error TS(2552): Cannot find name 'style'. Did you mean 'styles'?
                            style={{ color: "white" }} >
                        </FontAwesomeIcon>
                    </a>
                </li>
            ))}
        </ul >
    </>;
}

export default SocialsInfo;