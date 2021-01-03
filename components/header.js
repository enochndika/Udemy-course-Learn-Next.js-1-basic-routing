import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const styles = {
    header: {
      margin: 20,
      padding: 20,
      border: "1px solid #DDD",
    },
    link: {
      margin: 15,
    },
    active: {
      margin: 15,
      color: "blue",
    },
  };

  return (
    <div style={styles.header}>
      <Link href="/" passHref>
        <a style={router.pathname === "/" ? styles.active : styles.link}>
          Home
        </a>
      </Link>
      <Link href="/blog" passHref>
        <a style={router.pathname === "/blog" ? styles.active : styles.link}>
          Blog
        </a>
      </Link>
      <Link href="/profile" passHref>
        <a
          style={router.pathname === "/profile" ? styles.active : styles.link}
        >
          Profile
        </a>
      </Link>
      <Link href="/blog/items" passHref>
        <a
          style={
            router.pathname === "/blog/items" ? styles.active : styles.link
          }
        >
          Items
        </a>
      </Link>
      <Link href="/blog/categories" passHref>
        <a
          style={
            router.pathname === "/blog/categories" ? styles.active : styles.link
          }
        >
          Categories
        </a>
      </Link>
    </div>
  );
};
