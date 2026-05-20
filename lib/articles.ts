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

  return products.map((p) => {
    return {
      slug: p.slug, // 👈 FIX: langsung sama kayak product slug
      productSlug: p.slug,
      title: `Kredit ${p.name} 2026`,
      description: `Simulasi kredit ${p.name} dengan DP ringan dan cicilan murah.`,
      keywords: [p.name, "kredit", "dp ringan", "cicilan murah"],
    };
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