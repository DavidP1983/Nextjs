import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";












import styles from "../../styles/Navbar.module.scss";


const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Contacts", path: "/contacts" }
];

const Navbar = () => {
    const { pathname } = useRouter();
    return (












        <nav className={styles.nav}>











            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className={styles.logo}>











                // @ts-expect-error TS(2749): 'Image' refers to a value, but is being used as a ... Remove this comment to see the full error message
                // @ts-expect-error TS(2322): Type '{ src: string; width: number; height: number... Remove this comment to see the full error message
                <Image src="/nextjs-icon.png" width={60} height={60} alt="nextjs" fetchpriority="true" />
            </div>











            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className={styles.links}>
                {navigation.map(({
                    id,
                    path,
                    title
                }: any) => (












                    <Link












                        // @ts-expect-error TS(2322): Type 'string | null' is not assignable to type 'st... Remove this comment to see the full error message
                        className={pathname === path ? styles.active : null}












                        key={id}












                        href={path}>{title}</Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;