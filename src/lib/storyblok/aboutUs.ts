import { urlBuilder } from "./config";
const url = urlBuilder("about-us");

export const getAboutUs = async () => {
    let req = await fetch(url, { cache: "no-store" });
    const data = await req.json();
    return data.story.content;
};