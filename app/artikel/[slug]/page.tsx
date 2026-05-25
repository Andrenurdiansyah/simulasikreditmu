import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";
import { getProductBySlug } from "@/lib/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// 1. OPTIMASI METADATA (Canonical, Keywords, OpenGraph Lengkap)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; 
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const product = getProductBySlug(article.productSlug);
  if (!product) return {};

  const domain = "https://www.simulasikreditmu.my.id"; // 👈 Ganti dengan domain asli kamu
  const url = `${domain}/artikel/${slug}`;

  return {
    title: `${article.title} | Angsuran & DP Ringan`,
    description: `${article.description} Dapatkan rincian spesifikasi, simulasi cicilan bulanan, dan promo kredit ${product.name} terbaru di sini.`,
    alternates: {
      canonical: url,
    },
    keywords: article.keywords || [product.name, "kredit motor", "simulasi cicilan", "DP murah"],
    authors: [{ name: "SimulasiKreditMu Team" }],
  openGraph: {
  title: `${article.title} | Simulasi Kredit Motor`,
  description: article.description,
  url: url,
  siteName: "SimulasiKreditMu",
  locale: "id_ID",
  type: "article",

  images: product.image
    ? [
        {
          url: `https://www.simulasikreditmu.my.id${product.image}`,
          alt: article.title,
        },
      ]
    : [],
},
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export async function generateStaticParams() {
  const { getAllArticles } = await import("@/lib/articles");
  return getAllArticles().map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const product = getProductBySlug(article.productSlug);
  if (!product) notFound();

  const related = getRelatedArticles(article.slug);

  // 2. SCHEMA MARKUP (JSON-LD) - Kunci utama Rich Snippet Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": product.name,
        "image": product.image ? `https://simulasikreditmu.com${product.image}` : "",
        "description": product.description,
        "brand": {
          "@type": "Brand",
          "name": product.brand
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "IDR",
          "price": product.price,
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "TechArticle",
        "@id": `https://www.simulasikreditmu.com/artikel/${article.slug}#article`,
        "headline": article.title,
        "description": article.description,
        "inLanguage": "id-ID",
        "mainEntityOfPage": `https://www.simulasikreditmu.com/artikel/${article.slug}`,
        "author": {
          "@type": "Organization",
          "name": "SimulasiKreditMu"
        }
      }
    ]
  };

  return (
    <>
      {/* Suntik Schema Markup ke Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 3. HTML SEMANTIK (<article>, <nav>, <section>, <aside>) */}
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px", lineHeight: 1.8 }}>

        {/* BREADCRUMB (Gunakan tag <nav> agar dibaca sebagai navigasi oleh bot) */}
        <nav aria-label="Breadcrumb" style={{ fontSize: 12, color: "#888", marginBottom: 20 }}>
          <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Home</Link> /{" "}
          <Link href="/artikel" style={{ color: "#888", textDecoration: "none" }}>Artikel</Link> /{" "}
          <span style={{ color: "#111" }}>{product.name}</span>
        </nav>

        {/* MAIN HEADER */}
        <header style={{ marginBottom: 30 }}>
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12, lineHeight: 1.3 }}>
            {article.title}
          </h1>
          <p style={{ fontSize: 18, color: "#555", fontStyle: "italic" }}>
            {article.description}
          </p>
        </header>

        {/* HERO CTA ACTION */}
        <div style={{
          padding: 20,
          border: "2px dashed var(--accent, #ff4a4a)",
          borderRadius: 12,
          marginBottom: 35,
          background: "#fafafa"
        }}>
          <p style={{ marginBottom: 8, fontWeight: 600 }}>🔥 Mau ambil {product.name}? Cek dulu simulasinya!</p>
          <Link
            href={`/simulasi-kredit/${product.slug}`}
            style={{ fontWeight: 800, color: "var(--accent, #ff4a4a)", textDecoration: "underline" }}
          >
            Hitung Cicilan Bulanan & DP {product.name} Sekarang →
          </Link>
        </div>

        {/* KONTEN UTAMA */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
            Kenapa {product.name} Banyak Dicari di Tahun 2026?
          </h2>
          <p style={{ marginBottom: 25, color: "#333" }}>
            {product.name} menjadi salah satu motor matik paling diminati saat ini. Selain harganya yang kompetitif, motor ini menawarkan konsumsi bensin yang sangat irit serta opsi cicilan fleksibel yang bisa disesuaikan dengan isi kantong Anda.
          </p>

          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
            Spesifikasi Singkat {product.name}
          </h2>
          <div style={{ marginBottom: 25, border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
            {Object.entries(product.specs || {}).map(([key, value], index) => (
              <div 
                key={key} 
                style={{ 
                  display: "flex", 
                  padding: "10px 16px", 
                  background: index % 2 === 0 ? "#fff" : "#f9f9f9",
                  borderBottom: "1px solid #eee" 
                }}
              >
                <div style={{ width: "35%", fontWeight: 700, color: "#555" }}>{key}</div>
                <div style={{ width: "65%", color: "#222" }}>{value}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
            Rincian Harga OTR & Estimasi Uang Muka (DP)
          </h2>
          <p style={{ marginBottom: 10 }}>
            Harga OTR Terbaru: <strong style={{ fontSize: 20, color: "#111" }}>Rp {product.price.toLocaleString("id-ID")}</strong>
          </p>
          <p style={{ marginBottom: 25 }}>
            Rekomendasi DP Ringan: <strong style={{ fontSize: 20, color: "green" }}>Rp {product.dp.toLocaleString("id-ID")}</strong>
          </p>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Link
              href={`/simulasi-kredit/${product.slug}`}
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "var(--accent, #ff4a4a)",
                color: "#fff",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
            >
              Mulai Simulasi Kredit {product.name} →
            </Link>
          </div>
        </section>

        {/* RELATED ARTICLES (Menggunakan <aside> karena merupakan konten pelengkap) */}
        {related.length > 0 && (
          <aside style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #eaeaea" }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 15 }}> Rekomendasi Artikel Kredit Lainnya</h2>
            <div style={{ display: "grid", gap: 12 }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/artikel/${r.slug}`}
                  style={{
                    padding: 16,
                    border: "1px solid #eee",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: "#111",
                    background: "#fff",
                    transition: "all 0.2s ease",
                    display: "block"
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 4px 0", color: "#222" }}>{r.title}</h3>
                  <div style={{ fontSize: 13, color: "var(--accent, #ff4a4a)", fontWeight: 600 }}>
                    Lihat simulasi cicilan & DP murah →
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}

      </article>
    </>
  );
}
