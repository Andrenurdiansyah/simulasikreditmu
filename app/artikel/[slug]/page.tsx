import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { getProductBySlug } from "@/lib/products";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const { getAllArticles } = require("@/lib/articles");

  return getAllArticles().map((a: any) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const product = getProductBySlug(article.productSlug);
  if (!product) return {};

  return {
    title: article.title,
    description: article.description,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) return notFound();

  const product = getProductBySlug(article.productSlug);

  if (!product) return notFound();

  const related = getRelatedArticles(article.slug);

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: 40 }}>

      <h1 style={{ fontSize: 32, fontWeight: 800 }}>
        {article.title}
      </h1>

      <p style={{ marginBottom: 20, color: "#666" }}>
        {article.description}
      </p>

      <div style={{ padding: 16, border: "1px solid #eee", marginBottom: 30 }}>
        <Link href={`/simulasi-kredit/${product.slug}`}>
          Hitung cicilan {product.name} →
        </Link>
      </div>

      <h2>Kenapa {product.name}?</h2>
      <p>{product.description}</p>

      <h2>Harga</h2>
      <p>{product.price.toLocaleString("id-ID")}</p>

      <h2>Artikel lain</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {related.map((r) => (
          <Link
            key={r.slug}
            href={`/artikel/${r.slug}`}
            style={{ padding: 10, border: "1px solid #eee" }}
          >
            {r.title}
          </Link>
        ))}
      </div>
    </div>
  );
}