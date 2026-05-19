import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "SimulasiKreditmu.my.id adalah kalkulator kredit motor gratis yang membantu kamu merencanakan pembelian motor dengan lebih cermat.",
};

export default function TentangPage() {
  return (
    <div className="container" style={styles.wrapper}>
      <div style={styles.header}>
        <span className="badge badge-accent">Tentang Kami</span>
        <h1 style={styles.title}>Kami Bantu Kamu Hitung Lebih Cerdas</h1>
        <p style={styles.lead}>
          SimulasiKreditmu.my.id hadir untuk memudahkan siapa saja menghitung estimasi
          kredit motor—gratis, cepat, dan tanpa perlu registrasi.
        </p>
      </div>

      <div style={styles.body}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Apa itu SimulasiKredit.my.id?</h2>
          <p>
            SimulasiKreditmu.my.id adalah platform kalkulator simulasi kredit motor
            yang memungkinkan kamu untuk menghitung estimasi cicilan bulanan
            berdasarkan harga motor, uang muka (DP), tenor, dan suku bunga yang
            kamu tentukan sendiri.
          </p>
          <p>
            Kami percaya bahwa keputusan finansial yang baik dimulai dari
            informasi yang jelas. Karena itu, semua fitur di sini 100% gratis
            dan tidak perlu login.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Bagaimana Cara Kerjanya?</h2>
          <p>
            Kalkulator kami menggunakan metode bunga flat yang umum dipakai oleh
            leasing di Indonesia. Kamu memasukkan DP yang ingin dibayarkan,
            memilih tenor (jangka waktu cicilan), dan menyesuaikan suku bunga
            sesuai penawaran yang kamu dapatkan dari dealer atau leasing.
          </p>
          <p>
            Hasilnya bersifat estimasi—angka aktual bisa berbeda tergantung
            kebijakan perusahaan pembiayaan masing-masing. Kami menyarankan
            untuk selalu konfirmasi ke dealer resmi sebelum mengambil keputusan.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Mengapa Kami Membuat Ini?</h2>
          <p>
            Banyak orang Indonesia yang ingin membeli motor tapi bingung
            menghitung cicilan. Angka di brosur sering tidak transparan, dan
            perbandingan antar leasing memakan waktu. SimulasiKredit.id hadir
            sebagai alat bantu yang sederhana namun powerful.
          </p>
        </section>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: 760,
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
    lineHeight: 1.15,
  },
  lead: {
    fontSize: 18,
    color: "var(--text-muted)",
    lineHeight: 1.7,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 48,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  sectionTitle: {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    fontWeight: 700,
  },
};
