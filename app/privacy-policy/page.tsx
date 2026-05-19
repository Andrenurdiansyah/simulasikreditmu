import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kebijakan privasi SimulasiKreditmu.my.id terkait pengumpulan dan penggunaan data pengguna.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={styles.wrapper}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.updated}>Terakhir diperbarui: 1 Januari 2025</p>

      <div style={styles.body}>
        <section style={styles.section}>
          <h2 style={styles.h2}>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            SimulasiKreditmu.my.id tidak mengumpulkan data pribadi pengguna secara
            langsung. Website ini berjalan sepenuhnya di sisi klien (browser
            kamu) dan tidak menyimpan input apapun ke server kami.
          </p>
          <p>
            Namun, seperti kebanyakan website, kami menggunakan layanan pihak
            ketiga (seperti Google Analytics dan Google AdSense) yang mungkin
            mengumpulkan data anonim seperti:
          </p>
          <ul style={styles.list}>
            <li>Alamat IP (yang di-anonimkan)</li>
            <li>Jenis browser dan perangkat</li>
            <li>Halaman yang dikunjungi</li>
            <li>Waktu kunjungan</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>2. Penggunaan Cookie</h2>
          <p>
            Website ini menggunakan cookie yang ditempatkan oleh pihak ketiga,
            termasuk Google, untuk menampilkan iklan yang relevan dan menganalisis
            trafik website. Kamu dapat mengatur preferensi cookie melalui pengaturan
            browser masing-masing.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>3. Iklan (Google AdSense)</h2>
          <p>
            Kami menggunakan Google AdSense untuk menampilkan iklan di website
            ini. Google menggunakan cookie DART untuk menayangkan iklan
            berdasarkan kunjungan sebelumnya ke situs kami dan situs lain di
            internet. Kamu dapat menolak penggunaan cookie DART melalui halaman
            kebijakan iklan dan konten Google.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>4. Keamanan Data</h2>
          <p>
            Seluruh simulasi kredit dilakukan langsung di browser kamu dan tidak
            dikirim ke server manapun. Data keuangan yang kamu masukkan (DP,
            tenor, dll.) bersifat privat dan tidak kami simpan.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>5. Perubahan Kebijakan</h2>
          <p>
            Kami berhak mengubah kebijakan privasi ini sewaktu-waktu. Perubahan
            akan diinformasikan melalui halaman ini dengan memperbarui tanggal
            "Terakhir diperbarui" di atas.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>6. Kontak</h2>
          <p>
            Jika kamu memiliki pertanyaan tentang kebijakan privasi ini, silakan
            hubungi kami di{" "}
            <a href="mailto:halo@simulasikredit.id" style={styles.link}>
              simulasikreditmu@gmail.com
            </a>
            .
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
  link: {
    color: "var(--accent)",
  },
};
