/**
 * AlgoFort / Novasite - Main Application Script (algofort_script.js)
 * High-performance Vanilla JS & GSAP Animation Engine
 */

// Webflow compatibility shim
window.Webflow = window.Webflow || {
  ready: function () { },
  require: function () {
    return {
      init: function () { },
      ready: function () { return Promise.resolve(); },
      getInstance: function () { return null; }
    };
  },
  define: function () { },
  push: function () { }
};


/**
 * 1. HEADER & NAVBAR
 */
function initNavbar() {
  // Contact button hover - roll up vertical text inside clipped container
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(btn => {
    const textItems = btn.querySelectorAll('.nav-button-text');
    const dot = btn.querySelector('.nav-button-dot');
    if (textItems.length === 0) return;

    btn.addEventListener('mouseenter', () => {
      gsap.to(textItems, {
        yPercent: -100,
        duration: 0.38,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      if (dot) {
        gsap.to(dot, { scale: 1.3, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
      }
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(textItems, {
        yPercent: 0,
        duration: 0.38,
        ease: 'power2.out',
        overwrite: 'auto'
      });
      if (dot) {
        gsap.to(dot, { scale: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
      }
    });
  });

  // Mobile menu drawer toggle
  const menuBtn = document.querySelector('.nav-menu-button');
  const navMenu = document.querySelector('.nav-menu');
  let menuOpen = false;

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      menuOpen = !menuOpen;
      
      menuBtn.classList.toggle('w--open', menuOpen);
      navMenu.classList.toggle('w--open', menuOpen);
      menuBtn.setAttribute('aria-expanded', menuOpen ? 'true' : 'false');

      if (menuOpen) {
        gsap.fromTo(navMenu, 
          { opacity: 0, y: -10, display: 'block' },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        gsap.to(navMenu, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            navMenu.style.display = '';
          }
        });
      }
    });

    // Close menu when clicking nav links on mobile
    const navLinks = navMenu.querySelectorAll('.nav-menu-link, .nav-button');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuOpen && window.innerWidth < 992) {
          menuOpen = false;
          menuBtn.classList.remove('w--open');
          navMenu.classList.remove('w--open');
          menuBtn.setAttribute('aria-expanded', 'false');
          gsap.to(navMenu, { opacity: 0, duration: 0.2, onComplete: () => { navMenu.style.display = ''; } });
        }
      });
    });
  }
}

/**
 * 2. HERO SECTION & SLIDERS
 */
function initHeroSection() {
  if (typeof gsap === 'undefined') return;

  // Novasite® Big Title entrance (slides up from 114%)
  const heroBigText = document.querySelector('.hero-big-text-wrapper');
  if (heroBigText) {
    gsap.fromTo(heroBigText,
      { y: '114%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1.3, ease: 'power3.out', delay: 0.15 }
    );
  }

  // Left & right descriptive texts entrance
  const heroLeft = document.querySelector('.hero-left-text');
  if (heroLeft) {
    gsap.fromTo(heroLeft,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: heroLeft, start: 'top 85%' }
      }
    );
  }

  const heroRight = document.querySelector('.hero-right-text');
  if (heroRight) {
    gsap.fromTo(heroRight,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: heroRight, start: 'top 85%' }
      }
    );
  }

  // Hero Slider V2 container fade in (fixes 1a501996-7b6f-28da-24e4-034f3b8244a7 / .hero-slider-v2-wrap)
  const sliderV2Wrap = document.querySelector('.hero-slider-v2-wrap, [data-w-id="1a501996-7b6f-28da-24e4-034f3b8244a7"]');
  if (sliderV2Wrap) {
    sliderV2Wrap.style.opacity = '1';
    gsap.fromTo(sliderV2Wrap,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }

  // Initialize Sliders (V1 Background & V2 Thumbnail)
  initSliders();
}

function initSliders() {
  const sliderV1 = document.querySelector('.hero-slider-v1');
  const sliderV2 = document.querySelector('.hero-slider-v2');
  if (!sliderV1 && !sliderV2) return;

  const slidesV1 = sliderV1 ? sliderV1.querySelectorAll('.hero-v1-slide-item') : [];
  const slidesV2 = sliderV2 ? sliderV2.querySelectorAll('.hero-v2-slide-item') : [];
  const totalSlides = Math.max(slidesV1.length, slidesV2.length);
  if (totalSlides === 0) return;

  let currentIndex = 0;
  const fillDuration = 2.5; // Line fills up in 2.5 seconds
  const holdDuration = 0.5; // Line stays completely full for 0.5s before image transitions
  const slideOutDuration = 0.65; // Smooth slide-out to the right with ease
  let isZoomIn = false; // Alternating Ken Burns toggle: false = zoomOut (scale 1.18 -> 1.0), true = zoomIn (scale 1.0 -> 1.18)

  // Build dots for Slider V1 if present
  let navDotsContainer = sliderV1 ? (sliderV1.querySelector('.hero-slider-nav') || sliderV1.querySelector('.w-slider-nav')) : null;
  let dots = [];
  if (navDotsContainer) {
    navDotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `w-slider-dot ${i === 0 ? 'w-active' : ''}`;
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', `Show slide ${i + 1} of ${totalSlides}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      navDotsContainer.appendChild(dot);
      dots.push(dot);
    }
  }

  // Countable line bars in Slider V2
  const lineBlocks = [
    document.querySelector('.line-block-1'),
    document.querySelector('.line-block-2'),
    document.querySelector('.line-block-3')
  ].filter(Boolean);

  const innerLines = [
    document.querySelector('.inner-line-1'),
    document.querySelector('.inner-line-2'),
    document.querySelector('.inner-line-3')
  ].filter(Boolean);

  // Allow clicking on progress tracks directly
  lineBlocks.forEach((block, idx) => {
    block.style.cursor = 'pointer';
    block.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // Setup V1 background slides if present
  if (slidesV1.length > 0) {
    slidesV1.forEach((slide, idx) => {
      slide.style.position = 'absolute';
      slide.style.top = '0';
      slide.style.left = '0';
      slide.style.width = '100%';
      slide.style.height = '100%';
      slide.style.opacity = idx === 0 ? '1' : '0';
      slide.style.zIndex = idx === 0 ? '2' : '1';
      slide.style.transition = 'opacity 0.8s ease-in-out';
    });
  }

  // Setup V2 thumbnail slides
  if (slidesV2.length > 0) {
    slidesV2.forEach((slide, idx) => {
      slide.style.position = 'absolute';
      slide.style.top = '0';
      slide.style.left = '0';
      slide.style.width = '100%';
      slide.style.height = '100%';
      slide.style.opacity = idx === 0 ? '1' : '0';
      slide.style.zIndex = idx === 0 ? '2' : '1';
      slide.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
      slide.style.transform = idx === 0 ? 'scale(1)' : 'scale(0.92)';
    });
  }

  // Arrows for V2
  const arrowLeft = sliderV2 ? sliderV2.querySelector('.w-slider-arrow-left') : null;
  const arrowRight = sliderV2 ? sliderV2.querySelector('.w-slider-arrow-right') : null;
  if (arrowLeft) {
    arrowLeft.addEventListener('click', () => {
      goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    });
  }
  if (arrowRight) {
    arrowRight.addEventListener('click', () => {
      goToSlide((currentIndex + 1) % totalSlides);
    });
  }

  function triggerKenBurns(activeIdx) {
    const currentImg = slidesV1[activeIdx] ? slidesV1[activeIdx].querySelector('.slider-image-wrap') : null;
    if (currentImg) {
      gsap.killTweensOf(currentImg);
      const zoomDuration = fillDuration + holdDuration + 0.8;
      if (isZoomIn) {
        // Zoom in: start at 1.0 -> animate up to 1.18
        gsap.fromTo(currentImg, 
          { scale: 1.0 }, 
          { scale: 1.18, duration: zoomDuration, ease: 'sine.out' }
        );
      } else {
        // Zoom out: start at 1.18 -> animate down to 1.0
        gsap.fromTo(currentImg, 
          { scale: 1.18 }, 
          { scale: 1.0, duration: zoomDuration, ease: 'sine.out' }
        );
      }
      // Toggle for next transition so it alternates every time
      isZoomIn = !isZoomIn;
    }
  }

  function startLineProgress(activeIdx, prevIdx = -1) {
    // 1. If previous line exists, smoothly slide it out to the right with ease
    if (prevIdx >= 0 && prevIdx < innerLines.length && innerLines[prevIdx]) {
      const prevLine = innerLines[prevIdx];
      gsap.killTweensOf(prevLine);
      gsap.to(prevLine, {
        xPercent: 100,
        duration: slideOutDuration,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(prevLine, { xPercent: 0, scaleX: 0 });
        }
      });
    }

    // 2. Reset all other inactive lines to scaleX: 0 and xPercent: 0
    innerLines.forEach((line, idx) => {
      if (idx !== activeIdx && idx !== prevIdx) {
        gsap.killTweensOf(line);
        gsap.set(line, { xPercent: 0, scaleX: 0 });
      }
    });

    // 3. Trigger alternating Ken Burns effect on the active background image
    triggerKenBurns(activeIdx);

    // 4. Animate current active line: fill (2.5s) -> hold full (0.5s) -> next slide
    if (innerLines[activeIdx]) {
      const activeLine = innerLines[activeIdx];
      gsap.killTweensOf(activeLine);
      gsap.set(activeLine, { xPercent: 0, scaleX: 0, transformOrigin: 'left center' });

      const tl = gsap.timeline({
        onComplete: () => {
          nextSlide();
        }
      });

      tl.to(activeLine, {
        scaleX: 1,
        duration: fillDuration,
        ease: 'power1.in'
      })
      .to({}, { duration: holdDuration });
    }
  }

  function goToSlide(index) {
    if (index === currentIndex) return;
    const prevIndex = currentIndex;
    currentIndex = index;

    // Crossfade V1 if present
    if (slidesV1.length > 0 && slidesV1[prevIndex] && slidesV1[currentIndex]) {
      slidesV1[prevIndex].style.opacity = '0';
      slidesV1[prevIndex].style.zIndex = '1';
      slidesV1[currentIndex].style.opacity = '1';
      slidesV1[currentIndex].style.zIndex = '2';
    }

    // Crossfade V2
    if (slidesV2.length > 0) {
      slidesV2[prevIndex].style.opacity = '0';
      slidesV2[prevIndex].style.zIndex = '1';
      slidesV2[prevIndex].style.transform = 'scale(0.92)';

      slidesV2[currentIndex].style.opacity = '1';
      slidesV2[currentIndex].style.zIndex = '2';
      slidesV2[currentIndex].style.transform = 'scale(1)';
    }

    // Update dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('w-active', idx === currentIndex);
    });

    startLineProgress(currentIndex, prevIndex);
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % totalSlides);
  }

  // Initialize all progress lines to scaleX: 0
  innerLines.forEach((line) => {
    gsap.set(line, { xPercent: 0, scaleX: 0, transformOrigin: 'left center' });
  });

  // Start progress and Ken Burns on the first slide
  startLineProgress(0, -1);
}

/**
 * 3. ABOUT SECTION
 */
function initAboutSection() {
  if (typeof gsap === 'undefined') return;

  // Title / Subtitle fade-in
  const aboutTitle = document.querySelector('#about .algo-section-subtitle, .about-title');
  if (aboutTitle) {
    gsap.fromTo(aboutTitle,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: aboutTitle, start: 'top 85%' }
      }
    );
  }

  // SplitText char typography reveal on about paragraph
  const aboutRightBox = document.querySelector('.about-right-box');
  if (aboutRightBox) {
    aboutRightBox.style.visibility = 'visible';
    const textEl = aboutRightBox.querySelector('p') || aboutRightBox;
    
    if (typeof SplitText !== 'undefined') {
      const split = new SplitText(textEl, { type: 'words,chars' });
      gsap.fromTo(split.chars,
        { opacity: 0.3 },
        {
          opacity: 1,
          stagger: 0.02,
          duration: 0.4,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: aboutRightBox,
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: 1
          }
        }
      );
    } else {
      gsap.fromTo(aboutRightBox,
        { opacity: 0.3 },
        { opacity: 1, duration: 1, scrollTrigger: { trigger: aboutRightBox, start: 'top 75%' } }
      );
    }
  }

  // Infinite Sponsor Logos Marquee
  const sponsorRows = document.querySelectorAll('.sponser-logo-wrap');
  if (sponsorRows.length > 0) {
    sponsorRows.forEach((row, i) => {
      row.style.transform = 'translate3d(0, 0, 0)';
      gsap.to(row, {
        xPercent: -50,
        ease: 'none',
        duration: 25 + i * 2,
        repeat: -1
      });
    });
  }
}

/**
 * 4. WORK PROCESS SECTION (Continuous Scroll Scrub Parallax for 3 Cards)
 */
function initWorkProcessSection() {
  if (typeof gsap === 'undefined') return;

  const workSection = document.querySelector('.section.work');
  if (!workSection) return;

  // Sub-heading & paragraph slide-in
  const subHeading = workSection.querySelector('.sub-heading-block');
  if (subHeading) {
    gsap.fromTo(subHeading,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: subHeading, start: 'top 80%' }
      }
    );
  }

  const workContentBlock = workSection.querySelector('.work-content-block');
  if (workContentBlock) {
    gsap.fromTo(workContentBlock,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: workContentBlock, start: 'top 80%' }
      }
    );
  }

  // Work cards: 01 (Left), 02 (Center/Middle), 03 (Right)
  const cardFirst = workSection.querySelector('.service-content.first');
  const cardMiddle = workSection.querySelector('.service-content.middle');
  const cardLast = workSection.querySelector('.service-content.last');

  const cards = [cardFirst, cardMiddle, cardLast].filter(Boolean);
  cards.forEach(card => {
    card.style.opacity = '1';
    card.style.willChange = 'transform';
  });

  if (cardFirst && cardMiddle && cardLast) {
    // GSAP ScrollTrigger timeline scrubbed to scroll position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workSection,
        start: 'top 80%',
        end: 'center 45%',
        scrub: 1.2,
        invalidateOnRefresh: true
      }
    });

    // Center card: translate3d(0, -100%, 0) -> translate3d(0, 0%, 0)
    tl.fromTo(cardMiddle,
      { yPercent: -100 },
      { yPercent: 0, ease: 'none' },
      0
    );

    // Left card: translate3d(0, 100%, 0) -> translate3d(0, 0%, 0)
    tl.fromTo(cardFirst,
      { yPercent: 100 },
      { yPercent: 0, ease: 'none' },
      0
    );

    // Right card: translate3d(0, 100%, 0) -> translate3d(0, 0%, 0)
    tl.fromTo(cardLast,
      { yPercent: 100 },
      { yPercent: 0, ease: 'none' },
      0
    );
  }
}

/**
 * 5. SERVICE SECTION (Glitch-free Accordion / Dropdown with 45° Plus-to-Close Rotation)
 */
function initServiceSection() {
  if (typeof gsap === 'undefined') return;

  // Service Tag Description SplitText reveal
  const serviceDesc = document.querySelector('.service-tag-description-wrap');
  if (serviceDesc) {
    serviceDesc.style.visibility = 'visible';
    const textEl = serviceDesc.querySelector('.service-tag-description') || serviceDesc;
    if (typeof SplitText !== 'undefined') {
      const split = new SplitText(textEl, { type: 'words,chars' });
      gsap.fromTo(split.chars,
        { opacity: 0.35 },
        {
          opacity: 1,
          stagger: 0.02,
          duration: 0.4,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: serviceDesc,
            start: 'top 80%',
            end: 'bottom 55%',
            scrub: 1
          }
        }
      );
    }
  }

  // Release all initial opacity:0 inline states on titles and icons
  document.querySelectorAll('.service-box .content-title, .service-box .plus-icon-wrap').forEach(el => {
    el.style.opacity = '1';
    el.style.visibility = 'visible';
  });

  // Ensure all inner content blocks have no jumping y transforms or opacity delays
  document.querySelectorAll('.service-box .service-content-block, .service-box .hover-content-para, .service-box .hover-content-servises').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  function closeServiceBox(box) {
    if (!box) return;
    box.classList.remove('w--open');
    const contentArea = box.querySelector('.service-content-area');
    const targetIcon = box.querySelector('.plus-icon') || box.querySelector('.plus-icon-wrap');
    const titleText = box.querySelector('.content-title');

    if (contentArea) {
      gsap.killTweensOf(contentArea);
      gsap.to(contentArea, {
        height: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });
    }

    if (targetIcon) {
      gsap.killTweensOf(targetIcon);
      gsap.to(targetIcon, {
        rotation: 0,
        duration: 0.35,
        ease: 'power2.out',
        transformOrigin: '50% 50%',
        overwrite: 'auto'
      });
    }

    if (titleText) {
      gsap.killTweensOf(titleText);
      gsap.to(titleText, {
        color: '',
        duration: 0.3,
        overwrite: 'auto'
      });
    }
  }

  function openServiceBox(box) {
    if (!box) return;
    box.classList.add('w--open');
    const contentArea = box.querySelector('.service-content-area');
    const targetIcon = box.querySelector('.plus-icon') || box.querySelector('.plus-icon-wrap');
    const titleText = box.querySelector('.content-title');

    if (contentArea) {
      gsap.killTweensOf(contentArea);
      const fullHeight = contentArea.scrollHeight;
      gsap.to(contentArea, {
        height: fullHeight,
        duration: 0.4,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });
    }

    if (targetIcon) {
      gsap.killTweensOf(targetIcon);
      gsap.to(targetIcon, {
        rotation: 45,
        duration: 0.35,
        ease: 'power2.out',
        transformOrigin: '50% 50%',
        overwrite: 'auto'
      });
    }

    if (titleText) {
      gsap.killTweensOf(titleText);
      gsap.to(titleText, {
        color: '#ffffff',
        duration: 0.3,
        overwrite: 'auto'
      });
    }
  }

  // 1. DESKTOP ACCORDION (Synchronized, Glitch-Free Hover)
  const desktopContainer = document.querySelector('.service-hover-wrapper .hover-content:not(.tablet)');
  if (desktopContainer) {
    const desktopBoxes = desktopContainer.querySelectorAll('.service-box');
    let activeBox = null;

    desktopBoxes.forEach(box => {
      const contentArea = box.querySelector('.service-content-area');
      if (contentArea) {
        contentArea.style.height = '0px';
        contentArea.style.overflow = 'hidden';
        contentArea.style.display = 'block';
      }

      box.addEventListener('mouseenter', () => {
        if (window.innerWidth < 992) return;
        if (activeBox === box) return;

        const prevBox = activeBox;
        activeBox = box;

        // 1. Smoothly close previous active box with matching duration & easing
        if (prevBox) {
          prevBox.classList.remove('w--open');
          const prevCA = prevBox.querySelector('.service-content-area');
          const prevIcon = prevBox.querySelector('.plus-icon') || prevBox.querySelector('.plus-icon-wrap');
          const prevTitle = prevBox.querySelector('.content-title');

          if (prevCA) {
            gsap.killTweensOf(prevCA);
            gsap.to(prevCA, {
              height: 0,
              duration: 0.4,
              ease: 'power2.inOut',
              overwrite: 'auto'
            });
          }
          if (prevIcon) {
            gsap.killTweensOf(prevIcon);
            gsap.to(prevIcon, {
              rotation: 0,
              duration: 0.35,
              ease: 'power2.out',
              transformOrigin: '50% 50%',
              overwrite: 'auto'
            });
          }
          if (prevTitle) {
            gsap.killTweensOf(prevTitle);
            gsap.to(prevTitle, {
              color: '',
              duration: 0.3,
              overwrite: 'auto'
            });
          }
        }

        // 2. Smoothly open newly hovered box with matching duration & easing
        box.classList.add('w--open');
        const currCA = box.querySelector('.service-content-area');
        const currIcon = box.querySelector('.plus-icon') || box.querySelector('.plus-icon-wrap');
        const currTitle = box.querySelector('.content-title');

        if (currCA) {
          gsap.killTweensOf(currCA);
          const fullHeight = currCA.scrollHeight;
          gsap.to(currCA, {
            height: fullHeight,
            duration: 0.4,
            ease: 'power2.inOut',
            overwrite: 'auto'
          });
        }
        if (currIcon) {
          gsap.killTweensOf(currIcon);
          gsap.to(currIcon, {
            rotation: 45,
            duration: 0.35,
            ease: 'power2.out',
            transformOrigin: '50% 50%',
            overwrite: 'auto'
          });
        }
        if (currTitle) {
          gsap.killTweensOf(currTitle);
          gsap.to(currTitle, {
            color: '#ffffff',
            duration: 0.3,
            overwrite: 'auto'
          });
        }
      });
    });

    // When mouse leaves the desktop services container, smoothly close active box
    const hoverWrapper = document.querySelector('.service-hover-wrapper') || desktopContainer;
    hoverWrapper.addEventListener('mouseleave', () => {
      if (window.innerWidth < 992) return;
      if (!activeBox) return;

      const closingBox = activeBox;
      activeBox = null;
      closingBox.classList.remove('w--open');

      const ca = closingBox.querySelector('.service-content-area');
      const ic = closingBox.querySelector('.plus-icon') || closingBox.querySelector('.plus-icon-wrap');
      const tt = closingBox.querySelector('.content-title');

      if (ca) {
        gsap.killTweensOf(ca);
        gsap.to(ca, {
          height: 0,
          duration: 0.35,
          ease: 'power2.inOut',
          overwrite: 'auto'
        });
      }
      if (ic) {
        gsap.killTweensOf(ic);
        gsap.to(ic, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out',
          transformOrigin: '50% 50%',
          overwrite: 'auto'
        });
      }
      if (tt) {
        gsap.killTweensOf(tt);
        gsap.to(tt, {
          color: '',
          duration: 0.3,
          overwrite: 'auto'
        });
      }
    });
  }

  // 2. TABLET / MOBILE ACCORDION (Click)
  const tabletContainer = document.querySelector('.hover-content.tablet');
  if (tabletContainer) {
    const tabletBoxes = tabletContainer.querySelectorAll('.service-box');

    tabletBoxes.forEach(box => {
      const toggleArea = box.querySelector('.service-heading-area') || box;
      const contentArea = box.querySelector('.service-content-area');
      if (contentArea) {
        contentArea.style.height = '0px';
        contentArea.style.overflow = 'hidden';
        contentArea.style.display = 'block';
      }

      toggleArea.addEventListener('click', (e) => {
        if (window.innerWidth < 992) {
          e.preventDefault();
          e.stopPropagation();

          const isOpen = box.classList.contains('w--open');
          if (isOpen) {
            closeServiceBox(box);
          } else {
            tabletBoxes.forEach(other => {
              if (other !== box) {
                closeServiceBox(other);
              }
            });
            openServiceBox(box);
          }
        }
      });
    });
  }
}

/**
 * 6. SMOOTH ANCHOR NAVIGATION
 */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const hash = href.startsWith('/#') ? href.slice(1) : href;
      if (hash === '#' || !hash.startsWith('#')) return;

      const targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        if (typeof lenis !== 'undefined') {
          lenis.scrollTo(targetEl, { offset: 0, duration: 1.5 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/**
 * 7. ALGOFORT CTA SECTION - MOUSE TRAIL EFFECT
 */
function initCtaMouseTrail() {
  const sections = document.querySelectorAll('.section_cta');
  if (sections.length === 0 || typeof gsap === 'undefined') return;

  sections.forEach(section => {
    const visualWrap = section.querySelector('.interaction_visual_wrap');
    const template = section.querySelector('.interaction_template .interaction_img_wrap');
    const cmsItems = section.querySelectorAll('.interaction_cms_item');

    if (!visualWrap || !template || cmsItems.length === 0) return;

    let activeIndex = 0;

    function getNextUrl() {
      const img = cmsItems[activeIndex].querySelector('img');
      const src = img ? img.getAttribute('src') : '';
      activeIndex = (activeIndex + 1) % cmsItems.length;
      return src;
    }

    let xPosition = 0;
    let yPosition = 0;
    let isFirstMove = true;

    section.addEventListener('mouseleave', () => {
      isFirstMove = true;
    });

    section.addEventListener('mousemove', (e) => {
      const rect = visualWrap.getBoundingClientRect();
      const currentX = e.clientX;
      const currentY = e.clientY;

      if (isFirstMove) {
        xPosition = currentX;
        yPosition = currentY;
        isFirstMove = false;
        return;
      }

      const deltaX = currentX - xPosition;
      const deltaY = currentY - yPosition;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Trigger trail image creation when mouse moves more than 85px
      if (distance > 85) {
        const prevX = xPosition - rect.left - 100;
        const prevY = yPosition - rect.top - 70;

        xPosition = currentX;
        yPosition = currentY;

        const targetX = currentX - rect.left - 100;
        const targetY = currentY - rect.top - 70;

        // Clone the image template
        const imageWrap = template.cloneNode(true);
        const imgSrc = getNextUrl();
        const img = imageWrap.querySelector('img');
        if (img) img.src = imgSrc;

        visualWrap.appendChild(imageWrap);

        // GSAP Timeline Animation
        const tl = gsap.timeline({
          onComplete: () => {
            imageWrap.remove(); // Clean memory by removing DOM element after animation ends
          }
        });

        // Fade & Scale in
        tl.fromTo(imageWrap,
          { opacity: 0, scale: 0.75, rotation: (Math.random() - 0.5) * 12 },
          { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }
        );

        // Movement tracking cursor path
        tl.fromTo(imageWrap,
          { x: prevX, y: prevY },
          { x: targetX, y: targetY, duration: 0.6, ease: 'power2.out' },
          '<'
        );

        // Shrink and fade out smoothly
        const trailImg = imageWrap.querySelector('img');
        if (trailImg) {
          tl.to(trailImg, {
            opacity: 0,
            scale: 0.5,
            duration: 0.35,
            ease: 'power2.in'
          }, '+=0.15');
        }
      }
    });
  });
}

/**
 * 8. WHY US SECTION (Title, Typography Reveal & Number Counters with GSAP ScrollTrigger)
 */
function initWhyUsSection() {
  if (typeof gsap === 'undefined') return;

  // Title / Subtitle fade-in
  const whyTitle = document.querySelector('#why-us .algo-section-subtitle, .why-us-title');
  if (whyTitle) {
    gsap.fromTo(whyTitle,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: whyTitle, start: 'top 85%' }
      }
    );
  }

  // SplitText char typography reveal on why-us paragraph (scrub opacity to full on scroll)
  const whyRightBox = document.querySelector('.why-us-right-box');
  if (whyRightBox) {
    whyRightBox.style.visibility = 'visible';
    const textEl = whyRightBox.querySelector('.why-us-content-text') || whyRightBox.querySelector('p') || whyRightBox;

    if (typeof SplitText !== 'undefined') {
      const split = new SplitText(textEl, { type: 'words,chars' });
      gsap.fromTo(split.chars,
        { opacity: 0.3 },
        {
          opacity: 1,
          stagger: 0.02,
          duration: 0.4,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: whyRightBox,
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: 1
          }
        }
      );
    } else {
      gsap.fromTo(whyRightBox,
        { opacity: 0.3 },
        { opacity: 1, duration: 1, scrollTrigger: { trigger: whyRightBox, start: 'top 75%' } }
      );
    }
  }

  // Number Counters with GSAP ScrollTrigger
  const cards = document.querySelectorAll('.why-us-card');
  if (cards.length === 0) return;

  cards.forEach(card => {
    const numEl = card.querySelector('.why-us-card-number');
    if (!numEl) return;
    const target = parseInt(numEl.getAttribute('data-target') || '0', 10);
    const suffix = numEl.getAttribute('data-suffix') || '';

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              numEl.textContent = Math.floor(obj.val) + suffix;
            }
          });
        }
      });
    } else {
      numEl.textContent = target + suffix;
    }
  });
}

/**
 * 9. LENIS SMOOTH SCROLLING + GSAP INTEGRATION
 */
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  if (window.__lenisInstance) return; // prevent double init

  const lenis = new Lenis({
    duration: 1.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  window.lenis = lenis;
  window.__lenisInstance = lenis;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    (function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    })(performance.now());
  }
}

/**
 * 8. TESTIMONIAL SECTION (Heading Entrance Animation)
 */
function initTestimonialSection() {
  const section = document.querySelector('.section-home-testimonial');
  if (!section) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const heading = section.querySelector('.heading-style-h2');
    if (heading) {
      gsap.fromTo(heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%'
          }
        }
      );
    }
  }
}

/**
 * MASTER INITIALIZER
 * Runs once on load. Also exposed as window.initAlgofort for React.
 */
function initAllAlgofort() {
  // Register GSAP plugins
  if (typeof gsap !== 'undefined') {
    if (typeof SplitText !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(SplitText, ScrollTrigger);
    } else if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  // Add Webflow class shims for CSS compatibility
  document.documentElement.classList.add('w-mod-js', 'w-mod-ix', 'w-mod-ix3');

  // Init Lenis FIRST so ScrollTrigger scroll proxy is connected
  initLenis();

  // Init all sections
  if (typeof initNavbar === 'function') initNavbar();
  if (typeof initHeroSection === 'function') initHeroSection();
  if (typeof initAboutSection === 'function') initAboutSection();
  if (typeof initWorkProcessSection === 'function') initWorkProcessSection();
  if (typeof initServiceSection === 'function') initServiceSection();
  if (typeof initWhyUsSection === 'function') initWhyUsSection();
  if (typeof initTestimonialSection === 'function') initTestimonialSection();
  if (typeof initCtaMouseTrail === 'function') initCtaMouseTrail();
  if (typeof initSmoothAnchors === 'function') initSmoothAnchors();

  // Final refresh for any late-calculated scroll positions
  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }
}

// Expose for React page.tsx to call after DOM is mounted
window.initAlgofort = initAllAlgofort;

// Auto-run: since this script loads 'afterInteractive', DOMContentLoaded
// has already fired. We use readyState check + small delay to ensure
// React has fully mounted its components into the DOM.
if (document.readyState === 'complete') {
  // Page fully loaded — React already hydrated, DOM is ready
  setTimeout(initAllAlgofort, 50);
} else if (document.readyState === 'interactive') {
  // DOM ready but resources still loading — safe to init
  setTimeout(initAllAlgofort, 100);
} else {
  // Fallback for any edge case
  window.addEventListener('load', initAllAlgofort, { once: true });
}
