"use client";

import React from "react";
import SectionSubtitle from "@/components/SectionSubtitle";

export default function WhyUs() {
  return (
    <>
      {/*  WHY US SECTION  */}
        <section className="section why-us" id="why-us">
            <div className="w-layout-blockcontainer container w-container">
                <div className="why-us-wrapper">
                    <div className="why-us-left-box">
                        <SectionSubtitle text="Why Us" isDark={false} />
                    </div>
                    <div className="why-us-right-box">
                        <div className="why-us-content-text">With 10+ years of expertise, bold innovation, and a customer-first mindset, we transform ambitious ideas into smart, scalable digital solutions that drive meaningful business growth.</div>
                    </div>
                </div>

                {/*  4 Stat Cards Grid (Exact Alura Framer Design)  */}
                <div className="why-us-cards-grid">
                    {/*  Card 1: 10+ Years of Experience  */}
                    <div className="why-us-card">
                        <div className="framer-corner-icons" aria-hidden="true">
                            <svg className="corner-icon top-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-right" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><rect x="1" y="1" width="8" height="8"/></svg>
                        </div>
                        <div className="why-us-ghost-number" aria-hidden="true">10+</div>
                        <div className="why-us-card-top">
                            <div className="why-us-card-number-wrap">
                                <h3 className="why-us-card-number" data-target="10" data-suffix="+">0+</h3>
                            </div>
                        </div>
                        <div className="why-us-card-bottom">
                            <p className="why-us-card-desc">Years of experience delivering custom AI &amp; scalable software</p>
                        </div>
                    </div>

                    {/*  Card 2: 10k+ Projects Completed  */}
                    <div className="why-us-card">
                        <div className="framer-corner-icons" aria-hidden="true">
                            <svg className="corner-icon top-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-right" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><rect x="1" y="1" width="8" height="8"/></svg>
                        </div>
                        <div className="why-us-ghost-number" aria-hidden="true">10k+</div>
                        <div className="why-us-card-top">
                            <div className="why-us-card-number-wrap">
                                <h3 className="why-us-card-number" data-target="10" data-suffix="k+">0k+</h3>
                            </div>
                        </div>
                        <div className="why-us-card-bottom">
                            <p className="why-us-card-desc">Completed projects for growing brands &amp; global enterprises</p>
                        </div>
                    </div>

                    {/*  Card 3: 50+ Expert Employees  */}
                    <div className="why-us-card">
                        <div className="framer-corner-icons" aria-hidden="true">
                            <svg className="corner-icon top-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-right" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><rect x="1" y="1" width="8" height="8"/></svg>
                        </div>
                        <div className="why-us-ghost-number" aria-hidden="true">50+</div>
                        <div className="why-us-card-top">
                            <div className="why-us-card-number-wrap">
                                <h3 className="why-us-card-number" data-target="50" data-suffix="+">0+</h3>
                            </div>
                        </div>
                        <div className="why-us-card-bottom">
                            <p className="why-us-card-desc">Expert employees &amp; specialized engineers driving innovation</p>
                        </div>
                    </div>

                    {/*  Card 4: 10 Prestigious Awards  */}
                    <div className="why-us-card">
                        <div className="framer-corner-icons" aria-hidden="true">
                            <svg className="corner-icon top-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-left" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/></svg>
                            <svg className="corner-icon bottom-right" viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="#000" strokeWidth="1.2"><rect x="1" y="1" width="8" height="8"/></svg>
                        </div>
                        <div className="why-us-ghost-number" aria-hidden="true">10+</div>
                        <div className="why-us-card-top">
                            <div className="why-us-card-number-wrap">
                                <h3 className="why-us-card-number" data-target="10" data-suffix="+">0+</h3>
                            </div>
                        </div>
                        <div className="why-us-card-bottom">
                            <p className="why-us-card-desc">Prestigious industry awards for design &amp; technical excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
