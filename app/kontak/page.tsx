import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description:
    "Hubungi tim SimulasiKreditmu.my.id untuk pertanyaan, masukan, atau kerjasama bisnis.",
};

export default function KontakPage() {
  return (
    <div className="container" style={styles.wrapper}>
      <div style={styles.header}>
        <span className="badge badge-accent">Kontak</span>
        <h1 style={styles.title}>Ada yang Bisa Kami Bantu?</h1>
        <p style={styles.lead}>
          Kirimkan pertanyaan, saran, atau permintaan kerjasama melalui email di
          bawah ini. Kami akan merespons dalam 1–2 hari kerja.
        </p>
      </div>

      <div style={styles.cards}>
        <div style={styles.card}>
          <div style={styles.icon}>📧</div>
          <h3 style={styles.cardTitle}>Email</h3>
          <p style={styles.cardDesc}>Untuk pertanyaan umum dan dukungan teknis.</p>
          <a href="mailto:halo@simulasikredit.id" style={styles.cardLink}>
            simulasikreditmu@gmail.com
          </a>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🤝</div>
          <h3 style={styles.cardTitle}>Kerjasama & Iklan</h3>
          <p style={styles.cardDesc}>
            Tertarik untuk beriklan atau berkolaborasi dengan kami?
          </p>
          <a href="mailto:ads@simulasikredit.id" style={styles.cardLink}>
            simulasikreditmu@gmail.com
          </a>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🐛</div>
          <h3 style={styles.cardTitle}>Laporkan Bug</h3>
          <p style={styles.cardDesc}>
            Temukan kesalahan di website kami? Bantu kami memperbaikinya.
          </p>
          <a href="mailto:bug@simulasikredit.id" style={styles.cardLink}>
            simulasikreditmu@gmail.com
          </a>
        </div>
      </div>

      <div style={styles.note}>
        <p>
          <strong>Catatan:</strong> Kami bukan dealer motor atau perusahaan
          leasing. Untuk pertanyaan terkait kredit motor secara resmi, silakan
          hubungi dealer atau leasing terpercaya di kota Anda.
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: 860,
    paddingTop: 64,
    paddingBottom: 96,
  },
  header: {
    marginBottom: 56,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(30px, 4vw, 44px)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  lead: {
    fontSize: 17,
    color: "var(--text-muted)",
    lineHeight: 1.7,
    maxWidth: 560,
  },
    cards: {
    display: "grid",
    // ⬇️ UBAH BARIS INI ⬇️
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
    gap: 20,
    marginBottom: 40,
  },
    
  card: {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    padding: 24,
  },
  icon: {
    fontSize: 32,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: "var(--text-muted)",
    lineHeight: 1.6,
    marginBottom: 12,
  },
  cardLink: {
    color: "var(--accent)",
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
  },
  note: {
    background: "var(--bg-muted)",
    borderRadius: "var(--radius-sm)",
    padding: "16px 20px",
    fontSize: 14,
    color: "var(--text-muted)",
    lineHeight: 1.7,
    borderLeft: "3px solid var(--accent)",
  },
};
