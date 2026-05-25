import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "", // Diubah dari [] menjadi ""
    },
    sitemap:"https://www.simulasikreditmu.my.id/sitemap.xml",
  };
}
