import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialsPropsType } from "../pages";
import { ISocialsInfo } from "../shared/interfaces/types";

import styles from "../../styles/Socials.module.scss";


const SocialsInfo = ({ socials }: SocialsPropsType) => {

  if (!socials) {
    return null;
  }

  return (
    <>
      {/* <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
        </Head> */}
      <div className={styles.container}>
        <div>Information about Next.js features and API</div>
        <div>Example Next.js project</div>
        <div>Dynamic pages</div>
      </div>
      <ul className={styles.socials}>
        {socials &&
          socials.map(({ id, icon, path, fa }: ISocialsInfo) => (
            <li key={id} className={styles.icon} datatype={icon}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                {/* <i className={`fab fa-${icon}`} aria-hidden="true" /> */}
                <FontAwesomeIcon
                  icon={fa}
                  className={`fab fa-${icon}`}
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SocialsInfo;
