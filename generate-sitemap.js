export const title = {
  home: "Juha Mikael / Home",
  blog: "Juha Mikael / Blog",
  projects: "Juha Mikael / Projects",
  portfolio: "Juha Mikael / Portfolio",
  skills: "Juha Mikael / Skills",
  contact: "Juha Mikael / Contact",
};

const baseURL = "https://dev.juhamikael.info";

// Define the sitemap structure using the keys from the `title` object
function sitemap() {
  return Object.keys(title).map((key) => {
    return {
      url: key === "home" ? baseURL : `${baseURL}/${key}`,
      lastModified: new Date(),
    };
  });
}

// Convert the sitemap structure to XML format
function generateXML(sitemapData) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  sitemapData.forEach((data) => {
    xml += "<url>";
    xml += `<loc>${data.url}</loc>`;
    xml += `<lastmod>${data.lastModified.toISOString()}</lastmod>`;
    xml += "</url>";
  });

  xml += "</urlset>";
  return xml;
}

// Generate the sitemap XML
const sitemapData = sitemap();
const xmlContent = generateXML(sitemapData);
console.log(xmlContent);
