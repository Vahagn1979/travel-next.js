"use client";

import "dotenv/config"
import {useRef} from "react";
import emailJS from '@emailjs/browser';
import {useNavbar} from "@/context/navbar";
import styles from "./contactContent.module.css";

const ContactContent = ({data}) => {
    const { title, name_placeholder, email_placeholder, message_placeholder, btn_text, successful_text, error_text } = data;
    const form = useRef();
    const {setShowNavbar} = useNavbar();    

    const sendEmail = (e) => {
        e.preventDefault();

        emailJS
           .sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                form.current,
                {publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}
            )
            .then(() => {
                alert(successful_text);
                form.current.reset();
            })
            .catch((err) => {
                console.log(err);
                alert(error_text)
            });
    };

    return (
        <div className={styles.contactLabel} onClick={() => setShowNavbar(false)}>
            <h1>{title}</h1>

            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.inputs}>
                    <input type="text" name="name" placeholder={name_placeholder} />
                    <input type="email" name="email" placeholder={email_placeholder} />
                </div>

                <textarea name="message" placeholder={message_placeholder} id="" cols="30" rows="10"></textarea>
                <button type="submit">{btn_text}</button>
            </form>
        </div>
    );
};

export default ContactContent;