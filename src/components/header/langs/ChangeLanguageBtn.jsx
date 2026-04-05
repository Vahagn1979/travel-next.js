import { createLang } from "@/lib/lang";

const ChangeLanguageBtn = ({lang}) => {

    return (
        <form action={createLang}>
            <input type="hidden" name="lang" value={lang} />
            <button type="submit">
                {lang}
            </button>
        </form>
    );
};

export default ChangeLanguageBtn;

