import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getArticleBySlug } from "@/lib/articles";
import { getProductBySlug } from "@/lib/products";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const { getAllArticles } = await import("@/lib/articles");
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const product = getProductBySlug(article.productSlug);
  if (!product) return {};

  return {
    title: article.title,
    description: `Simulasi kredit ${product.name} DP ringan, cicilan bulanan terjangkau, dan tenor fleksibel. Hitung estimasi sekarang.`,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const product = getProductBySlug(article.productSlug);
  if (!product) notFound();

  return (
    <div
      className="container"
      style={{ maxWidth: 820, padding: "48px 0", lineHeight: 1.8 }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>
        {article.title}
      </h1>

      <p style={{ color: "#666", marginBottom: 24 }}>
        Update terbaru simulasi kredit <b>{product.name}</b> dengan skema DP ringan
        dan cicilan yang bisa disesuaikan dengan kondisi keuangan kamu.
      </p>

      <div
        style={{
          padding: 16,
          border: "1px solid #eee",
          borderRadius: 12,
          marginBottom: 32,
          background: "#fafafa",
        }}
      >
        <p style={{ marginBottom: 8 }}>💡 Mau hitung cicilan real-time?</p>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            color: "var(--accent)",
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          Buka kalkulator {product.name} →
        </Link>
      </div>

      <h2>Kenapa banyak orang pilih DP ringan?</h2>
      <p>
        DP ringan bikin kamu bisa punya motor tanpa harus keluar uang besar di awal.
      </p>

      <h2>Simulasi kredit {product.name}</h2>
      <p>
        Harga OTR <b>Rp {product.price.toLocaleString("id-ID")}</b>
      </p>

      <h2>Apakah worth it?</h2>
      <p>
        Kalau butuh motor cepat tanpa nabung lama, ini opsi realistis.
      </p>

      <div
        style={{
          marginTop: 40,
          padding: 20,
          background: "#111",
          color: "#fff",
          borderRadius: 12,
        }}
      >
        <h3 style={{ marginBottom: 8 }}>Coba hitung sekarang</h3>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            color: "#fff",
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          Buka simulasi →
        </Link>
      </div>
    </div>
  );
}