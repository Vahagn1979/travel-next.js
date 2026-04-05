import Logo from "@/components/header/logo";
import MenubarClient from "@/components/header/client_wrapper/MenubarClient";
import Languages from "@/components/header/langs";
import styles from "./header.module.css";

const Header = ({headerData, lang}) => {
    const {logoResp, navbarResp, langResp} = headerData;

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.left_side}>
                        <Logo data={logoResp}/>
                    </div>
                    <div>
                        <MenubarClient navbarResp={navbarResp} />
                    </div>
                    <Languages data={langResp} lang={lang}/>
                </div>
            </div>
        </header>
    );
};

export default Header;