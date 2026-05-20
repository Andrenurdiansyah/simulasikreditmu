import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getArticleBySlug } from "@/lib/articles";
import { getProductBySlug } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { getAllArticles } = await import("@/lib/articles");
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);
  if (!article) return {};

  const product = getProductBySlug(article.productSlug);
  if (!product) return {};

  return {
    title: article.title,
    description: `Simulasi kredit ${product.name} DP ringan, cicilan bulanan terjangkau, dan tenor fleksibel. Hitung estimasi sekarang.`,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const product = getProductBySlug(article.productSlug);
  if (!product) notFound();

  return (
    <div className="container" style={{ maxWidth: 820, padding: "48px 0", lineHeight: 1.8 }}>

      {/* TITLE */}
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>
        {article.title}
      </h1>

      <p style={{ color: "#666", marginBottom: 24 }}>
        Update terbaru simulasi kredit <b>{product.name}</b> dengan skema DP ringan
        dan cicilan yang bisa disesuaikan dengan kondisi keuangan kamu.
      </p>

      {/* CTA BOX */}
      <div style={{
        padding: 16,
        border: "1px solid #eee",
        borderRadius: 12,
        marginBottom: 32,
        background: "#fafafa"
      }}>
        <p style={{ marginBottom: 8 }}>
          💡 Mau hitung cicilan real-time?
        </p>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            color: "var(--accent)",
            fontWeight: 700,
            textDecoration: "underline"
          }}
        >
          Buka kalkulator {product.name} →
        </Link>
      </div>

      {/* SECTION 1 */}
      <h2>Kenapa banyak orang pilih DP ringan?</h2>
      <p>
        DP ringan bikin kamu bisa punya motor tanpa harus keluar uang besar di awal.
        Sistem ini cocok buat pekerja baru, driver, atau siapa pun yang mau jaga cash flow.
      </p>

      {/* SECTION 2 */}
      <h2>Simulasi kredit {product.name}</h2>
      <p>
        Harga OTR saat ini berada di kisaran{" "}
        <b>Rp {product.price.toLocaleString("id-ID")}</b>.
        Dengan tenor fleksibel, cicilan bisa disesuaikan sesuai kemampuan.
      </p>

      <ul>
        <li>DP mulai dari minimal sesuai dealer</li>
        <li>Tenor 11–36 bulan</li>
        <li>Bunga flat mengikuti leasing</li>
      </ul>

      {/* SECTION 3 */}
      <h2>Apakah kredit motor ini worth it?</h2>
      <p>
        Kalau butuh kendaraan cepat tanpa nunggu nabung lama, kredit bisa jadi opsi realistis.
        Tapi tetap harus hitung cicilan biar gak ganggu cashflow bulanan.
      </p>

      {/* FAQ */}
      <h2>FAQ</h2>

      <h3>Berapa DP minimal {product.name}?</h3>
      <p>
        Biasanya mulai dari 10%–30% tergantung leasing dan promo dealer.
      </p>

      <h3>Berapa cicilan per bulan?</h3>
      <p>
        Tergantung DP, tenor, dan bunga. Gunakan kalkulator untuk simulasi akurat.
      </p>

      <h3>Apakah bisa DP ringan?</h3>
      <p>
        Bisa, tapi biasanya bunga atau tenor akan menyesuaikan.
      </p>

      {/* FINAL CTA */}
      <div style={{
        marginTop: 40,
        padding: 20,
        background: "#111",
        color: "#fff",
        borderRadius: 12
      }}>
        <h3 style={{ marginBottom: 8 }}>Coba hitung sekarang</h3>
        <p style={{ opacity: 0.8 }}>
          Sesuaikan DP, tenor, dan bunga sesuai kondisi kamu.
        </p>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            display: "inline-block",
            marginTop: 12,
            color: "#fff",
            fontWeight: 700,
            textDecoration: "underline"
          }}
        >
          Buka simulasi →
        </Link>
      </div>

    </div>
  );
}