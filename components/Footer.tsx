import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <div style={styles.logo}>
              <span style={{ fontSize: 18 }}>⚡</span>
              <span style={styles.logoText}>SimulasiKreditmu</span>
              <span style={styles.logoDot}>.my.id</span>
            </div>
            <p style={styles.tagline}>
              Hitung simulasi kredit motor dengan mudah, cepat, dan akurat.
              Gratis tanpa perlu registrasi.
            </p>
          </div>

          <div style={styles.linkGroups}>
            <div style={styles.linkGroup}>
              <h4 style={styles.groupTitle}>Navigasi</h4>
              <Link href="/" style={styles.link}>Beranda</Link>
              <Link href="/#produk" style={styles.link}>Semua Produk</Link>
              <Link href="/tentang" style={styles.link}>Tentang Kami</Link>
              <Link href="/kontak" style={styles.link}>Kontak</Link>
            </div>
            <div style={styles.linkGroup}>
              <h4 style={styles.groupTitle}>Legal</h4>
              <Link href="/privacy-policy" style={styles.link}>Privacy Policy</Link>
              <Link href="/disclaimer" style={styles.link}>Disclaimer</Link>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div style={styles.bottom}>
          <p style={styles.copy}>
            © {year} SimulasiKreditmu.my.id — Dibuat dengan ❤️ di Indonesia
          </p>
          <p style={styles.disclaimer}>
            Hasil simulasi bersifat estimasi dan bukan penawaran kredit resmi.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: "var(--text)",
    color: "white",
    paddingTop: 56,
    paddingBottom: 32,
    marginTop: 80,
  },
  inner: {},
  top: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: 48,
    marginBottom: 40,
    alignItems: "start",
  },
  brand: {
    maxWidth: 320,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },
  logoText: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    color: "white",
    letterSpacing: "-0.02em",
  },
  logoDot: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    color: "var(--accent)",
    letterSpacing: "-0.02em",
  },
  tagline: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 14,
    lineHeight: 1.7,
  },
  linkGroups: {
    display: "flex",
    gap: 48,
  },
  linkGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  groupTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 4,
  },
  link: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 14,
    textDecoration: "none",
    transition: "color 0.15s ease",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 24,
    flexWrap: "wrap",
    gap: 8,
  },
  copy: {
    fontSize: 13,
    color: "rgba(255,255,255,0.4)",
  },
  disclaimer: {
    fontSize: 12,
    color: "rgba(255,255,255,0.3)",
    fontStyle: "italic",
  },
};
