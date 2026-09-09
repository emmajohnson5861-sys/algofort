"use client";

import React from "react";

export default function CTA() {
  return (
    <>
      {/*  ALGOFORT CTA SECTION (FULL WIDTH MOUSE TRAIL EFFECT)  */}
        <section className="section_cta" id="contact">
            <div className="padding-global-cta">
                <div className="cta_component">
                    
                    {/*  Floating Infinite Marquee Badge (Top Center)  */}
                    <div className="cta_note">
                        <div className="note-marquee_component">
                            <div className="note-marquee_in">
                                <div className="note-marquee_text">Move your mouse —</div>
                                <div className="note-marquee_text">Move your mouse —</div>
                                <div className="note-marquee_text">Move your mouse —</div>
                                <div className="note-marquee_text">Move your mouse —</div>
                                {/*  1-to-1 Duplicate for Seamless Jerk-Free Infinite Looping  */}
                                <div className="note-marquee_text">Move your mouse —</div>
                                <div className="note-marquee_text">Move your mouse —</div>
                                <div className="note-marquee_text">Move your mouse —</div>
                                <div className="note-marquee_text">Move your mouse —</div>
                            </div>
                        </div>
                    </div>

                    {/*  CTA Content  */}
                    <div className="cta_content">
                        <div className="text-align-center">
                            <h2 className="heading-style-h1">
                                Start your project with Algofort®
                            </h2>
                        </div>

                        {/*  Animated Button with Dual-Text & Red Dot  */}
                        <div className="fade-in">
                            <a href="mailto:hello@algofort.com" className="button-secondary">
                                <div className="button_texts">
                                    <div className="button_text _1">Get in touch</div>
                                    <div className="button_text _2">Get in touch</div>
                                </div>
                                <div className="button-line_dot">
                                    <div className="button_dot"></div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/*  Mouse Trail Visual Target Container  */}
                    <div className="interaction_visual_wrap">
                        <div className="interaction_template">
                            <div className="interaction_img_wrap">
                                <img src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/6864243e37560ab3d4767c80_Smartwatch%20Close-Up%20(1).webp" alt="Project Preview" />
                            </div>
                        </div>
                    </div>

                    {/*  CMS Image Repository for Mouse Trail Cycling  */}
                    <div className="interaction_cms_wrap">
                        <div className="interaction_cms_list">
                            <div className="interaction_cms_item">
                                <img src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/6864243e37560ab3d4767c80_Smartwatch%20Close-Up%20(1).webp" alt="Smartwatch" />
                            </div>
                            <div className="interaction_cms_item">
                                <img src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/68642449cf8bd0f76e9f111a_001_copy_3-1170x780%20(1).webp" alt="Design System" />
                            </div>
                            <div className="interaction_cms_item">
                                <img src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/686424520220626a6c2b003b_Dynamic%20Motion%20Blur.webp" alt="Motion Blur" />
                            </div>
                            <div className="interaction_cms_item">
                                <img src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/6864245b955d3280ee1379e6_Presentation_Hall_Mockup-1170x780.webp" alt="Presentation Hall" />
                            </div>
                            <div className="interaction_cms_item">
                                <img src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/6864266eab8727e10f58be5_Image002-1170x780.webp" alt="Brand Identity" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  );
}
