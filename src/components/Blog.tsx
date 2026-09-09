"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import SectionSubtitle from "@/components/SectionSubtitle";

export interface BlogPost {
  id: string;
  title: string;
  url: string;
  image: string;
  author: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Deep Learning vs Machine Learning: What’s the Difference and Why It Matters",
    url: "https://www.algofort.com/deep-learning-vs-machine-learning-whats-the-difference-and-why-it-matters/",
    image: "https://www.algofort.com/wp-content/uploads/2025/08/360_F_1364145473_TFOuszBMnqPGy0Xf7rWlAx74IVVjXrhH.jpg",
    author: "BY admin",
  },
  {
    id: "blog-2",
    title: "How to Check If Your Content Is Truly Unique",
    url: "https://www.algofort.com/how-to-check-if-your-content-is-truly-unique/",
    image: "https://www.algofort.com/wp-content/uploads/2025/08/content-originality-scaled-1-767x558.jpg",
    author: "BY admin",
  },
  {
    id: "blog-3",
    title: "The Double-Edged Sword of AI and ML in IT: Opportunities vs. Obstacles",
    url: "https://www.algofort.com/the-double-edged-sword-of-ai-and-ml-in-it-opportunities-vs-obstacles/",
    image: "https://www.algofort.com/wp-content/uploads/2025/08/AI_in_Business-767x558.jpg",
    author: "BY admin",
  },
  {
    id: "blog-4",
    title: "Understanding Animal Predictions: Protecting Biodiversity in a Changing World",
    url: "https://www.algofort.com/understanding-animal-predictions-protecting-biodiversity-in-a-changing-world/",
    image: "https://www.algofort.com/wp-content/uploads/2025/08/applsci-12-10653-g002-550.jpg",
    author: "BY admin",
  },
  {
    id: "blog-5",
    title: "Content Strategy",
    url: "https://www.algofort.com/content-strategy/",
    image: "https://www.algofort.com/wp-content/uploads/2025/03/1_E0AtatuxAJ1saRXZaF8BlQ.jpg",
    author: "BY admin",
  },
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [todayDate, setTodayDate] = useState("09 Sep 2026");

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const isWheelLockedRef = useRef<boolean>(false);

  // Format today's current date
  useEffect(() => {
    try {
      const now = new Date();
      const formatted = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      setTodayDate(formatted);
    } catch {
      // Fallback
    }
  }, []);

  // Update visible card count on resize
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w <= 767) {
        setVisibleCount(1);
      } else if (w <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, BLOG_POSTS.length - visibleCount);

  // Clamp currentIndex if maxIndex changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartXRef.current - touchEndX;
    const diffY = touchStartYRef.current - touchEndY;

    // Only swipe if horizontal movement is dominant and > 40px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Smooth scroll effect: 1 slide on scroll over the slider
  useEffect(() => {
    const sliderEl = sliderRef.current;
    if (!sliderEl) return;

    const onWheel = (e: WheelEvent) => {
      // Check if scroll has strong horizontal or vertical component while hovering slider
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const absDelta = isHorizontalScroll ? Math.abs(e.deltaX) : Math.abs(e.deltaY);

      // Only handle if intentional movement
      if (absDelta < 25) return;

      if (isWheelLockedRef.current) {
        // Prevent default only if horizontal trackpad scrolling
        if (isHorizontalScroll) e.preventDefault();
        return;
      }

      if (isHorizontalScroll) {
        e.preventDefault();
        isWheelLockedRef.current = true;
        if (e.deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        setTimeout(() => {
          isWheelLockedRef.current = false;
        }, 500);
      }
    };

    sliderEl.addEventListener("wheel", onWheel, { passive: false });
    return () => sliderEl.removeEventListener("wheel", onWheel);
  }, [handleNext, handlePrev]);

  // Calculate slide displacement
  // Each slide takes (100% - totalGaps) / visibleCount + gap
  const getTransform = () => {
    if (typeof window === "undefined") return "translate3d(0, 0, 0)";
    const gap = 28;
    // Calculate percentage offset:
    // With N visible items, 1 slide advance = (100% + gap) / visibleCount
    return `translateX(calc(-${currentIndex} * ((100% + ${gap}px) / ${visibleCount})))`;
  };

  return (
    <section className="algo-blog-section" id="blog">
      <div className="padding-global">
        <div className="container-large">
          {/* Section Header: Subtitle + Heading on Left, Arrows on Right */}
          <div className="algo-blog-header">
            <div className="algo-blog-header__title-block">
              <div className="algo-blog-header__subtitle">
                <SectionSubtitle text="Latest News" isDark={false} />
              </div>
              <h2 className="heading-style-h2">
                Insights
                <br />
                <span className="text-color-secondary">Blogs</span>
              </h2>
            </div>

            {/* Navigation Arrows matching Review section */}
            <div className="algo-blog-header__arrows">
              <button
                type="button"
                className="slide-left-arrow"
                aria-label="Previous blog post"
                onClick={handlePrev}
              >
                <div className="slide-arrow-block">
                  <div className="slide-arrow-clip">
                    <img
                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6402bde2a2620cf1be35a_left-arrow.svg"
                      loading="lazy"
                      className="slide-arrow left-01"
                      alt="Left Arrow"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6402bde2a2620cf1be35a_left-arrow.svg"
                      loading="lazy"
                      className="slide-arrow left-02"
                      alt="Left Arrow"
                    />
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="slide-right-arrow"
                aria-label="Next blog post"
                onClick={handleNext}
              >
                <div className="slide-arrow-block">
                  <div className="slide-arrow-clip">
                    <img
                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6402f1f3545375a09424b_right-arrow.svg"
                      loading="lazy"
                      className="slide-arrow right-01"
                      alt="Right Arrow"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6402f1f3545375a09424b_right-arrow.svg"
                      loading="lazy"
                      className="slide-arrow right-02"
                      alt="Right Arrow"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Blogs Slider */}
          <div
            className="algo-blog-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="algo-blog-track"
              ref={trackRef}
              style={{
                transform: getTransform(),
              }}
            >
              {BLOG_POSTS.map((post) => (
                <div className="algo-blog-slide" key={post.id}>
                  <article className="algo-blog-card">
                    <div className="algo-blog-card__inner">
                      {/* Featured Image */}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="algo-blog-card__image-wrap"
                        aria-label={post.title}
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
                          className="algo-blog-card__image"
                        />
                        <div className="algo-blog-card__image-overlay" />
                      </a>

                      {/* Meta Information: Current Date + Author */}
                      <div className="algo-blog-card__meta">
                        <div className="algo-blog-card__date-pill">
                          <svg
                            className="algo-blog-card__date-icon"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                          </svg>
                          <span>{todayDate}</span>
                        </div>
                        <span className="algo-blog-card__author">{post.author}</span>
                      </div>

                      {/* Title: Separate link so only direct hover turns orange */}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="algo-blog-card__title-link"
                      >
                        <h3 className="algo-blog-card__title" title={post.title}>
                          {post.title}
                        </h3>
                      </a>

                      {/* Footer: Read Article link with dual-arrow rolling animation */}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="algo-blog-card__footer-link"
                      >
                        <span className="algo-blog-card__read-text">Read Article</span>
                        <div className="algo-blog-card__action-btn">
                          <div className="algo-blog-arrow-clip">
                            <svg
                              className="algo-blog-action-arrow arrow-01"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 12h14M12 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              className="algo-blog-action-arrow arrow-02"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M5 12h14M12 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </a>

                      {/* Accessible Full-Card Link */}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="algo-blog-card__link"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {post.title}
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
