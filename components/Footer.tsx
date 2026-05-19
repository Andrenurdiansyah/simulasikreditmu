import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>
        {/* TOP */}
        <div style={styles.top} className="footer-top">
          {/* BRAND */}
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

          {/* LINKS */}
          <div style={styles.linkGroups} className="footer-linkGroups">
            <div style={styles.linkGroup} className="footer-linkGroup">
              <h4 style={styles.groupTitle}>Navigasi</h4>
              <Link href="/" style={styles.link}>Beranda</Link>
              <Link href="/#produk" style={styles.link}>Semua Produk</Link>
              <Link href="/tentang" style={styles.link}>Tentang Kami</Link>
              <Link href="/kontak" style={styles.link}>Kontak</Link>
            </div>

            <div style={styles.linkGroup} className="footer-linkGroup">
              <h4 style={styles.groupTitle}>Legal</h4>
              <Link href="/privacy-policy" style={styles.link}>Privacy Policy</Link>
              <Link href="/disclaimer" style={styles.link}>Disclaimer</Link>
            </div>
          </div>
        </div>

        <hr style={styles.divider} />

        {/* BOTTOM */}
        <div style={styles.bottom} className="footer-bottom">
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
    overflowX: "hidden", // 🔥 anti scroll kanan
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
    maxWidth: 340,
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
  },

  logoDot: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    color: "var(--accent)",
  },

  tagline: {
    color: "rgba(255,255,255,0.6)",
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
    minWidth: 140, // 🔥 penting biar gak compress aneh
  },

  groupTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 4,
  },

  link: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    textDecoration: "none",
  },

  divider: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    marginBottom: 24,
  },

  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },

  copy: {
    fontSize: 13,
    color: "rgba(255,255,255,0.45)",
  },

  disclaimer: {
    fontSize: 12,
    color: "rgba(255,255,255,0.35)",
    fontStyle: "italic",
  },
};