import axios from "./axios";

export const safeFetch = async (url) => {
    try {
        return  await axios.get(url, {
            headers: {
                "Cache-Control": "s-maxage=60",
            },
        });
    } catch (err) {
        console.error(err);
        return null;
    }
};