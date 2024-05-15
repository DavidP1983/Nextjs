import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Socials.module.scss";

const SocialsInfo = ({ socials }) => {

    if (!socials) {
        return null;
    }

    return (
        <>
            {/* <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head> */}
            <ul className={styles.socials}>
                {socials && socials.map(({ id, icon, path, fa }) => (
                    <li key={id}>
                        <a href={path} target="_blank" rel="noopener noreferrer">
                            {/* <i className={`fab fa-${icon}`} aria-hidden="true" /> */}
                            <FontAwesomeIcon
                                icon={fa}
                                className={`fab fa-${icon}`}
                                aria-hidden="true"
                                style={{ color: "white" }} >
                            </FontAwesomeIcon>
                        </a>
                    </li>
                ))}
            </ul >
        </>
    );
}

export default SocialsInfo;