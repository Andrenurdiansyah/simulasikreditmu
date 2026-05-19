export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  dp: number;
  tenor: number[]; // available tenor in months
  image: string;
  description: string;
  specs?: Record<string, string>;
};

const productList: Product[] = [
  {
    slug: "honda-beat",
    name: "Honda Beat",
    brand: "Honda",
    category: "Skuter Matik",
    price: 19155000,
    dp: 700000,
    tenor: [12, 18, 24, 36],
    image: "/images/products/beat.webp",
    description:
      "Honda Beat adalah skuter matik paling populer di Indonesia, dikenal dengan konsumsi bahan bakar yang irit dan desain yang stylish.",
    specs: {
      Mesin: "108.2 cc, 4 langkah, SOHC",
      "Tenaga Maksimal": "9 PS @ 7.500 rpm",
      Transmisi: "Otomatis CVT",
      "Berat Kosong": "93 kg",
    },
  },
  {
    slug: "honda-vario-125",
    name: "Honda Vario 125",
    brand: "Honda",
    category: "Skuter Matik",
    price: 28000000,
    dp: 2000000,
    tenor: [12, 18, 24, 36, 48],
    image: "/images/products/vario-125.webp",
    description:
      "Honda Vario 125 menawarkan perpaduan sempurna antara gaya modern dan performa andal, dilengkapi teknologi eSP untuk efisiensi bahan bakar terbaik.",
    specs: {
      Mesin: "124.9 cc, 4 langkah, SOHC",
      "Tenaga Maksimal": "11.3 PS @ 8.500 rpm",
      Transmisi: "Otomatis CVT",
      "Berat Kosong": "110 kg",
    },
  },
{
  slug: "honda-scoopy",
  name: "Honda Scoopy",
  brand: "Honda",
  category: "Skuter Matik",
  price: 23200000,
  dp: 2000000,
  tenor: [12, 18, 24, 36],

  image: "/images/products/scoopy.webp",

  description:
    "Honda Scoopy hadir dengan desain retro modern yang khas, dilengkapi teknologi eSP dan konsumsi bahan bakar yang efisien untuk kebutuhan mobilitas harian.",

  specs: {
    Mesin: "109.5 cc, 4 langkah, SOHC, eSP",
    "Tenaga Maksimal": "9 PS @ 7.500 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "94 kg",
  },
},
{
  slug: "honda-vario-160",
  name: "Honda Vario 160",
  brand: "Honda",
  category: "Skuter Matik",
  price: 29500000,
  dp: 3000000,
  tenor: [12, 18, 24, 36, 48],

  image: "/images/products/vario-160.webp",

  description:
    "Honda Vario 160 hadir dengan desain sporty modern dan mesin eSP+ 160cc yang bertenaga, memberikan performa responsif sekaligus efisiensi bahan bakar untuk penggunaan sehari-hari.",

  specs: {
    Mesin: "156.9 cc, 4 langkah, SOHC, eSP+",
    "Tenaga Maksimal": "15.4 PS @ 8.500 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "117 kg",
  },
},
  {
    slug: "honda-pcx-160",
    name: "Honda PCX 160",
    brand: "Honda",
    category: "Maxi Skuter",
    price: 39500000,
    dp: 3000000,
    tenor: [12, 18, 24, 36, 48],
    image: "/images/products/pcx.webp",
    description:
      "Honda PCX 160 tampil elegan dan premium dengan mesin eSP+ 160cc yang bertenaga, cocok untuk perjalanan jauh maupun dalam kota.",
    specs: {
      Mesin: "160.5 cc, 4 langkah, SOHC, eSP+",
      "Tenaga Maksimal": "16.1 PS @ 8.500 rpm",
      Transmisi: "Otomatis CVT",
      "Berat Kosong": "130 kg",
    },
  },
{
  slug: "honda-stylo-160",
  name: "Honda Stylo 160",
  brand: "Honda",
  category: "Skuter Matik",
  price: 29500000,
  dp: 2500000,
  tenor: [12, 18, 24, 36, 48],

  image: "/images/products/stylo.webp",

  description:
    "Honda Stylo 160 menghadirkan desain retro modern premium dengan mesin 160cc eSP+, menggabungkan tampilan stylish dan performa yang bertenaga untuk penggunaan harian maupun perjalanan jauh.",

  specs: {
    Mesin: "156.9 cc, 4 langkah, SOHC, eSP+",
    "Tenaga Maksimal": "15.4 PS @ 8.500 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "118 kg",
  },
},
  // Yamaha
{
  slug: "yamaha-nmax-turbo",
  name: "Yamaha NMAX Turbo",
  brand: "Yamaha",
  category: "Maxi Skuter",
  price: 37300000,
  dp: 3000000,
  tenor: [12, 18, 24, 36, 48],
  image: "/images/products/placeholder-bike.webp",

  description:
    "Yamaha NMAX Turbo hadir dengan teknologi YECVT terbaru yang memberikan akselerasi lebih responsif serta fitur modern untuk perjalanan harian maupun touring.",

  specs: {
    Mesin: "155 cc, SOHC, VVA",
    "Tenaga Maksimal": "15.4 PS @ 8.000 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "135 kg",
  },
},

{
  slug: "yamaha-aerox-alpha",
  name: "Yamaha Aerox Alpha",
  brand: "Yamaha",
  category: "Skuter Sport",
  price: 32500000,
  dp: 2500000,
  tenor: [12, 18, 24, 36],
  image: "/images/products/placeholder-bike.webp",

  description:
    "Yamaha Aerox Alpha memiliki desain sporty agresif dengan mesin Blue Core VVA yang bertenaga dan cocok untuk penggunaan harian.",

  specs: {
    Mesin: "155 cc, SOHC, VVA",
    "Tenaga Maksimal": "15.4 PS @ 8.000 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "125 kg",
  },
},

{
  slug: "yamaha-fazzio",
  name: "Yamaha Fazzio Hybrid",
  brand: "Yamaha",
  category: "Skuter Matik",
  price: 24200000,
  dp: 2000000,
  tenor: [12, 18, 24, 36],
  image: "/images/products/placeholder-bike.webp",

  description:
    "Yamaha Fazzio Hybrid menawarkan desain retro modern dengan teknologi hybrid ringan untuk penggunaan sehari-hari.",

  specs: {
    Mesin: "125 cc, Blue Core Hybrid",
    "Tenaga Maksimal": "8.4 PS @ 6.500 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "95 kg",
  },
},

// Suzuki
{
  slug: "suzuki-avenis",
  name: "Suzuki Avenis 125",
  brand: "Suzuki",
  category: "Skuter Matik",
  price: 30500000,
  dp: 2500000,
  tenor: [12, 18, 24, 36],
  image: "/images/products/placeholder-bike.webp",

  description:
    "Suzuki Avenis 125 menawarkan desain sporty dengan mesin irit serta bagasi luas untuk penggunaan harian.",

  specs: {
    Mesin: "124.3 cc, SOHC",
    "Tenaga Maksimal": "8.7 PS @ 6.750 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "107 kg",
  },
},

{
  slug: "suzuki-burgman-street",
  name: "Suzuki Burgman Street 125EX",
  brand: "Suzuki",
  category: "Maxi Skuter",
  price: 26500000,
  dp: 2000000,
  tenor: [12, 18, 24, 36],
  image: "/images/products/placeholder-bike.webp",

  description:
    "Suzuki Burgman Street 125EX hadir dengan gaya maxi scooter yang nyaman dan cocok untuk mobilitas perkotaan.",

  specs: {
    Mesin: "124 cc, SOHC",
    "Tenaga Maksimal": "8.6 PS @ 6.500 rpm",
    Transmisi: "Otomatis CVT",
    "Berat Kosong": "112 kg",
  },
},

{
  slug: "suzuki-gsx-r150",
  name: "Suzuki GSX-R150",
  brand: "Suzuki",
  category: "Motor Sport",
  price: 37000000,
  dp: 3000000,
  tenor: [12, 18, 24, 36, 48],
  image: "/images/products/placeholder-bike.webp",

  description:
    "Suzuki GSX-R150 merupakan motor sport fairing ringan dengan performa tinggi dan desain agresif.",

  specs: {
    Mesin: "147.3 cc, DOHC",
    "Tenaga Maksimal": "19.1 PS @ 10.500 rpm",
    Transmisi: "Manual 6 Percepatan",
    "Berat Kosong": "131 kg",
  },
},
];

// Keyed by slug for easy lookup
const products: Record<string, Product> = productList.reduce(
  (acc, product) => {
    acc[product.slug] = product;
    return acc;
  },
  {} as Record<string, Product>
);

export default products;

export function getAllProducts(): Product[] {
  return productList;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products[slug];
}
