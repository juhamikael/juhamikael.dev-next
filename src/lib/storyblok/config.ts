import 'dotenv/config'

export const urlBuilder = (story: string) => {
    const version = process.env.STORYBLOK_VERSION;
    const token = process.env.STORYBLOK_TOKEN;
    const url = `https://api.storyblok.com/v2/cdn/stories/${story}?version=${version}&token=${token}`
    return url;
}

