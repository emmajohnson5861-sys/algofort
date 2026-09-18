"use client";

import React from "react";

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const NAVIGATION_LINKS: NavLink[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SERVICES", href: "#service" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
];

const SERVICES_LINKS: NavLink[] = [
  { label: "AI & AUTOMATION", href: "#service" },
  { label: "CUSTOM SOFTWARE", href: "#service" },
  { label: "WEB & MOBILE", href: "#service" },
  { label: "UI/UX DESIGN", href: "#service" },
  { label: "DIGITAL MARKETING", href: "#projects" },
  { label: "SEO & PERFORMANCE", href: "#projects" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/algofort",
    icon: (
      <svg className="footer-social-icon" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/algofort",
    icon: (
      <svg className="footer-social-icon" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/algofort",
    icon: (
      <svg className="footer-social-icon" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/algofort",
    icon: (
      <svg className="footer-social-icon" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const LEGAL_LINKS = [
  { label: "Style Guide", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Instructions", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="footer">
      <div className="padding-global">
        <div className="container-large">
          {/* Logo Above Footer Grid */}
          <div className="footer-top-brand">
            <a href="/" className="footer-brand-link" aria-label="Algofort Home">
              <img
                src="/images/logo-black-01.png"
                alt="Algofort Logo"
                className="footer-brand-logo"
                loading="lazy"
              />
            </a>
          </div>

          {/* Main Footer 4-Column Grid */}
          <div className="footer-main-grid">
            {/* Column 1: Social Buttons, Address, Phone, Email */}
            <div className="footer-col-contact">
              {/* Social Media Buttons */}
              <div className="footer-social-row">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={`Follow Algofort on ${item.name}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              {/* Physical Office Address */}
              <address className="footer-address">
                <p>412 Melrose Avenue, Suite 210,</p>
                <p>Los Angeles, CA 90036, USA</p>
              </address>

              {/* Direct Phone & Email with Roll-Up Animation and Diagonal Rolling Arrow */}
              <div className="footer-contact-links">
                <a href="tel:+12135555555" className="footer-contact-link">
                  <span className="footer-rollup-wrap">
                    <span className="footer-rollup-text _1">+1 (213) 555-5555</span>
                    <span className="footer-rollup-text _2">+1 (213) 555-5555</span>
                  </span>
                  <span className="footer-contact-arrow-wrap">
                    <svg className="footer-contact-arrow arrow-1" viewBox="0 0 24 24">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg className="footer-contact-arrow arrow-2" viewBox="0 0 24 24">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
                <a href="mailto:hello@algofort.com" className="footer-contact-link">
                  <span className="footer-rollup-wrap">
                    <span className="footer-rollup-text _1">HELLO@ALGOFORT.COM</span>
                    <span className="footer-rollup-text _2">HELLO@ALGOFORT.COM</span>
                  </span>
                  <span className="footer-contact-arrow-wrap">
                    <svg className="footer-contact-arrow arrow-1" viewBox="0 0 24 24">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg className="footer-contact-arrow arrow-2" viewBox="0 0 24 24">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Middle Columns: Navigation & Services */}
            <div className="footer-columns-group">
              {/* Column 2: Navigation Links with Roll-Up Animation */}
              <div className="footer-col-nav">
                <h3 className="footer-column-heading">Navigation</h3>
                <ul className="footer-links-list">
                  {NAVIGATION_LINKS.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="footer-nav-link">
                        <span className="footer-rollup-wrap">
                          <span className="footer-rollup-text _1">{item.label}</span>
                          <span className="footer-rollup-text _2">{item.label}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Services Links with Roll-Up Animation */}
              <div className="footer-col-services">
                <h3 className="footer-column-heading">Services</h3>
                <ul className="footer-links-list">
                  {SERVICES_LINKS.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="footer-nav-link">
                        <span className="footer-rollup-wrap">
                          <span className="footer-rollup-text _1">{item.label}</span>
                          <span className="footer-rollup-text _2">{item.label}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Tagline Marquee at Top, Let's Talk Button at Bottom */}
            <div className="footer-col-action">
              {/* Subtitle Marquee Ticker */}
              <div className="subtitle-component footer-subtitle-marquee">
                <img
                  loading="lazy"
                  src="/images/star-icon.svg"
                  alt="Asterisk - Algofort"
                  className="asterisk"
                />
                <div className="subtitle-block">
                  <div className="subtitle-row">
                    <div className="subtitle">Driven by Design — </div>
                    <div className="subtitle">Driven by Code — </div>
                    <div className="subtitle">Driven by Design — </div>
                    <div className="subtitle">Driven by Code — </div>
                  </div>
                  <div className="subtitle-row">
                    <div className="subtitle">Driven by Design — </div>
                    <div className="subtitle">Driven by Code — </div>
                    <div className="subtitle">Driven by Design — </div>
                    <div className="subtitle">Driven by Code — </div>
                  </div>
                </div>
              </div>

              {/* Signature Pill Button at Bottom Right */}
              <div className="footer-action-btn-wrap">
                <a href="#contact" className="main-button w-inline-block">
                  <div className="main-button-block">
                    <div className="button-text">Let's Talk</div>
                    <div className="button-text">Let's Talk</div>
                  </div>
                  <svg
                    className="button-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Bottom Bar with Top-Rounded Corners */}
      <div className="footer-bottom-bar">
        <div className="padding-global">
          <div className="container-large">
            <div className="footer-bottom-flex">
              <p className="footer-copyright">
                © {currentYear} <strong>Algofort®</strong> | All Rights Reserved
              </p>
              <nav className="footer-legal-links" aria-label="Footer Legal Links">
                {LEGAL_LINKS.map((item) => (
                  <a key={item.label} href={item.href} className="footer-legal-link">
                    <span className="footer-rollup-wrap">
                      <span className="footer-rollup-text _1">{item.label}</span>
                      <span className="footer-rollup-text _2">{item.label}</span>
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
