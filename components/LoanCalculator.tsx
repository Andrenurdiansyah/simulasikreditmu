"use client";

import { useState, useMemo } from "react";
import { Product } from "@/lib/products";

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

interface LoanCalculatorProps {
  product: Product;
}

export default function LoanCalculator({ product }: LoanCalculatorProps) {
  const [dp, setDp] = useState(product.dp);
  const [tenor, setTenor] = useState(
  product.tenor.includes(36)
    ? 36
    : product.tenor[product.tenor.length - 1]
);
  const [bunga, setBunga] = useState(14); // persen per tahun flat

  const result = useMemo(() => {
    const pokok = product.price - dp;
    const totalBunga = pokok * (bunga / 100) * (tenor / 12);
    const totalBayar = pokok + totalBunga;
    const cicilan = totalBayar / tenor;
    const dpPercent = (dp / product.price) * 100;

    return { pokok, totalBunga, totalBayar, cicilan, dpPercent };
  }, [dp, tenor, bunga, product.price]);

  const dpMin = Math.round(product.price * 0.1); // min 10%
  const dpMax = Math.round(product.price * 0.6); // max 60%

  return (
    <div style={styles.wrapper}>
      {/* Controls */}
      <div style={styles.controls}>
        <h2 style={styles.title}>Kalkulator Kredit</h2>
        <p style={styles.subtitle}>
          Sesuaikan DP, tenor, dan bunga sesuai kebutuhanmu.
        </p>

        {/* DP Slider */}
        <div style={styles.field}>
          <div style={styles.fieldHeader}>
            <label style={styles.label}>Uang Muka (DP)</label>
            <span style={styles.value}>{formatRupiah(dp)}</span>
          </div>
          <input
            type="range"
            min={dpMin}
            max={dpMax}
            step={500000}
            value={dp}
            onChange={(e) => setDp(Number(e.target.value))}
            style={styles.slider}
          />
          <div style={styles.sliderHints}>
            <span>{formatRupiah(dpMin)}</span>
            <span style={{ color: "var(--text-muted)", fontSize: 12 }}>
              {result.dpPercent.toFixed(0)}% dari harga
            </span>
            <span>{formatRupiah(dpMax)}</span>
          </div>
        </div>

        {/* Tenor */}
        <div style={styles.field}>
          <label style={styles.label}>Tenor (Jangka Waktu)</label>
          <div style={styles.tenorGrid}>
            {product.tenor.map((t) => (
              <button
                key={t}
                onClick={() => setTenor(t)}
                style={{
                  ...styles.tenorBtn,
                  ...(tenor === t ? styles.tenorBtnActive : {}),
                }}
              >
                {t} Bln
              </button>
            ))}
          </div>
        </div>

        {/* Bunga */}
        <div style={styles.field}>
          <div style={styles.fieldHeader}>
            <label style={styles.label}>Suku Bunga (Flat/Tahun)</label>
            <span style={styles.value}>{bunga}%</span>
          </div>
          <input
            type="range"
            min={8}
            max={24}
            step={0.5}
            value={bunga}
            onChange={(e) => setBunga(Number(e.target.value))}
            style={styles.slider}
          />
          <div style={styles.sliderHints}>
            <span>8%</span>
            <span>24%</span>
          </div>
        </div>
      </div>

      {/* Result */}
      <div style={styles.result}>
        <div style={styles.resultHeader}>
          <span style={styles.resultLabel}>Estimasi Cicilan per Bulan</span>
          <div style={styles.cicilanBig}>
            {formatRupiah(Math.round(result.cicilan))}
          </div>
          <span style={styles.resultNote}>
            selama {tenor} bulan · bunga {bunga}% per tahun
          </span>
        </div>

        <div style={styles.breakdown}>
          <div style={styles.breakdownRow}>
            <span style={styles.breakdownLabel}>Harga Motor</span>
            <span style={styles.breakdownVal}>
              {formatRupiah(product.price)}
            </span>
          </div>
          <div style={styles.breakdownRow}>
            <span style={styles.breakdownLabel}>Uang Muka (DP)</span>
            <span style={styles.breakdownVal}>{formatRupiah(dp)}</span>
          </div>
          <div style={styles.breakdownRow}>
            <span style={styles.breakdownLabel}>Pokok Hutang</span>
            <span style={styles.breakdownVal}>
              {formatRupiah(result.pokok)}
            </span>
          </div>
          <div style={styles.breakdownRow}>
            <span style={styles.breakdownLabel}>
              Total Bunga ({tenor} bln)
            </span>
            <span style={styles.breakdownVal}>
              {formatRupiah(Math.round(result.totalBunga))}
            </span>
          </div>
          <hr style={styles.sep} />
          <div style={{ ...styles.breakdownRow, ...styles.breakdownTotal }}>
            <span>Total Pembayaran</span>
            <span>{formatRupiah(Math.round(result.totalBayar + dp))}</span>
          </div>
        </div>

        <p style={styles.disclaimer}>
          ⚠️ Hasil ini adalah estimasi simulasi. Angka aktual dapat berbeda
          tergantung kebijakan leasing dan kondisi kredit Anda.
        </p>
      </div>
    </div>
  );
}

            
  const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: 24,
    alignItems: "start",
    width: "100%",
  },

  controls: {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    padding: 24,
    width: "100%",
    minWidth: 0,
  },

  title: {
    fontFamily: "var(--font-display)",
    fontSize: 22,
    marginBottom: 8,
  },

  subtitle: {
    color: "var(--text-muted)",
    fontSize: 14,
    marginBottom: 28,
  },

  field: {
    marginBottom: 28,
    minWidth: 0,
  },

  fieldHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  label: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 14,
    color: "var(--text)",
  },

  value: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 15,
    color: "var(--accent)",
    textAlign: "right",
    wordBreak: "break-word",
  },

  slider: {
    width: "100%",
    accentColor: "var(--accent)",
    cursor: "pointer",
  },

  sliderHints: {
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
    flexWrap: "wrap",
    fontSize: 11,
    color: "var(--text-light)",
    marginTop: 6,
  },

  tenorGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },

  tenorBtn: {
    padding: "8px 14px",
    borderRadius: "var(--radius-sm)",
    border: "1.5px solid var(--border)",
    background: "var(--bg)",
    flex: "1 0 auto",
  },

  tenorBtnActive: {
    background: "var(--accent)",
    border: "1.5px solid var(--accent)",
    color: "white",
  },

  result: {
    background: "var(--text)",
    borderRadius: "var(--radius)",
    padding: 24,
    color: "white",
    width: "100%",
    minWidth: 0,
  },

  resultHeader: {
    textAlign: "center",
    marginBottom: 32,
    paddingBottom: 28,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  resultLabel: {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontWeight: 600,
    display: "block",
    marginBottom: 10,
  },

  cicilanBig: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(24px,6vw,36px)",
    fontWeight: 800,
    color: "var(--accent)",
    marginBottom: 8,
    wordBreak: "break-word",
  },

  resultNote: {
    fontSize: 13,
    color: "rgba(255,255,255,0.4)",
  },

  breakdown: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginBottom: 24,
    minWidth: 0,
  },

  breakdownRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    fontSize: 14,
    color: "rgba(255,255,255,0.65)",
  },

  breakdownLabel: {
    flex: 1,
  },

  breakdownVal: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    color: "white",
    textAlign: "right",
    wordBreak: "break-word",
  },

  sep: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  breakdownTotal: {
    fontWeight: 700,
    fontSize: 16,
    color: "white",
  },

  disclaimer: {
    fontSize: 12,
    color: "rgba(255,255,255,0.3)",
    lineHeight: 1.6,
  },
};
