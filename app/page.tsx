import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Simulasi Kredit Motor – Hitung Cicilan Mudah & Cepat",
  description:
    "Hitung simulasi kredit motor Honda, Yamaha, Suzuki dengan mudah. Temukan cicilan terjangkau sesuai kemampuanmu. Gratis & tanpa registrasi.",
};

export default function HomePage() {
  const { slug } = await params;

const cleanSlug = slug.split("-dp-ringan-cicilan-murah")[0];
const product = getProductBySlug(cleanSlug);

if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section style={styles.hero}>
        <div className="container" style={styles.heroInner}>
          <div className="badge badge-accent" style={{ marginBottom: 20 }}>
            🚀 Gratis & Tanpa Registrasi
          </div>
          <h1 style={styles.heroTitle}>
            Hitung Simulasi Kredit Motor
            <span style={styles.heroAccent}> Dalam Detik</span>
          </h1>
          <p style={styles.heroDesc}>
            Bandingkan cicilan motor Honda, Yamaha, Suzuki, dan berbagai merek
            lainnya. Atur DP, tenor, dan bunga sesuai kemampuanmu—hasil
            langsung tampil tanpa ribet.
          </p>
          <div style={styles.heroActions}>
            <a href="#produk" className="btn btn-primary" style={{ fontSize: 16 }}>
              Lihat Semua Motor
            </a>
            <a href="#cara-kerja" className="btn btn-outline">
              Cara Kerja
            </a>
          </div>

          {/* Quick stats */}
          <div style={styles.stats}>
            {[
              { num: `${products.length}+`, label: "Produk Motor" },
              { num: "100%", label: "Gratis" },
              { num: "Instan", label: "Hasil Simulasi" },
            ].map((s) => (
              <div key={s.label} style={styles.stat}>
                <div style={styles.statNum}>{s.num}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
     <section className="section" id="produk">
  <div className="container">
    <h2 className="section-title">Pilih Motor Impianmu</h2>
    <p className="section-subtitle">
      Klik produk untuk menghitung simulasi kredit secara detail.
    </p>

    <div style={styles.carousel}>
      {products.slice(0, 8).map((product) => (
        <div key={product.slug} style={styles.slide}>
          <Card product={product} />
        </div>
      ))}
    </div>

    <div style={{ textAlign: "center", marginTop: 24 }}>
      <Link href="/#produk" className="btn btn-outline">
        Lihat semua motor →
      </Link>
    </div>
  </div>
</section>

      {/* How it works */}
      <section
        className="section"
        id="cara-kerja"
        style={{ background: "var(--bg-muted)" }}
      >
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Cara Pakai Kalkulator
          </h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 48px" }}
          >
            Tiga langkah mudah untuk mengetahui estimasi cicilan motormu.
          </p>
          <div className="grid-3">
            {[
              {
                step: "01",
                title: "Pilih Motor",
                desc: "Browse koleksi motor yang tersedia dan klik produk yang kamu minati.",
              },
              {
                step: "02",
                title: "Atur Parameter",
                desc: "Sesuaikan DP, tenor, dan suku bunga menggunakan slider interaktif.",
              },
              {
                step: "03",
                title: "Lihat Hasil",
                desc: "Estimasi cicilan dan total pembayaran langsung tampil secara real-time.",
              },
            ].map((item) => (
              <div key={item.step} style={styles.step}>
                <div style={styles.stepNum}>{item.step}</div>
                <h3 style={styles.stepTitle}>{item.title}</h3>
                <p style={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container">
          <div style={styles.ctaBanner}>
            <div>
              <h2 style={styles.ctaTitle}>Ada pertanyaan atau masukan?</h2>
              <p style={styles.ctaDesc}>
                Kami terbuka untuk saran dan kolaborasi.
              </p>
            </div>
            <Link href="/kontak" className="btn btn-primary">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    padding: "80px 0 60px",
    background: "linear-gradient(160deg, var(--bg) 60%, var(--accent-light) 100%)",
    borderBottom: "1px solid var(--border)",
  },
  heroInner: {
    maxWidth: 680,
  },
  heroTitle: {
    fontSize: "clamp(36px, 5vw, 56px)",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    marginBottom: 20,
  },
  heroAccent: {
    color: "var(--accent)",
  },
  heroDesc: {
    fontSize: 18,
    color: "var(--text-muted)",
    lineHeight: 1.7,
    marginBottom: 32,
    maxWidth: 560,
  },
  heroActions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 48,
  },
  stats: {
    display: "flex",
    gap: 40,
    flexWrap: "wrap",
  },
  stat: {},
  statNum: {
    fontFamily: "var(--font-display)",
    fontSize: 28,
    fontWeight: 800,
    color: "var(--text)",
    letterSpacing: "-0.02em",
  },
  statLabel: {
    fontSize: 13,
    color: "var(--text-muted)",
    fontWeight: 500,
  },
  step: {
    padding: 28,
    background: "var(--bg-card)",
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
  },
  stepNum: {
    fontFamily: "var(--font-display)",
    fontSize: 40,
    fontWeight: 800,
    color: "var(--accent)",
    opacity: 0.25,
    lineHeight: 1,
    marginBottom: 16,
  },
  stepTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 10,
  },
  stepDesc: {
    fontSize: 14,
    color: "var(--text-muted)",
    lineHeight: 1.7,
  },
  ctaBanner: {
    background: "var(--text)",
    borderRadius: "var(--radius)",
    padding: "40px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    flexWrap: "wrap",
  },
  ctaTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 24,
    color: "white",
    marginBottom: 8,
  },
  ctaDesc: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 15,
  },
  carousel: {
  display: "flex",
  gap: 16,
  overflowX: "auto",
  paddingBottom: 8,

  // desktop fallback feel lebih rapi
  scrollSnapType: "x mandatory",
  WebkitOverflowScrolling: "touch",
},

slide: {
  flex: "0 0 auto",
  width: 280,
  scrollSnapAlign: "start",
},
};
