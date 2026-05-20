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

  const data = getAllArticles();

  console.log("ARTICLES:", data);

  return data.map((a) => ({
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
        Update lengkap simulasi kredit <b>{product.name}</b> dengan opsi
        <b> DP ringan</b>, cicilan fleksibel, dan tenor yang bisa disesuaikan
        sesuai kondisi keuangan kamu.
      </p>

      {/* CTA BOX */}
      <div
        style={{
          padding: 18,
          border: "1px solid #eee",
          borderRadius: 12,
          marginBottom: 32,
          background: "#fafafa",
        }}
      >
        <p style={{ marginBottom: 6 }}>⚡ Mau lihat cicilan real-time?</p>

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

      {/* SECTION 1 */}
      <h2 style={{ marginTop: 20 }}>Apa itu DP ringan di kredit motor?</h2>
      <p>
        DP ringan adalah skema pembayaran di mana kamu hanya perlu membayar
        uang muka kecil di awal, sehingga motor bisa langsung dibawa pulang
        tanpa harus nunggu tabungan besar.
      </p>

      <p>
        Skema ini sering dipilih karena lebih fleksibel, terutama untuk
        pekerja baru, driver ojek online, atau yang butuh kendaraan cepat.
      </p>

      {/* SECTION 2 */}
      <h2>Simulasi kredit {product.name}</h2>
      <p>
        Harga OTR saat ini: <b>Rp {price}</b>
      </p>

      <ul>
        <li>DP bisa mulai rendah (tergantung leasing)</li>
        <li>Tenor fleksibel 11–36 bulan</li>
        <li>Bunga flat mengikuti kebijakan leasing</li>
        <li>Cicilan bisa disesuaikan kemampuan bulanan</li>
      </ul>

      {/* SECTION 3 */}
      <h2>Kenapa banyak orang pilih skema ini?</h2>
      <p>
        Karena lebih ringan di awal, kamu bisa tetap punya kendaraan tanpa
        ganggu cash flow. Tapi tetap harus diperhitungkan supaya cicilan tidak
        membebani penghasilan bulanan.
      </p>

      {/* SECTION 4 */}
      <h2>Apakah kredit ini worth it?</h2>
      <p>
        Kalau kamu butuh motor cepat untuk kerja atau mobilitas harian,
        kredit bisa jadi solusi realistis.
      </p>

      <p>
        Tapi kalau masih bisa nabung, selalu lebih aman untuk ambil DP lebih
        besar biar cicilan lebih ringan.
      </p>

      {/* CTA FINAL */}
      <div
        style={{
          marginTop: 40,
          padding: 22,
          background: "#111",
          color: "#fff",
          borderRadius: 12,
        }}
      >
        <h3 style={{ marginBottom: 8 }}>
          Coba hitung cicilan sekarang
        </h3>

        <p style={{ opacity: 0.8, marginBottom: 12 }}>
          Atur DP, tenor, dan lihat simulasi sesuai kondisi kamu.
        </p>

        <Link
          href={`/simulasi-kredit/${product.slug}`}
          style={{
            color: "#fff",
            fontWeight: 800,
            textDecoration: "underline",
          }}
        >
          Buka simulasi {product.name} →
        </Link>
      </div>
    </div>
  );
}