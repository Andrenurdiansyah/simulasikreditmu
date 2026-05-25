import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import LoanCalculator from "@/components/LoanCalculator";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const products = getAllProducts();

  console.log(
    "Generated slugs:",
    products.map((p) => p.slug)
  );
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
  title: `Simulasi Kredit ${product.name} – Cicilan & DP Terjangkau`,
  description: `Hitung simulasi kredit ${product.name} harga OTR Rp${product.price.toLocaleString("id-ID")}. Atur DP, tenor, dan bunga sesuai kemampuanmu.`,

  alternates: {
    canonical: `/simulasi-kredit/${slug}`,
  },

  openGraph: {
    title: `Simulasi Kredit ${product.name}`,
    description: product.description,
    url: `https://www.simulasikreditmu.my.id/simulasi-kredit/${slug}`,
  },
};
}

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default async function SimulasiPage({
  params,
}: Props) {

  const { slug } = await params;

  console.log("Current slug:", slug);

  const product = getProductBySlug(slug);

  console.log("Product found:", product);
  if (!product) notFound();

  const allProducts = getAllProducts().filter((p) => p.slug !== product.slug);

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div style={styles.breadcrumbWrap}>
        <div className="container">
          <nav style={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" style={styles.breadcrumbLink}>Beranda</Link>
            <span style={styles.breadcrumbSep}>›</span>
            <Link href="/#produk" style={styles.breadcrumbLink}>Motor</Link>
            <span style={styles.breadcrumbSep}>›</span>
            <span style={styles.breadcrumbCurrent}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section style={styles.header}>
        <div className="container" style={styles.headerInner}>
          <div style={styles.imageBox}>
 <Image
  src={product.image}
  alt={product.name}
  fill
  style={{
    objectFit: "contain",
    transform: "scale(0.9)", // ini kunci biar ga kegedean
  }}
/>
</div>
          <div style={styles.headerInfo}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
              <span className="badge badge-muted">{product.brand}</span>
              <span className="badge badge-accent">{product.category}</span>
            </div>
            <h1 style={styles.productTitle}>{product.name}</h1>
            <p style={styles.productDesc}>{product.description}</p>

            <div style={styles.priceRow}>
              <div>
                <div style={styles.priceLabel}>Harga OTR</div>
                <div style={styles.priceValue}>{formatRupiah(product.price)}</div>
              </div>
              <div>
                <div style={styles.priceLabel}>DP Awal</div>
                <div style={styles.priceValue}>{formatRupiah(product.dp)}</div>
              </div>
              <div>
                <div style={styles.priceLabel}>Tenor Tersedia</div>
                <div style={styles.priceValue}>
                  {product.tenor[0]}–{product.tenor[product.tenor.length - 1]} Bulan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section">
        <div className="container">
          <LoanCalculator product={product} />
        </div>
      </section>

      {/* Specs */}
      {product.specs && (
        <section style={styles.specsSection}>
          <div className="container">
            <h2 style={styles.specsTitle}>Spesifikasi {product.name}</h2>
            <div style={styles.specsGrid}>
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} style={styles.specRow}>
                  <span style={styles.specKey}>{key}</span>
                  <span style={styles.specVal}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO Text Block */}
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={styles.seoTitle}>
            Kenapa Pilih Simulasi Kredit {product.name}?
          </h2>
          <div style={styles.seoBody}>
            <p>
              {product.name} adalah salah satu pilihan terpopuler di segmen{" "}
              {product.category.toLowerCase()} dengan harga OTR{" "}
              {formatRupiah(product.price)}. Dengan menggunakan kalkulator
              simulasi kredit kami, kamu bisa dengan mudah menghitung estimasi
              cicilan bulanan sesuai kemampuanmu.
            </p>
            <p>
              Kamu bisa mengatur uang muka (DP) mulai dari 10% hingga 60% dari
              harga motor, memilih tenor dari {product.tenor[0]} hingga{" "}
              {product.tenor[product.tenor.length - 1]} bulan, serta menyesuaikan
              suku bunga flat sesuai penawaran leasing yang kamu dapatkan.
            </p>
            <p>
              Ingat bahwa hasil simulasi ini bersifat estimasi. Untuk angka
              pasti, silakan hubungi dealer resmi {product.brand} terdekat atau
              perusahaan leasing pilihan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section
        className="section"
        style={{ background: "var(--bg-muted)", paddingTop: 48, paddingBottom: 64 }}
      >
        <div className="container">
          <h2 style={{ ...styles.seoTitle, marginBottom: 32 }}>
            Motor Lainnya
          </h2>
          <div style={styles.carousel}>
            {allProducts.map((p) => (
              <Link key={p.slug} href={`/simulasi-kredit/${p.slug}`} style={styles.otherCard}>
                <span style={{ fontSize: 32 }}>🏍️</span>
                <div>
                  <div style={styles.otherName}>{p.name}</div>
                  <div style={styles.otherPrice}>{formatRupiah(p.price)}</div>
                </div>
                <span style={{ color: "var(--accent)", marginLeft: "auto" }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

    const styles: Record<string, React.CSSProperties> = {
  breadcrumbWrap: {
    background: "var(--bg-muted)",
    borderBottom: "1px solid var(--border)",
    padding: "12px 0",
    overflowX: "auto",
  },

  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    whiteSpace: "nowrap",
  },

  breadcrumbLink: {
    color: "var(--text-muted)",
    textDecoration: "none",
  },

  breadcrumbSep: {
    color: "var(--text-light)",
  },

  breadcrumbCurrent: {
    color: "var(--text)",
    fontWeight: 500,
  },

  header: {
    background: "var(--bg-card)",
    borderBottom: "1px solid var(--border)",
    padding: "48px 0",
  },

  headerInner: {
    display: "flex",
    flexWrap: "wrap",
    gap: 32,
    alignItems: "center",
  },

  imageBox: {
    position: "relative",
    background: "var(--bg-muted)",
    borderRadius: "var(--radius)",
    width: "100%",
    maxWidth: 280,
    height: 240,
    overflow: "hidden",
    margin: "0 auto",
    flexShrink: 0,
  },

  headerInfo: {
    flex: 1,
    minWidth: 280,
  },

  productTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(26px,5vw,40px)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    marginBottom: 12,
    lineHeight: 1.2,
  },

  productDesc: {
    color: "var(--text-muted)",
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 28,
  },

  priceRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
  },

  priceLabel: {
    fontSize: 11,
    color: "var(--text-light)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: 600,
    marginBottom: 4,
  },

  priceValue: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 18,
    color: "var(--text)",
    wordBreak: "break-word",
  },

  specsSection: {
    paddingBottom: 0,
  },

  specsTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 20,
  },

  specsGrid: {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    overflow: "hidden",
    width: "100%",
  },

  specRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    padding: "14px 20px",
    borderBottom: "1px solid var(--border)",
    fontSize: 14,
  },

  specKey: {
    color: "var(--text-muted)",
    minWidth: 120,
    fontWeight: 600,
  },

  specVal: {
    fontWeight: 600,
    color: "var(--text)",
    flex: 1,
    wordBreak: "break-word",
  },

  seoTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
  },

  seoBody: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    color: "var(--text-muted)",
    lineHeight: 1.8,
    fontSize: 15,
  },

  otherCard: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 20,
    background: "var(--bg-card)",
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    textDecoration: "none",
    color: "var(--text)",
    flexWrap: "wrap",
    scrollSnapAlign: "start",
minWidth: 240,
flex: "0 0 auto",
  },

  otherName: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 15,
    marginBottom: 4,
  },

  otherPrice: {
    fontSize: 13,
    color: "var(--text-muted)",
  },
  carousel: {
  display: "flex",
  gap: 16,
  overflowX: "auto",
  paddingBottom: 8,
  scrollSnapType: "x mandatory",
},
};
