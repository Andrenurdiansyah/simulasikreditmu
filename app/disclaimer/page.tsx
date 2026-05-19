import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer SimulasiKreditmu.my.id — hasil simulasi bersifat estimasi dan bukan penawaran kredit resmi.",
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={styles.wrapper}>
      <h1 style={styles.title}>Disclaimer</h1>
      <p style={styles.updated}>Terakhir diperbarui: 1 Januari 2026</p>

      <div style={styles.alert}>
        ⚠️ Seluruh hasil simulasi di website ini bersifat <strong>estimasi</strong> dan{" "}
        <strong>bukan merupakan penawaran kredit resmi</strong>.
      </div>

      <div style={styles.body}>
        <section style={styles.section}>
          <h2 style={styles.h2}>Akurasi Informasi</h2>
          <p>
            SimulasiKreditmu.my.id berusaha menyajikan informasi harga motor, DP, dan
            perhitungan cicilan secara akurat. Namun demikian, harga OTR motor,
            suku bunga, dan kebijakan kredit dapat berubah sewaktu-waktu sesuai
            dengan kebijakan produsen, dealer, dan perusahaan pembiayaan.
          </p>
          <p>
            Kami tidak bertanggung jawab atas perbedaan antara hasil simulasi di
            website ini dengan penawaran yang kamu terima dari dealer atau
            leasing.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Bukan Nasihat Keuangan</h2>
          <p>
            Konten di SimulasiKreditmu.my.id bersifat informatif dan edukatif. Website
            ini tidak memberikan nasihat keuangan, investasi, atau kredit secara
            resmi. Sebelum mengambil keputusan pembelian motor secara kredit,
            kami sangat menyarankan kamu untuk:
          </p>
          <ul style={styles.list}>
            <li>Berkonsultasi langsung dengan dealer resmi.</li>
            <li>Membandingkan penawaran dari berbagai perusahaan leasing.</li>
            <li>Membaca syarat dan ketentuan kredit dengan teliti.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Tautan Pihak Ketiga</h2>
          <p>
            Website ini mungkin menampilkan iklan dari Google AdSense atau tautan
            ke pihak ketiga. Kami tidak bertanggung jawab atas konten, kebijakan
            privasi, atau praktik dari situs pihak ketiga tersebut.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Perubahan Konten</h2>
          <p>
            Kami berhak mengubah, menambah, atau menghapus konten di website ini
            kapan saja tanpa pemberitahuan sebelumnya.
          </p>
        </section>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: 720,
    paddingTop: 64,
    paddingBottom: 96,
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 8,
    letterSpacing: "-0.02em",
  },
  updated: {
    color: "var(--text-muted)",
    fontSize: 14,
    marginBottom: 32,
  },
  alert: {
    background: "#fff8f0",
    border: "1.5px solid #f5cba7",
    borderRadius: "var(--radius-sm)",
    padding: "16px 20px",
    fontSize: 14,
    color: "#7d4a1a",
    lineHeight: 1.6,
    marginBottom: 48,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    color: "var(--text-muted)",
    lineHeight: 1.8,
    fontSize: 15,
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontSize: 19,
    fontWeight: 700,
    color: "var(--text)",
  },
  list: {
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
  },
};
