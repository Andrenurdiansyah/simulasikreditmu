import Link from "next/link";
import { Product } from "@/lib/products";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";



function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function estimateCicilan(price: number, dp: number, tenor: number): number {
  const pokok = price - dp;
  const bungaPerTahun = 0.14; // estimasi 14% flat per tahun
  const bunga = pokok * bungaPerTahun * (tenor / 12);
  return Math.round((pokok + bunga) / tenor);
}

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {

const articleSlug = product.slug;


  const defaultTenor = product.tenor.includes(36)
  ? 36
  : product.tenor[Math.floor(product.tenor.length / 2)];
  const cicilan = estimateCicilan(product.price, product.dp, defaultTenor);

  return (
    <Link href={`/simulasi-kredit/${product.slug}`} style={styles.wrapper}>
      <article style={styles.card}>
        {/* Image placeholder / category badge */}
      <div style={styles.imageArea}>
  {product.image ? (
    <Image
      src={product.image}
      alt={product.name}
      fill
      style={{
        objectFit: "contain",
        padding: "12px",
      }}
    />
  ) : (
    <div style={styles.placeholder}>
      <span style={styles.placeholderText}>
        {product.name}
      </span>
    </div>
  )}

  <span className="badge badge-muted" style={styles.brandBadge}>
    {product.brand}
  </span>
</div>

        <div style={styles.body}>
          <span className="badge badge-accent" style={{ marginBottom: 8 }}>
            {product.category}
          </span>
          <h3 style={styles.name}>{product.name}</h3>
          <p style={styles.desc}>{product.description.slice(0, 90)}…</p>

          
{/* ARTICLE LINK */}
          <Link
  href={`/artikel/${articleSlug}`}
  style={{
    fontSize: 12,
    color: "var(--accent)",
    fontWeight: 600,
    display: "inline-block",
    marginBottom: 12,
  }}
>
  Baca artikel kredit →
</Link>

          <hr style={styles.sep} />

          <div style={styles.priceRow}>
            <div>
              <div style={styles.priceLabel}>Harga OTR</div>
              <div style={styles.price}>{formatRupiah(product.price)}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={styles.priceLabel}>Cicilan mulai</div>
              <div style={{ ...styles.price, color: "var(--accent)" }}>
                {formatRupiah(cicilan)}<span style={styles.perBulan}>/bln</span>
              </div>
            </div>
          </div>

          <div style={styles.footer}>
            <span style={styles.dp}>DP: {formatRupiah(product.dp)}</span>
            <span style={styles.cta}>Hitung Sekarang →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    textDecoration: "none",
    display: "block",
  },
card: {
  background: "var(--bg-card)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "var(--border)",
  borderRadius: "var(--radius)",
  overflow: "hidden",
  transition: "box-shadow 0.2s ease, transform 0.2s ease",
  cursor: "pointer",
},
  imageArea: {
    position: "relative",
    background: "var(--bg-muted)",
    height: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  brandBadge: {
    position: "absolute",
    top: 12,
    left: 12,
  },
  body: {
    padding: "20px 20px 16px",
  },
  name: {
    fontFamily: "var(--font-display)",
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
    color: "var(--text)",
  },
  desc: {
    fontSize: 13,
    color: "var(--text-muted)",
    lineHeight: 1.6,
    marginBottom: 16,
  },
  sep:{ 
    borderTopWidth: "1px", 
    borderTopStyle: "solid", 
    borderTopColor: "#eee",
    borderRight: "none", 
    borderBottom: "none", 
    borderLeft: "none" 
  },
  placeholder: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
},

placeholderText: {
  fontSize: 22,
  fontWeight: 700,
  color: "var(--text-muted)",
  textAlign: "center",
  padding: "0 16px",
},

  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 11,
    color: "var(--text-light)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: 2,
    fontWeight: 600,
  },
  price: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 17,
    color: "var(--text)",
  },
  perBulan: {
    fontSize: 12,
    fontWeight: 500,
    color: "var(--text-muted)",
  },
 footer: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 12,
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "var(--border)",
},
  dp: {
    fontSize: 13,
    color: "var(--text-muted)",
  },
  cta: {
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "var(--font-display)",
    color: "var(--accent)",
  },
};
