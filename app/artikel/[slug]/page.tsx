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

  return getAllArticles().map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const product = getProductBySlug(article.productSlug);
  if (!product) return {};

  return {
    title: article.title,
    description: `Simulasi kredit ${product.name} DP ringan, cicilan motor terjangkau, tenor fleksibel. Hitung sekarang sebelum beli.`,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const product = getProductBySlug(article.productSlug);
  if (!product) notFound();

  const price = product.price.toLocaleString("id-ID");

  return (
    <div
      className="container"
      style={{ maxWidth: 860, padding: "48px 0", lineHeight: 1.8 }}
    >
      {/* TITLE */}
      <h1 style={{ fontSize: 34, fontWeight: 900, marginBottom: 12 }}>
        {article.title}
      </h1>

      <p style={{ color: "#666", marginBottom: 24, fontSize: 16 }}>
        Simulasi kredit <b>{product.name}</b> dengan skema DP ringan, cicilan
        fleksibel, dan tenor menyesuaikan kemampuan kamu.
      </p>

      {/* CTA */}
      <div
        style={{
          padding: 18,
          border: "1px solid #eee",
          borderRadius: 12,
          marginBottom: 32,
          background: "#fafafa",
        }}
      >
        <p style={{ marginBottom: 6 }}>⚡ Coba hitung cicilan real-time</p>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            color: "var(--accent)",
            fontWeight: 800,
            textDecoration: "underline",
          }}
        >
          Buka kalkulator {product.name} →
        </Link>
      </div>

      {/* CONTENT */}
      <h2>Apa itu DP ringan?</h2>
      <p>
        DP ringan bikin kamu bisa ambil motor tanpa keluar uang besar di awal.
        Cocok buat yang butuh kendaraan cepat buat kerja atau aktivitas harian.
      </p>

      <h2>Simulasi {product.name}</h2>
      <p>
        Harga OTR sekarang: <b>Rp {price}</b>
      </p>

      <ul>
        <li>DP fleksibel sesuai leasing</li>
        <li>Tenor 11–36 bulan</li>
        <li>Cicilan bisa disesuaikan income</li>
      </ul>

      <h2>Worth it gak?</h2>
      <p>
        Kalau butuh kendaraan cepat, ini opsi realistis. Tapi tetap hitung
        cicilan biar cashflow aman.
      </p>

      {/* FINAL CTA */}
      <div
        style={{
          marginTop: 40,
          padding: 22,
          background: "#111",
          color: "#fff",
          borderRadius: 12,
        }}
      >
        <h3 style={{ marginBottom: 8 }}>Hitung sekarang</h3>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            color: "#fff",
            fontWeight: 800,
            textDecoration: "underline",
          }}
        >
          Buka simulasi →
        </Link>
      </div>
    </div>
  );
}