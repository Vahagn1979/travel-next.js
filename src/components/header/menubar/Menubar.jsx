import Image from "next/image";
import { useNavbar } from "@/context/navbar";
import styles from "./menubar.module.css";


const Menubar = () => {
    const {showNavbar, setShowNavbar} = useNavbar();

    return (
        <div className={styles.menubar_div}>
            <Image
                src={
                    showNavbar  ? "./images/header/x_mark.svg"
                                : "./images/header/menubar.svg"
                }
                className={styles.menubar}
                alt="menu-bar"
                width={30}
                height={30}
                onClick={() => setShowNavbar(prev => !prev)}
            />
        </div>
    );
};

export default Menubar;