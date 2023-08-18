/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://dev.juhamikael.info",
  generateRobotsTxt: true,
  exclude: ["/contact", "/studio", "/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/contact",
      },
      {
        userAgent: "*",
        disallow: "/studio",
      },
      {
        userAgent: "*",
        disallow: "/404",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://dev.juhamikael.info/sitemap.xml"],
  },
};
