"use client";

import React from "react";
import SectionSubtitle from "@/components/SectionSubtitle";

export default function Services() {
  return (
    <>
      {/*  SERVICES SECTION  */}
      <section className="section service" id="service">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-main-wrapper">
            <div className="service-top-content">
              <div className="service-tag-wrapper">
                <SectionSubtitle text="Services" isDark={true} />
              </div>
              <div className="service-tag-description-wrap">
                <div className="service-tag-description medium-content-text">
                  We build intelligent AI solutions, scalable custom software, and high-performance web and mobile platforms.
                </div>
              </div>
            </div>
            <div className="service-hover-wrapper">
              {/*  Desktop View Accordions  */}
              <div className="hover-content">
                <div className="service-box w-dropdown" data-delay="0.5" data-hover="true">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">AI &amp; Automation</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap">
                                            <img alt="Plus Icon" className="plus-icon" loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">Harness the power of cutting-edge artificial intelligence
                                                to automate complex workflows, extract actionable insights, and build
                                                next-generation smart applications.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Generative AI Solutions</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">AI Agents &amp; Autonomous Workflows</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Custom AI &amp; ML Models</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Natural Language Processing (NLP)</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/*  Service 02: Custom Software Development  */}
                            <div className="service-box w-dropdown" data-delay="0.5" data-hover="true">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">Custom Software Development</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap"><img alt="Plus Icon" className="plus-icon"
                                                loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">End-to-end custom software solutions built to streamline
                                                operations, eliminate bottlenecks, and scale seamlessly with your
                                                business.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Enterprise Applications</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Cloud Infrastructure &amp; DevOps</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">APIs &amp; Microservices Architecture</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">SaaS Platform Engineering</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/*  Service 03: Web & Mobile App Development  */}
                            <div className="service-box w-dropdown" data-delay="0.5" data-hover="true">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">Web &amp; Mobile Development</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap">
                                            <img alt="Plus Icon" className="plus-icon" loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">High-speed, responsive web applications and cross-platform
                                                mobile apps engineered for performance, security, and world-class user
                                                experiences.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Modern Web Applications (React / Next.js)
                                                </div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">iOS &amp; Android Native Apps</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Flutter &amp; React Native Apps</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Headless eCommerce &amp; Shopify</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/*  Service 04: UI/UX & Digital Consulting  */}
                            <div className="service-box w-dropdown" data-delay="0.5" data-hover="true">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">UI/UX &amp; Digital Consulting</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap">
                                            <img alt="Plus Icon" className="plus-icon" loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">Transform user journeys into intuitive, high-converting
                                                digital products backed by strategic research, design systems, and
                                                technology consulting.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Product Strategy &amp; Roadmapping</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">User Experience (UX) Research</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Modern UI Design Systems</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6943e3223d944e33bdc4333e_Frame.svg" />
                                                <div className="service-name">Digital Transformation Consulting</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        {/*  Tablet / Mobile Click Accordions  */}
                        <div className="hover-content tablet">
                            {/*  Mobile Service 01  */}
                            <div className="service-box click w-dropdown" data-delay="0.5" data-hover="false">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">AI &amp; Automation</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap"><img alt="Plus Icon" className="plus-icon"
                                                loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">Harness the power of cutting-edge artificial intelligence
                                                to automate complex workflows, extract actionable insights, and build
                                                next-generation smart applications.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Generative AI Solutions</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">AI Agents &amp; Autonomous Workflows</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Custom AI &amp; ML Models</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Natural Language Processing (NLP)</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/*  Mobile Service 02  */}
                            <div className="service-box click w-dropdown" data-delay="0.5" data-hover="false">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">Custom Software Development</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap"><img alt="Plus Icon" className="plus-icon"
                                                loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">End-to-end custom software solutions built to streamline
                                                operations, eliminate bottlenecks, and scale seamlessly with your
                                                business.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Enterprise Applications</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Cloud Infrastructure &amp; DevOps</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">APIs &amp; Microservices Architecture</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">SaaS Platform Engineering</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/*  Mobile Service 03  */}
                            <div className="service-box click w-dropdown" data-delay="0.5" data-hover="false">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">Web &amp; Mobile Development</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap"><img alt="Plus Icon" className="plus-icon"
                                                loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">High-speed, responsive web applications and cross-platform
                                                mobile apps engineered for performance, security, and world-class user
                                                experiences.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Modern Web Applications (React / Next.js)
                                                </div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">iOS &amp; Android Native Apps</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Flutter &amp; React Native Apps</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Headless eCommerce &amp; Shopify</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/*  Mobile Service 04  */}
                            <div className="service-box click w-dropdown" data-delay="0.5" data-hover="false">
                                <div className="service-heading-area w-dropdown-toggle">
                                    <div className="overflow-hidden">
                                        <div className="content-title">UI/UX &amp; Digital Consulting</div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="plus-icon-wrap"><img alt="Plus Icon" className="plus-icon"
                                                loading="lazy"
                                                src="/images/6927db1fec53d993bfde0582_Frame_20_35_.svg" />
                                        </div>
                                    </div>
                                </div>
                                <nav className="service-content-area w-dropdown-list" style={{"height":"0px"}}>
                                    <div className="service-content-block">
                                        <div className="hover-content-para">
                                            <p className="para-2">Transform user journeys into intuitive, high-converting
                                                digital products backed by strategic research, design systems, and
                                                technology consulting.</p>
                                        </div>
                                        <div className="hover-content-servises">
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Product Strategy &amp; Roadmapping</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">User Experience (UX) Research</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Modern UI Design Systems</div>
                                            </div>
                                            <div className="service-name-wrap"><img alt="Check Icon"
                                                    className="service-plus-icon" loading="lazy"
                                                    src="/images/6927dcbc3b8a7162c8264a35_Frame_20_36_.svg" />
                                                <div className="service-name">Digital Transformation Consulting</div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
