import { getAllProducts } from "@/lib/products";

export type Article = {
  slug: string;
  productSlug: string;
  title: string;
  description: string;
  keywords: string[];
};

export function getAllArticles(): Article[] {
  const products = getAllProducts();

  const baseKeywords = [
    "dp-ringan",
    "cicilan-murah",
    "tanpa-ribet",
    "simulasi-kredit",
    "tenor-fleksibel",
  ];

  return products.flatMap((p) => {
    return baseKeywords.map((keyword) => {
      return {
        slug: `${p.slug}-kredit-${keyword}`,
        productSlug: p.slug,
        title: `Kredit ${p.name} ${keyword.replaceAll("-", " ")} 2026`,
        description: `Simulasi kredit ${p.name} dengan ${keyword.replaceAll("-", " ")}, DP terjangkau dan cicilan ringan.`,
        keywords: baseKeywords,
      };
    });
  });
}

export function getArticleBySlug(slug: string) {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3) {
  return getAllArticles()
    .filter((a) => a.slug !== currentSlug)
    .slice(0, limit);
}

export function getArticleByProductSlug(productSlug: string) {
  return getAllArticles().filter((a) => a.productSlug === productSlug);
}