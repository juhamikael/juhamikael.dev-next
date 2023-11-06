import { urlBuilder } from "./config";

export const getAllByStory = async (story: string) => {
    const url = urlBuilder(story);
    let req = await fetch(url, { cache: "no-store" });
    const data = await req.json();
    return data?.story?.content;
};