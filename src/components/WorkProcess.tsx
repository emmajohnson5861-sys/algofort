"use client";

import React from "react";

export default function WorkProcess() {
  return (
    <>
      {/*  WORK / ENGINEERING PROCESS SECTION  */}
      <section className="section work" id="process">
        <div className="w-layout-blockcontainer container w-container">
          <div className="work-process-sticky">
            <div className="work-process-view">
              <div className="sub-heading-content">
                <div className="sub-heading-block">
                  <h2 className="sub-heading">Engineering Process</h2>
                </div>
                <div className="work-content-block">
                  <p className="para-1">
                    See how our proven engineering process turns complex business
                    challenges into scalable, high-impact digital products.
                  </p>
                </div>
              </div>
              <div className="service-list">
                <div className="service-content first">
                  <div className="list-number-bg">
                    <div className="list-number">01</div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="work-card-content">
                      <div className="work-card-heading">Discover &amp; Architect</div>
                      <p className="para-2">
                        We analyze technical feasibility, business goals, and user
                        requirements to architect a future-proof roadmap.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="service-content middle"
                  id="w-node-d34900fb-96fc-afbe-b00f-be0e2c789069-ca629726"
                >
                  <div className="list-number-bg">
                    <div className="list-number">02</div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="work-card-content">
                      <div className="work-card-heading">Engineer &amp; Build</div>
                      <p className="para-2">
                        We build scalable custom software, intelligent AI models, and
                        intuitive interfaces with clean, modern code.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="service-content last"
                  id="w-node-caa1a7e9-e3a2-5f48-80a1-3df4ae7c4119-ca629726"
                >
                  <div className="list-number-bg">
                    <div className="list-number">03</div>
                  </div>
                  <div className="overflow-hidden">
                    <div className="work-card-content">
                      <div className="work-card-heading">Deploy, Scale &amp; Evolve</div>
                      <p className="para-2">
                        We launch with automated CI/CD pipelines, rigorous testing,
                        and continuous cloud optimization for long-term growth.
                      </p>
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
