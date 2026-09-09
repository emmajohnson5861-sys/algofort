"use client";

import React, { useEffect } from "react";
import SectionSubtitle from "@/components/SectionSubtitle";

interface ProjectItem {
  number: string;
  title: string;
  tags: string[];
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    title: "Content Marketing",
    tags: ["Strategy", "Storytelling", "Engagement"],
    image: "/images/content_marketing.webp",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    tags: ["Reach", "Engage", "Grow"],
    image: "/images/social_media_marketing.webp",
  },
  {
    number: "03",
    title: "Pay Per Click",
    tags: ["Target", "Convert", "Optimize"],
    image: "/images/ppc.webp",
  },
  {
    number: "04",
    title: "SEO",
    tags: ["Rank", "Optimize", "Grow"],
    image: "/images/seo.webp",
  },
];

export default function FeaturedProjects() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: any;

    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        setTimeout(initAnimations, 100);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // 1. Subtitle Fade-in
        const portfolioSubtitle = document.querySelector("#portfolio .algo-section-subtitle");
        if (portfolioSubtitle) {
          gsap.fromTo(
            portfolioSubtitle,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: portfolioSubtitle, start: "top 85%" },
            }
          );
        }

        // 2. SplitText Typography Reveal on Header Description
        const descEl = document.querySelector("#portfolio .algo-portfolio__desc");
        if (descEl) {
          (descEl as HTMLElement).style.visibility = "visible";
          const SplitText = (window as any).SplitText;

          if (typeof SplitText !== "undefined") {
            const split = new SplitText(descEl, { type: "words,chars" });
            gsap.fromTo(
              split.chars,
              { opacity: 0.3 },
              {
                opacity: 1,
                stagger: 0.02,
                duration: 0.4,
                ease: "power1.out",
                scrollTrigger: {
                  trigger: descEl,
                  start: "top 75%",
                  end: "bottom 50%",
                  scrub: 1,
                },
              }
            );
          } else {
            gsap.fromTo(
              descEl,
              { opacity: 0.3 },
              {
                opacity: 1,
                duration: 1,
                scrollTrigger: { trigger: descEl, start: "top 75%" },
              }
            );
          }
        }

        // 3. Parallax Background Image Movement on Stacking Cards
        const frames = gsap.utils.toArray("#portfolio .project-frame");
        frames.forEach((frame: any) => {
          const img = frame.querySelector(".parallax-image");
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -5, scale: 1.12 },
              {
                yPercent: 5,
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          }
        });

        // Refresh ScrollTrigger once everything is mounted
        ScrollTrigger.refresh();
      });
    };

    initAnimations();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="portfolio" className="algo-portfolio">
      <div className="algo-portfolio__container">
        <div className="algo-portfolio__header">
          <div className="algo-portfolio__badge-col">
            <SectionSubtitle text="Digital Out Reach" isDark={true} />
          </div>
          <div className="algo-portfolio__desc-col">
            <div className="algo-portfolio__desc medium-content-text">
              Expand your online reach and grow your business with Algofort’s digital marketing services, designed to strengthen your visibility and online presence.
            </div>
          </div>
        </div>
      </div>

      <div className="algo-portfolio__track">
        {PROJECTS.map((project) => (
          <div
            key={project.number}
            className="algo-portfolio-frame project-frame"
          >
            <div className="algo-portfolio-frame__spacer">
              <div className="algo-portfolio-frame__sticky">
                {/* Parallax Background Image */}
                <img
                  alt={`${project.title} background`}
                  className="algo-portfolio-frame__bg-img parallax-image"
                  decoding="async"
                  loading="lazy"
                  src={project.image}
                />
                <div className="algo-portfolio-frame__overlay" />

                {/* Centered Project Card Content */}
                <div className="algo-portfolio-card">
                  <div className="algo-portfolio-card__inner">
                    {/* Dual Side Numbers */}
                    <div className="algo-portfolio-card__numbers-row" aria-hidden="true">
                      <span className="algo-portfolio-card__num">{project.number}</span>
                      <span className="algo-portfolio-card__num">{project.number}</span>
                    </div>

                    {/* SEO-Friendly Project Title (H2 instead of H1) */}
                    <h2 className="algo-portfolio-card__title">
                      {project.title}
                    </h2>

                    {/* Thumbnail Image Card */}
                    <div className="algo-portfolio-card__thumb-wrap">
                      <img
                        alt={project.title}
                        className="algo-portfolio-card__thumb"
                        decoding="async"
                        loading="lazy"
                        src={project.image}
                      />
                    </div>

                    {/* Tags List */}
                    <div className="algo-portfolio-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="algo-portfolio-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
