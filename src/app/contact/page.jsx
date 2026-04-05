import {displayLang} from "@/lib/lang";
import {safeFetch} from "@/lib/safeFetch";
import ContactContent from "@/components/contacts/ContactContent";

export const metadata = {
    title: "Contact Us",
    description: "What we can do for you",
};

const Contact = async () => {
    const lang = await displayLang();
    const contactResp = (await safeFetch(`contact-page-contents?lang=${lang}`)).data[0];

    return (
        <div className="container">
            <ContactContent data={contactResp} />
        </div>
    );
};

export default Contact;