# SimulasiKreditmu.my.id

Website simulasi kredit motor yang SEO-friendly dan siap monetisasi.

## 🚀 Setup

```bash
npx create-next-app@latest simulasi_kredit --typescript --tailwind --eslint --app
cd simulasi_kredit

# Salin semua file yang sudah di-generate ke dalam project
# Lalu install dependencies
npm install

# Jalankan development server
npm run dev
```

## 📁 Struktur Project

```
simulasi_kredit/
├── app/
│   ├── layout.tsx          # Root layout + metadata global
│   ├── page.tsx            # Homepage dengan product grid
│   ├── globals.css         # Design system & CSS variables
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── simulasi-kredit/
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic product page + kalkulator
│   ├── tentang/page.tsx
│   ├── kontak/page.tsx
│   ├── privacy-policy/page.tsx
│   └── disclaimer/page.tsx
│
├── components/
│   ├── Navbar.tsx          # Sticky navbar dengan mobile menu
│   ├── Footer.tsx          # Footer dengan links
│   ├── LoanCalculator.tsx  # Kalkulator interaktif (client component)
│   └── Card.tsx            # Product card dengan estimasi cicilan
│
└── lib/
    └── products.ts         # Database produk motor
```

## ➕ Cara Tambah Produk Baru

Buka `lib/products.ts` dan tambahkan object baru ke dalam array `productList`:

```typescript
{
  slug: "honda-vario-160",        // URL: /simulasi-kredit/honda-vario-160
  name: "Honda Vario 160",
  brand: "Honda",
  category: "Maxi Skuter",
  price: 35000000,                // Harga OTR dalam Rupiah
  dp: 7000000,                    // DP default
  tenor: [12, 18, 24, 36, 48],   // Tenor yang tersedia (bulan)
  description: "Deskripsi singkat motor ini...",
  specs: {                         // Opsional
    "Mesin": "160 cc, SOHC",
    "Transmisi": "Otomatis CVT",
  },
}
```

Halaman produk akan otomatis dibuat di `/simulasi-kredit/honda-vario-160`.

## 💰 Monetisasi (Google AdSense)

Tambahkan script AdSense di `app/layout.tsx`:

```tsx
// Di dalam <head> di layout.tsx
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossOrigin="anonymous"
/>
```

Lalu buat komponen `AdBanner.tsx` dan tempatkan di halaman produk atau homepage.

## 🔍 SEO

- Setiap halaman produk punya metadata unik (`generateMetadata`)
- JSON-LD structured data di halaman produk
- `sitemap.ts` otomatis generate sitemap dari semua produk
- `robots.ts` sudah dikonfigurasi
- Ganti `https://simulasikredit.id` di `sitemap.ts` dan `layout.tsx` dengan domain aslimu

## 🌐 Deploy

```bash
# Deploy ke Vercel (recommended)
npx vercel

# Atau build untuk production
npm run build
npm start
```
