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

export async function generateStaticParams() {
  const { getAllArticles } = await import("@/lib/articles");

  return getAllArticles().map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const product = getProductBySlug(article.productSlug);
  if (!product) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const product = getProductBySlug(article.productSlug);
  if (!product) notFound();

  const related = getRelatedArticles(article.slug);

  return (
    <div className="container" style={{ maxWidth: 860, padding: "48px 0", lineHeight: 1.8 }}>

      {/* TITLE */}
      <h1 style={{ fontSize: 34, fontWeight: 900 }}>
        {article.title}
      </h1>

      <p style={{ color: "#666", marginBottom: 24 }}>
        {article.description}
      </p>

      {/* CTA */}
      <div style={{ padding: 16, border: "1px solid #eee", borderRadius: 12, marginBottom: 30 }}>
        <p>🔥 Hitung cicilan real-time</p>
        <Link href={`/simulasi-kredit/${product.slug}`} style={{ fontWeight: 700, color: "var(--accent)" }}>
          Buka kalkulator {product.name} →
        </Link>
      </div>

      {/* CONTENT SEO */}
      <h2>Kenapa {product.name} banyak dicari?</h2>
      <p>
        Motor ini populer karena harga terjangkau dan cicilan fleksibel.
      </p>

      <h2>Simulasi kredit {product.name}</h2>
      <p>
        Harga OTR: Rp {product.price.toLocaleString("id-ID")}
      </p>

      {/* INTERNAL LINKING */}
      <h2>Artikel terkait</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {related.map((r) => (
          <Link
            key={r.slug}
            href={`/artikel/${r.slug}`}
            style={{
              padding: 12,
              border: "1px solid #eee",
              borderRadius: 8,
              textDecoration: "none",
              color: "#111",
            }}
          >
            👉 {r.title}
          </Link>
        ))}
      </div>

    </div>
  );
}
