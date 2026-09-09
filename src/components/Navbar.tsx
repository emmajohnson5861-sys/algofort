"use client";

import React from "react";

export default function Navbar() {
  return (
    <>
      {/*  NAVBAR  */}
        <div className="navbar w-nav" data-animation="default" data-collapse="medium" data-duration="500"
            data-easing="ease-in" data-easing2="ease-in" data-w-id="aa4ac332-ca09-5398-f3fa-8d31dcb47619" role="banner">
            <div className="navbar-main">
                <div className="container w-container">
                    <div className="navbar-content-flex">
                        <div className="brand-logo-block">
                            <a aria-current="page" className="brand-logo-link w-nav-brand w--current" href="/"
                                style={{"textDecoration":"none","display":"flex","alignItems":"center","gap":"8px"}}>
                                <img alt="Algofort Logo" className="brand-logo" loading="lazy"
                                    src="/images/logo-white-01.png" />
                            </a>
                        </div>
                        <nav className="nav-menu w-nav-menu" role="navigation">
                            <div className="nav-menu-flex-down">
                                <a aria-current="page" className="nav-menu-link w-inline-block w--current" href="#home">
                                    <div className="nav-menu-dot"></div>
                                    <div className="nav-text">Home</div>
                                </a>
                                <a className="nav-menu-link w-inline-block" href="#about">
                                    <div className="nav-menu-dot"></div>
                                    <div className="nav-text">About</div>
                                </a>
                                <a className="nav-menu-link w-inline-block" href="#service">
                                    <div className="nav-menu-dot"></div>
                                    <div className="nav-text">Services</div>
                                </a>
                                <a className="nav-menu-link w-inline-block" href="#process">
                                    <div className="nav-menu-dot"></div>
                                    <div className="nav-text">Process</div>
                                </a>
                                <a className="nav-menu-link w-inline-block" href="#why-us">
                                    <div className="nav-menu-dot"></div>
                                    <div className="nav-text">Why Us</div>
                                </a>
                                <div className="button-wrap nav-tablet">
                                    <a className="nav-button w-inline-block" href="#contact">
                                        <div className="nav-button-dot"></div>
                                        <div className="nav-button-text-wrap">
                                            <div className="nav-button-text">Contact</div>
                                            <div className="nav-button-text">Contact</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </nav>
                        <div className="navbar-button-humber-wrapper">
                            <div className="button-wrap nav">
                                <a className="nav-button w-inline-block" href="#contact">
                                    <div className="nav-button-dot"></div>
                                    <div className="nav-button-text-wrap">
                                        <div className="nav-button-text">Contact</div>
                                        <div className="nav-button-text">Contact</div>
                                    </div>
                                </a>
                            </div>
                            <div className="nav-menu-button w-nav-button">
                                <div className="lottie-animation" data-animation-type="lottie" data-autoplay="0"
                                    data-default-duration="0" data-direction="1" data-duration="4.083333333333333"
                                    data-is-ix2-target="1" data-loading="eager" data-loop="0" data-renderer="svg"
                                    data-src="/images/Hamburger.lottie"
                                    data-w-id="52309c9d-ac69-cd26-0914-7c187f35b279">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
