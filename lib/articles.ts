import { getAllProducts } from "@/lib/products";

export function getAllArticles() {
  const products = getAllProducts();

  return products.map((p) => ({
    slug: p.slug, // ✅ GUNAIN SLUG PRODUCT AJA
    productSlug: p.slug,
    title: `Kredit ${p.name} DP Ringan Cicilan Murah`,
  }));
}

export function getArticleBySlug(slug: string) {
  const articles = getAllArticles();
  return articles.find((a) => a.slug === slug);
}