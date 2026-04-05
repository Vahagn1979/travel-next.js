"use server";

import {cookies} from "next/headers";

export const displayLang = async () => {
    const cookieStore = await cookies();
    return cookieStore.get('lang')?.value ?? "en";
}

export const createLang = async (formData) => {
    const lang = formData.get("lang");
    const cookieStore = await cookies();

    cookieStore.set("lang", lang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365 * 10,
        sameSite: "lax",
        secure: true ,
    });
};
