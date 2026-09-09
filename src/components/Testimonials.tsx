"use client";

import React, { useState, useRef, useEffect } from "react";
import SectionSubtitle from "@/components/SectionSubtitle";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const touchStartXRef = useRef<number>(0);

  const totalSlides = 4;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Video play interrupted/prevented:", err));
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const renderStars = () => (
    <div className="star-rating-block">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="star-rating w-embed">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
          </svg>
        </div>
      ))}
    </div>
  );

  return (
    <section className="section-home-testimonial" id="testimonials">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            {/* Top Grid: Marquee Subtitle + Heading + Unusually Button */}
            <div className="w-layout-grid top-grid">
              <div id="w-node-_8fc13946-0f34-d6b8-4415-322e47e02e1e-fc8c1483" className="max-width-xlarge">
                <div style={{ marginBottom: "2rem" }}>
                  <SectionSubtitle text="Testimonials" isDark={false} />
                </div>
                <h2 className="heading-style-h2">
                  Shared
                  <br />
                  ‍<span className="text-color-secondary">Success</span>
                </h2>
              </div>
              <div id="w-node-_8fc13946-0f34-d6b8-4415-322e47e02e2c-fc8c1483" className="button-item">
                <a href="#contact" className="main-button w-inline-block">
                  <div className="main-button-block">
                    <div className="button-text">Get in touch</div>
                    <div className="button-text">Get in touch</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f287b26ff74f4a3003bac1_white-star-icon.svg"
                    alt="Star Icon"
                    className="button-icon"
                  />
                </a>
              </div>
            </div>

            <div className="spacer-xlarge"></div>

            {/* 3-Card Proportional Grid: Left Video Card (1fr) + Right Slider (2fr with 2 cards = 1fr each) */}
            <div className="w-layout-grid testimonial-component-grid">
              {/* Left Video Card */}
              <div id="w-node-adfbd2c9-448a-5701-7552-0b67d1e30708-fc8c1483" className="testimonial-video-wrap">
                <div
                  data-poster-url="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f6261d35d72cece9ee76e1_testimonial-bg-video-poster-00001.jpg"
                  data-video-urls="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f6261d35d72cece9ee76e1_testimonial-bg-video-transcode.mp4,https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f6261d35d72cece9ee76e1_testimonial-bg-video-transcode.webm"
                  data-autoplay="false"
                  data-loop="false"
                  data-wf-ignore="true"
                  className="background-video testimonial w-background-video w-background-video-atom"
                >
                  <video
                    ref={videoRef}
                    id="c86b455d-6dab-d1b0-9fa6-e25a80074668-video"
                    style={{
                      backgroundImage:
                        "url('https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f6261d35d72cece9ee76e1_testimonial-bg-video-poster-00001.jpg')",
                    }}
                    muted
                    loop
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f6261d35d72cece9ee76e1_testimonial-bg-video-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890%2F68f6261d35d72cece9ee76e1_testimonial-bg-video-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                  <div className="play-button-wrap">
                    <div id="w-node-_0563e6fb-67d9-3750-68d1-9c1566f113fb-fc8c1483" className="play-button-block">
                      <div aria-live="polite">
                        <button
                          type="button"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                          className={`play-pause-button ${isPlaying ? "playing" : ""}`}
                          onClick={toggleVideo}
                        >
                          <span className="pause-icon">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6022af993a6b2191db3ed10c/628299f8aa233b83918e24fd_Pause.svg"
                              alt="Pause video"
                            />
                          </span>
                          <span className="play-icon">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6022af993a6b2191db3ed10c/628298b20ae0236682d4b87f_Play-24.svg"
                              alt="Play video"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div id="w-node-_0b29bb6d-4d50-4519-39d4-6ea4520c3356-fc8c1483" className="client-block">
                      <div className="client-content-wrap">
                        <div className="client-info-block">
                          <div className="text-size-small text-weight-semibold">Emma Waltz</div>
                          <div className="rate-block">
                            <div className="text-size-small">5.0</div>
                            {renderStars()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-overlay"></div>
                </div>
              </div>

              {/* Right Testimonial Slider: 4 Slides (8 Cards Total, 2 Cards Per Slide On Desktop) */}
              <div id="w-node-cd3bbb33-54b4-d7f4-ee66-c44802d958c8-fc8c1483" className="testimonial-component">
                <div className="testimonial-slider w-slider">
                  <div
                    className="slider-mask w-slider-mask"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      className="slide-track"
                      style={{
                        transform: `translateX(-${currentSlide * 25}%)`,
                      }}
                    >
                      {/* Slide 1: Emily Carter & James Lawson */}
                      <div className="slide-item w-slide" aria-label="1 of 4" aria-hidden={currentSlide !== 0}>
                        <div className="testimonial-inner-content">
                          {/* Card 1: Emily Carter */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Results-Driven
                                      <br />
                                      Approach...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        AlgoFort took our ambiguous product vision and turned it into an enterprise-grade
                                        AI solution ahead of schedule. Their technical precision is unmatched.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f638db45244aa80e38b0f6_client-01.jpg"
                                          alt="Emily Carter"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">Emily Carter</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Card 2: James Lawson */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Innovative
                                      <br />
                                      Solutions...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        Working with AlgoFort felt like an extension of our internal team. They solved
                                        complex cloud scaling bottlenecks with elegance and speed.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f638db45244aa80e38b0fc_client-04.jpg"
                                          alt="James Lawson"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">James Lawson</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Slide 2: Sarah Mitchell & Daniel Roberts */}
                      <div className="slide-item w-slide" aria-label="2 of 4" aria-hidden={currentSlide !== 1}>
                        <div className="testimonial-inner-content">
                          {/* Card 3: Sarah Mitchell */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Outstanding
                                      <br />
                                      Creativity...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        The engineering standards at AlgoFort are truly world-class. From day one, their
                                        code was rock solid, performant, and perfectly documented.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f638db45244aa80e38b102_client-03.jpg"
                                          alt="Sarah Mitchell"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">Sarah Mitchell</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Card 4: Daniel Roberts */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Reliable
                                      <br />
                                      Partner...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        They redesigned our core architecture and modernized our entire digital presence.
                                        Our conversion rates doubled in just three months post-launch.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f638db45244aa80e38b0f0_client-02.jpg"
                                          alt="Daniel Roberts"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">Daniel Roberts</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Slide 3: Marcus Vance & Elena Rostova */}
                      <div className="slide-item w-slide" aria-label="3 of 4" aria-hidden={currentSlide !== 2}>
                        <div className="testimonial-inner-content">
                          {/* Card 5: Marcus Vance */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Scalable
                                      <br />
                                      Architecture...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        Their engineering prowess allowed us to scale from 10k to 500k active users without
                                        a single hiccup. Truly exceptional digital craftsmanship.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
                                          alt="Marcus Vance"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">Marcus Vance</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Card 6: Elena Rostova */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Flawless
                                      <br />
                                      Execution...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        AlgoFort transformed our legacy systems into an agile modern AI platform. Delivery
                                        was on time, communication was seamless, and ROI was immediate.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
                                          alt="Elena Rostova"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">Elena Rostova</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Slide 4: David Zhao & Sophia Reynolds */}
                      <div className="slide-item w-slide" aria-label="4 of 4" aria-hidden={currentSlide !== 3}>
                        <div className="testimonial-inner-content">
                          {/* Card 7: David Zhao */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Enterprise-Grade
                                      <br />
                                      Innovation...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        AlgoFort architected a high-throughput machine learning pipeline that reduced our
                                        data latency by 70%. Their technical depth in enterprise AI is truly unmatched.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
                                          alt="David Zhao"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">David Zhao</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Card 8: Sophia Reynolds */}
                          <div className="testimonial-content-item">
                            <div className="testimonial-content-block">
                              <div className="testimonial-container">
                                <div className="w-layout-grid testimonial-content-grid">
                                  <div className="testimonial-item">
                                    <img
                                      src="https://cdn.prod.website-files.com/68ee74b7102caefef6ce7890/68f6421e9a54068a2916ed03_left-quote-icon.svg"
                                      loading="lazy"
                                      alt="Quote"
                                      className="quote-icon"
                                    />
                                    <div className="testimonial-title">
                                      Unmatched Delivery
                                      <br />
                                      &amp; Vision...
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="max-width-large">
                                      <p className="testimonial-text">
                                        From initial system architecture to global cloud deployment, AlgoFort delivered
                                        every milestone with absolute precision. A world-class software engineering partner.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="testimonial-item">
                                    <div className="client-content-wrap">
                                      <div className="client-picture-block">
                                        <img
                                          sizes="100vw"
                                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80"
                                          alt="Sophia Reynolds"
                                          loading="lazy"
                                          className="client-picture"
                                        />
                                      </div>
                                      <div className="client-info-block">
                                        <div className="text-size-small text-weight-semibold">Sophia Reynolds</div>
                                        <div className="rate-block">
                                          <div className="text-size-small">5.0</div>
                                          {renderStars()}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows: Left (←) on Left, Right (→) on Right */}
                  <div className="testimonial-arrows-wrap">
                    <button
                      type="button"
                      className="slide-left-arrow"
                      aria-label="Previous slide"
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
                      aria-label="Next slide"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
