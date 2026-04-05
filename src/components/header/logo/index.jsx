import Link from "next/link";
import styles from "./logo.module.css";

const Logo = ({data}) => {
    return (
        <Link
            href="/"
            className={styles.logo}
        >
            {data.title}
        </Link>
    );
};

export default Logo;