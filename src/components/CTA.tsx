"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AVAILABLE_SERVICES = [
  "AI & Automation",
  "Custom Software",
  "Web & Mobile",
  "UI/UX Design",
  "Digital Marketing",
  "SEO & Performance",
];

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const bgImgRef = useRef<HTMLImageElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    selectedServices: ["AI & Automation", "Custom Software"],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Title character slide-up stagger animation on scroll
      const titleEl = container.querySelector<HTMLElement>(".sec-cta__title");
      if (titleEl && !titleEl.dataset.splitDone) {
        const text = titleEl.textContent || "";
        titleEl.innerHTML = "";
        const words = text.split(" ");

        words.forEach((word, wordIdx) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "word-wrap";

          word.split("").forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.className = "char";
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
          });

          titleEl.appendChild(wordSpan);
          if (wordIdx < words.length - 1) {
            titleEl.appendChild(document.createTextNode(" "));
          }
        });

        titleEl.dataset.splitDone = "true";

        const chars = titleEl.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.02,
            scrollTrigger: {
              trigger: titleEl,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Parallax scroll on background image
      if (bgImgRef.current) {
        gsap.to(bgImgRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 3. Button hover roll-up & star rotate
      const buttons = container.querySelectorAll<HTMLElement>(".main-button");
      buttons.forEach((btn) => {
        const texts = btn.querySelectorAll<HTMLElement>(".button-text");
        const icon = btn.querySelector<HTMLElement>(".button-icon");

        const onMouseEnter = () => {
          if (texts.length >= 2) {
            gsap.to(texts, { yPercent: -100, duration: 0.35, ease: "power2.out" });
          }
          if (icon) {
            gsap.to(icon, { rotate: 45, duration: 0.35, ease: "power2.out" });
          }
        };

        const onMouseLeave = () => {
          if (texts.length) {
            gsap.to(texts, { yPercent: 0, duration: 0.35, ease: "power2.out" });
          }
          if (icon) {
            gsap.to(icon, { rotate: 0, duration: 0.35, ease: "power2.out" });
          }
        };

        btn.addEventListener("mouseenter", onMouseEnter);
        btn.addEventListener("mouseleave", onMouseLeave);
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        selectedServices: ["AI & Automation", "Custom Software"],
        message: "",
      });
    }, 4500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  return (
    <section ref={containerRef} className="site-section sec-cta section_cta" id="contact">
      <div className="padding-global is-tiny">
        <div className="cta_component">
          {/* Background image with vertical parallax scroll */}
          <div className="cta_bg_wrap">
            <img
              ref={bgImgRef}
              src="/images/showreel.png"
              alt="Algofort Project Showcase"
              className="cta_bg_img"
            />
            <div className="cta_bg_overlay"></div>
          </div>

          <div className="padding-global" style={{ width: "100%" }}>
            <div className="cta_content">
              {/* Left Column Header */}
              <div className="cta_left_column">
                <div className="sec-cta__badge">
                  <div className="subtitle-component">
                    <img
                      loading="lazy"
                      src="/images/star-icon.svg"
                      alt="Asterisk"
                      className="asterisk"
                    />
                    <div className="subtitle-block">
                      <div className="subtitle-row">
                        <div className="subtitle">Get Started — </div>
                        <div className="subtitle">Get Started — </div>
                        <div className="subtitle">Get Started — </div>
                      </div>
                      <div className="subtitle-row">
                        <div className="subtitle">Get Started — </div>
                        <div className="subtitle">Get Started — </div>
                        <div className="subtitle">Get Started — </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-align-left">
                  <h2 className="heading-style-h1 sec-cta__title">
                    Start your project with Algofort®
                  </h2>
                  <p className="cta-description">
                    Let us collaborate to build something extraordinary and elevate
                    your business with intelligent technology and exceptional design.
                  </p>
                </div>

                <div className="spacer-large"></div>

                <div>
                  <a
                    href="tel:+12135555555"
                    className="main-button alternate-button w-inline-block"
                  >
                    <div className="main-button-block">
                      <div className="button-text alternate-text">+1 (213) 555-5555</div>
                      <div className="button-text alternate-text">+1 (213) 555-5555</div>
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

              {/* Right Column: Glassmorphism Contact Form */}
              <div className="cta_right_column">
                <div className="glass-container">
                  <div className="glass-filter"></div>
                  <div className="glass-overlay"></div>
                  <div className="glass-specular"></div>
                  <div className="glass-content">
                    {submitted ? (
                      <div style={{ textAlign: "center", padding: "3rem 1.5rem", color: "#ffffff", width: "100%" }}>
                        <div
                          style={{
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "50%",
                            backgroundColor: "rgba(244, 122, 31, 0.15)",
                            border: "1px solid #f47a1f",
                            color: "#f47a1f",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 1rem auto",
                            fontSize: "1.5rem",
                          }}
                        >
                          ✓
                        </div>
                        <h3
                          style={{
                            fontSize: "1.75rem",
                            fontWeight: "700",
                            fontFamily: "'Clash Display', sans-serif",
                            marginBottom: "0.5rem",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          Message Sent!
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                          Thank you for reaching out. An Algofort strategist will get back to you within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form className="cta_form" onSubmit={handleSubmit}>
                        {/* Row 1: Full Name & Phone Number */}
                        <div className="form_row two-cols">
                          <div className="form_group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              placeholder="Enter Your Full Name"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form_group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter Your Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        {/* Row 2: Email Address */}
                        <div className="form_group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* Row 3: Service Pill Buttons */}
                        <div className="form_group">
                          <label>Services Required</label>
                          <div className="service-pills-row">
                            {AVAILABLE_SERVICES.map((service) => {
                              const isSelected = formData.selectedServices.includes(service);
                              return (
                                <button
                                  type="button"
                                  key={service}
                                  className={`service-pill-btn ${isSelected ? "active" : ""}`}
                                  onClick={() => toggleService(service)}
                                >
                                  {service}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Row 4: Message */}
                        <div className="form_group">
                          <label htmlFor="message">Project Details</label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project, timeline, and requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>

                        {/* Row 5: Submit Button */}
                        <button
                          type="submit"
                          className="main-button alternate-button w-inline-block"
                          style={{
                            border: "none",
                            cursor: "pointer",
                            alignSelf: "flex-start",
                            marginTop: "0.5rem",
                          }}
                        >
                          <div className="main-button-block">
                            <div className="button-text alternate-text">Submit Request</div>
                            <div className="button-text alternate-text">Submit Request</div>
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
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
