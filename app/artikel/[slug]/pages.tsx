import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getArticleBySlug } from "@/lib/articles";
import { getProductBySlug } from "@/lib/products";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const { getAllArticles } = await import("@/lib/articles");

  return getAllArticles().map((a) => ({
    slug: a.slug,
  }));
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
    description: `Simulasi kredit ${product.name} DP ringan, cicilan terjangkau, tenor fleksibel. Hitung sekarang sesuai kemampuan kamu.`,
    openGraph: {
      title: article.title,
      description: product.description,
    },
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
      style={{
        maxWidth: 820,
        padding: "48px 0",
        lineHeight: 1.8,
      }}
    >
      {/* TITLE */}
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>
        {article.title}
      </h1>

      <p style={{ color: "#666", marginBottom: 24 }}>
        Lagi cari <b>{product.name}</b> dengan DP ringan? Ini simulasi biar kamu
        bisa ngukur kemampuan cicilan sebelum ambil kredit.
      </p>

      {/* CTA BOX */}
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

      {/* SECTION */}
      <h2>Kenapa DP ringan banyak dipilih?</h2>
      <p>
        Karena kamu bisa punya motor tanpa harus keluar uang besar di awal.
        Cocok buat yang pengen cash flow tetap aman.
      </p>

      <h2>Simulasi {product.name}</h2>
      <p>
        Harga OTR sekarang:{" "}
        <b>Rp {product.price.toLocaleString("id-ID")}</b>
      </p>

      <ul>
        <li>DP fleksibel sesuai leasing</li>
        <li>Tenor 11–36 bulan</li>
        <li>Bunga flat mengikuti kebijakan pembiayaan</li>
      </ul>

      <h2>Worth it nggak?</h2>
      <p>
        Kalau butuh kendaraan cepat tanpa nunggu nabung lama, ini bisa jadi
        opsi. Tapi tetap harus hitung cicilan biar aman tiap bulan.
      </p>

      {/* FAQ */}
      <h2>FAQ</h2>

      <h3>Berapa DP minimal?</h3>
      <p>Biasanya 10%–30% tergantung leasing.</p>

      <h3>Bisa DP ringan?</h3>
      <p>Bisa, tapi tenor atau bunga bisa menyesuaikan.</p>

      <h3>Cicilan berapa?</h3>
      <p>Gunakan kalkulator untuk hasil paling akurat.</p>

      {/* FINAL CTA */}
      <div
        style={{
          marginTop: 40,
          padding: 20,
          background: "#111",
          color: "#fff",
          borderRadius: 12,
        }}
      >
        <h3 style={{ marginBottom: 8 }}>Coba simulasi sekarang</h3>
        <p style={{ opacity: 0.8 }}>
          Atur DP, tenor, dan bunga sesuai kondisi kamu.
        </p>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            display: "inline-block",
            marginTop: 12,
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