import styles from "./langs.module.css";
import ChangeLanguageBtn from "@/components/header/langs/ChangeLanguageBtn";

const Languages = ({data ,lang}) => {

    return (
        <div className={styles.language_dropdown}>
            <div className={styles.selected_lang}>{lang}</div>

            <div className={styles.dropdown_menu}>
                {
                    data.map(elem => (
                        <ChangeLanguageBtn key={elem.id} lang={elem.code}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Languages;