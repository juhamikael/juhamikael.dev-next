import { urlBuilder } from "./config";
const url = urlBuilder("creator-page");

export const getSingleArtistData = async (slug: string) => {
  let req = await fetch(url, { cache: "no-store" });
  const data = await req.json();
  const artists = data.story.content.body;
  const artist = artists.find((artist: any) => artist.slug === slug);
  return artist;
}