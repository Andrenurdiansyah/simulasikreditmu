import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { getProductBySlug } from "@/lib/products";

// 1. FIX: Sesuaikan tipe Props agar params berupa Promise
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { getAllArticles } = await import("@/lib/articles");

  return getAllArticles().map((a) => ({
    slug: a.slug,
  }));
}

// 2. FIX: Gunakan await params di generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; 
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const product = getProductBySlug(article.productSlug);
  if (!product) return {};

  return {
    title: `${article.title} | Simulasi Kredit Motor`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
    },
  };
}

// 3. FIX: Ubah komponen menjadi async dan gunakan await params
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const product = getProductBySlug(article.productSlug);
  if (!product) notFound();

  const related = getRelatedArticles(article.slug);

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: 48, lineHeight: 1.8 }}>

      {/* BREADCRUMB */}
      <div style={{ fontSize: 12, color: "#888", marginBottom: 20 }}>
        <Link href="/" style={{ color: "#888" }}>Home</Link> /{" "}
        <Link href="/artikel" style={{ color: "#888" }}>Artikel</Link> /{" "}
        <span>{product.name}</span>
      </div>

      {/* TITLE */}
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 10 }}>
        {article.title}
      </h1>

      <p style={{ color: "#666", marginBottom: 25 }}>
        {article.description}
      </p>

      {/* HERO CTA */}
      <div style={{
        padding: 18,
        border: "1px solid #eee",
        borderRadius: 12,
        marginBottom: 35,
        background: "#fafafa"
      }}>
        <p style={{ marginBottom: 8 }}>🔥 Simulasi kredit real-time</p>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{ fontWeight: 800, color: "var(--accent)" }}
        >
          Hitung cicilan {product.name} sekarang →
        </Link>
      </div>

      {/* SECTION 1 */}
      <h2 style={{ marginBottom: 10 }}>Kenapa {product.name} banyak dicari?</h2>
      <p style={{ marginBottom: 25 }}>
        {product.name} jadi pilihan karena harga masih masuk, irit bensin, dan cicilan bisa diatur sesuai kemampuan.
      </p>

      {/* SECTION 2 */}
      <h2 style={{ marginBottom: 10 }}>Spesifikasi singkat</h2>
      <ul style={{ marginBottom: 25 }}>
        {Object.entries(product.specs || {}).map(([key, value]) => (
          <li key={key}>
            <b>{key}:</b> {value}
          </li>
        ))}
      </ul>

      {/* SECTION 3 */}
      <h2 style={{ marginBottom: 10 }}>Harga & simulasi</h2>
      <p style={{ marginBottom: 10 }}>
        Harga OTR: <b>Rp {product.price.toLocaleString("id-ID")}</b>
      </p>
      <p style={{ marginBottom: 25 }}>
        DP mulai: <b>Rp {product.dp.toLocaleString("id-ID")}</b>
      </p>

      <Link
        href={`/simulasi-kredit/${product.slug}`}
        style={{
          display: "inline-block",
          padding: "10px 16px",
          background: "var(--accent)",
          color: "#fff",
          borderRadius: 8,
          fontWeight: 700,
          marginBottom: 40
        }}
      >
        Coba simulasi →
      </Link>

      {/* RELATED */}
      <h2 style={{ marginBottom: 15 }}>Artikel terkait</h2>

      <div style={{ display: "grid", gap: 12 }}>
        {related.map((r) => (
          <Link
            key={r.slug}
            href={`/artikel/${r.slug}`}
            style={{
              padding: 14,
              border: "1px solid #eee",
              borderRadius: 10,
              textDecoration: "none",
              color: "#111",
              transition: "0.2s",
            }}
          >
            <div style={{ fontWeight: 700 }}>{r.title}</div>
            <div style={{ fontSize: 12, color: "#777" }}>
              Klik untuk lihat simulasi →
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}