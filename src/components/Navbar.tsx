import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Navbar.module.scss";

interface NavigationType {
  id: number;
  title: string;
  path: string;
}


const navigation: NavigationType[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/nextjs-icon.png"
          width={60}
          height={60}
          alt="nextjs"
          priority={true}
        />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, path, title }: NavigationType) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.active : undefined}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
