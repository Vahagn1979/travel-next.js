import Link from "next/link";
import { useNavbar } from "@/context/navbar";
import styles from "./navbar.module.css";

const Navbar = ({data}) => {
    const {showNavbar, setShowNavbar} = useNavbar();

    return (
        <nav className={`${styles.navbar} ${showNavbar ? styles.active : ""}`} onClick={() => setShowNavbar(false)}>
            {
                data.map(elem => (
                    <Link href={`http://localhost:3000${elem.url}`} key={elem.id}>
                        {elem.title}
                    </Link>
                ))
            }
        </nav>
    );
};

export default Navbar;