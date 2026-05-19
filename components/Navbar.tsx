"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logoIcon">⚡</span>
          <span className="logoText">SimulasiKreditmu</span>
          <span className="logoDot">.my.id</span>
        </Link>

        {/* Links */}
        <div className={`links ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Beranda</Link>
          <Link href="/#produk" onClick={() => setMenuOpen(false)}>Produk</Link>
          <Link href="/tentang" onClick={() => setMenuOpen(false)}>Tentang</Link>
          <Link href="/kontak" onClick={() => setMenuOpen(false)}>Kontak</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* STYLE */}
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(247, 246, 242, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .logo {
          display: flex;
          gap: 6px;
          text-decoration: none;
          align-items: center;
        }

        .logoText {
          font-weight: 800;
        }

        .logoDot {
          color: var(--accent);
          font-weight: 800;
        }

        .links {
          display: flex;
          gap: 8px;
        }

        .links a {
          padding: 8px 14px;
          border-radius: 8px;
          color: var(--text-muted);
          text-decoration: none;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hamburger span {
          width: 22px;
          height: 2px;
          background: var(--text);
          transition: 0.2s;
        }

        /* ANIMASI X */
        .hamburger.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .links {
            position: absolute;
            top: 64px;
            right: 0;
            left: 0;
            flex-direction: column;
            background: rgba(247, 246, 242, 0.98);
            backdrop-filter: blur(10px);
            padding: 12px;
            display: none;
          }

          .links.open {
            display: flex;
          }
        }
      `}</style>
    </header>
  );

}

