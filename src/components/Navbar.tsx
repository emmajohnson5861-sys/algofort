"use client";

import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", number: "(01)" },
  { label: "About", href: "#about", number: "(02)" },
  { label: "Services", href: "#service", number: "(03)" },
  { label: "Process", href: "#process", number: "(04)" },
  { label: "Projects", href: "#portfolio", number: "(05)" },
  { label: "Contact", href: "#contact", number: "(06)" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR (STRICTLY NON-STICKY ACROSS ALL VIEWPORTS) */}
      <header className="navbar w-nav" role="banner">
        <div className="navbar-main">
          <div className="container w-container">
            <div className="navbar-content-flex">
              {/* Brand Logo */}
              <div className="brand-logo-block">
                <a
                  aria-current="page"
                  className="brand-logo-link w-nav-brand"
                  href="/"
                  aria-label="Algofort Home"
                >
                  <img
                    alt="Algofort Logo"
                    className="brand-logo"
                    loading="eager"
                    src="/images/logo-white-01.png"
                  />
                </a>
              </div>

              {/* Desktop Navigation Links */}
              <nav className="nav-menu desktop-nav" role="navigation">
                <div className="nav-menu-flex-down">
                  {NAV_ITEMS.slice(0, 5).map((item) => (
                    <a
                      key={item.label}
                      className="nav-menu-link"
                      href={item.href}
                    >
                      <div className="nav-menu-dot"></div>
                      <span className="nav-rollup-wrap">
                        <span className="nav-rollup-text _1">{item.label}</span>
                        <span className="nav-rollup-text _2">{item.label}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </nav>

              {/* Right Side: Desktop Contact Button & Animated Mobile Hamburger */}
              <div className="navbar-button-humber-wrapper">
                {/* Desktop Pill Button */}
                <div className="button-wrap nav">
                  <a className="nav-button w-inline-block" href="#contact">
                    <div className="nav-button-dot"></div>
                    <div className="nav-button-text-wrap">
                      <div className="nav-button-text">Contact</div>
                      <div className="nav-button-text">Contact</div>
                    </div>
                  </a>
                </div>

                {/* Animated Pure-CSS Hamburger Button for Tablet & Mobile */}
                <button
                  type="button"
                  className={`custom-hamburger-btn ${menuOpen ? "is-active" : ""}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={menuOpen}
                >
                  <span className="hamburger-line line-1"></span>
                  <span className="hamburger-line line-2"></span>
                  <span className="hamburger-line line-3"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU POPUP DRAWER & BACKDROP OVERLAY */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <div
        className={`mobile-menu-drawer ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                className="mobile-nav-link"
                href={item.href}
                onClick={handleLinkClick}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-number">{item.number}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <a
            href="#contact"
            className="mobile-menu-btn"
            onClick={handleLinkClick}
          >
            <span>Let's Talk</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          </a>

          <div className="mobile-menu-contact-info">
            <a href="tel:+12135555555">+1 (213) 555-5555</a>
            <a href="mailto:hello@algofort.com">hello@algofort.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
