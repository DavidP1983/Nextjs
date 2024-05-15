import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// @ts-expect-error TS(2307): Cannot find module '../../styles/Navbar.module.scs... Remove this comment to see the full error message
import styles from "../../styles/Navbar.module.scss";


const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Contacts", path: "/contacts" }
];

const Navbar = () => {
    const { pathname } = useRouter();
    return (
        // @ts-expect-error TS(2304): Cannot find name 'nav'.
        <nav className={styles.nav}>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className={styles.logo}>
                // @ts-expect-error TS(2749): 'Image' refers to a value, but is being used as a ... Remove this comment to see the full error message
                <Image src="/nextjs-icon.png" width={60} height={60} alt="nextjs" fetchpriority="true" />
            </div>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className={styles.links}>
                {navigation.map(({
                    id,
                    path,
                    title
                }: any) => (
                    // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
                    <Link
                        // @ts-expect-error TS(2304): Cannot find name 'className'.
                        className={pathname === path ? styles.active : null}
                        // @ts-expect-error TS(2304): Cannot find name 'key'.
                        key={id}
                        // @ts-expect-error TS(2304): Cannot find name 'href'.
                        href={path}>{title}</Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;