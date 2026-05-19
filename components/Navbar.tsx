"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <nav style={styles.nav} className="container">
        <Link href="/" style={styles.logo}>
          <span style={styles.logoIcon}>⚡</span>
          <span style={styles.logoText}>SimulasiKreditmu</span>
          <span style={styles.logoDot}>.my.id</span>
        </Link>

        <div style={{ ...styles.links, ...(menuOpen ? styles.linksOpen : {}) }}>
          <Link href="/" style={styles.link} onClick={() => setMenuOpen(false)}>
            Beranda
          </Link>
          <Link href="/#produk" style={styles.link} onClick={() => setMenuOpen(false)}>
            Produk
          </Link>
          <Link href="/tentang" style={styles.link} onClick={() => setMenuOpen(false)}>
            Tentang
          </Link>
          <Link href="/kontak" style={styles.link} onClick={() => setMenuOpen(false)}>
            Kontak
          </Link>
        </div>

        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ ...styles.bar, ...(menuOpen ? styles.barTop : {}) }} />
          <span style={{ ...styles.bar, ...(menuOpen ? styles.barMid : {}) }} />
          <span style={{ ...styles.bar, ...(menuOpen ? styles.barBot : {}) }} />
        </button>
      </nav>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(247, 246, 242, 0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--border)",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    gap: 32,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    textDecoration: "none",
    flexShrink: 0,
  },
  logoIcon: {
    fontSize: 20,
  },
  logoText: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    color: "var(--text)",
    letterSpacing: "-0.02em",
  },
  logoDot: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 18,
    color: "var(--accent)",
    letterSpacing: "-0.02em",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  linksOpen: {},
  link: {
    padding: "8px 14px",
    borderRadius: "var(--radius-sm)",
    fontSize: 15,
    fontWeight: 500,
    color: "var(--text-muted)",
    transition: "color 0.15s ease, background 0.15s ease",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 8,
  },
  bar: {
    display: "block",
    width: 22,
    height: 2,
    background: "var(--text)",
    borderRadius: 2,
    transition: "all 0.2s ease",
  },
  barTop: { transform: "translateY(7px) rotate(45deg)" },
  barMid: { opacity: 0 },
  barBot: { transform: "translateY(-7px) rotate(-45deg)" },
};
