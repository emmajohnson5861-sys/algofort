"use client";

import React from "react";

export default function Hero() {
  return (
    <>
      {/*  HERO SECTION WITH VIDEO BACKGROUND  */}
        <section className="section-banner fixed" id="home">
            <div className="fixed-banner">
                {/*  Background Video Embed (Fixed)  */}
                <div className="hero-video-bg-wrap">
                    <video autoPlay loop muted playsInline className="hero-bg-video">
                        <source src="https://framerusercontent.com/assets/RUtAYCareHPaATO1hhu8z1W7dHs.webm"
                            type="video/mp4" />
                    </video>
                    <div className="hero-video-overlay"></div>
                </div>

                <div className="banner-info">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="hero-content-wrapper">
                            <div className="overflow-hidden">
                                <div className="hero-text-wrapper">
                                    <div className="hero-left-text" style={{"opacity":"0"}}>
                                        <p className="hero-text">We engineer custom software, intelligent AI solutions, and
                                            high-performance digital platforms that accelerate growth and drive digital
                                            transformation.</p>
                                    </div>
                                    <div className="hero-right-text" style={{"opacity":"0"}}>
                                        <p className="hero-text">AI &amp; Automation</p>
                                        <p className="hero-text">Custom Software</p>
                                        <p className="hero-text">Mobile &amp; Web</p>
                                        <p className="hero-text">Digital Transformation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <div className="hero-bottom-content">
                                    <div className="hero-big-text-wrapper">
                                        <h1 className="hero-big-text">algofort®</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
