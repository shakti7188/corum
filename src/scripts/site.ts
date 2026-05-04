import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Keyboard, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'lazysizes';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

declare global {
  interface Window { __lenis?: Lenis }
}

// ─── smooth scroll ────────────────────────────────────────────────────────────
function initLenis() {
  if (prefersReduced || window.__lenis) return;
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });
  window.__lenis = lenis;

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.2 });
    });
  });
}

// ─── scroll reveal primitives ─────────────────────────────────────────────────
const REVEAL_DEFAULTS = {
  trigger: 'top 98%',
  duration: 0.3,
  ease: 'power3.out',
};

function revealFrom(selector: string, from: gsap.TweenVars, to: Partial<gsap.TweenVars> = {}) {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    gsap.fromTo(
      el,
      from,
      {
        ...from,
        ...to,
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: to.duration ?? REVEAL_DEFAULTS.duration,
        ease: to.ease ?? REVEAL_DEFAULTS.ease,
        scrollTrigger: {
          trigger: el,
          start: REVEAL_DEFAULTS.trigger,
          once: true,
        },
      },
    );
  });
}

function initReveals() {
  // Bespoke elements — each runs as soon as it enters the viewport (lazy in-view reveal)
  revealFrom('[class*="FadeInUp_container"]', { opacity: 0, y: 40 }, { duration: 0.55 });
  revealFrom('[class*="FadeIn_container"]', { opacity: 0 }, { duration: 0.45 });
  revealFrom('[class*="ImageEnter_image"]', { opacity: 0, scale: 1.05 }, { duration: 0.7 });
  revealFrom('[class*="AnimatedPanel_panel"]:not(.gsap-service-card)', { opacity: 0, y: 30 }, { duration: 0.55 });

  // Global lazy-loading for textual site elements (skips elements already controlled by other effects)
  revealFrom('main p:not([class*="Statistic"]):not([class*="hero"]), main h2:not([data-split]):not([class*="Statistic"]):not(.gsap-service-heading), main h3:not([data-split]):not([class*="Statistic"]), main li', { opacity: 0, y: 18 }, { duration: 0.45 });

  // Ethos is next after pinned Services. Trigger off the Services container
  // (not Ethos itself) so we can start fading Ethos in *while* Services is
  // still pinned — that overlaps the last card's fade-out with the section
  // change and removes the blank frame between them.
  if (!prefersReduced) {
    const ethosEl = document.querySelector<HTMLElement>('.Ethos_ethos__vP_lg');
    const servicesContainer = document.querySelector<HTMLElement>('.gsap-services-section');
    if (ethosEl) {
      const trigger = servicesContainer || ethosEl;
      gsap.fromTo(ethosEl,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, ease: 'power2.out',
          scrollTrigger: {
            trigger,
            start: servicesContainer ? 'bottom bottom+=30%' : 'top bottom',
            end:   servicesContainer ? 'bottom bottom-=5%'  : 'top center',
            scrub: 1,
          } }
      );
    }
    document.querySelectorAll<HTMLElement>('.EthosSection_section__hjSSE').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top bottom-=80px', once: true } }
      );
    });
  }

  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[class*="AnimatedGrid_grid"]').forEach((grid) => {
    const items = Array.from(grid.children) as HTMLElement[];
    if (!items.length) return;
    gsap.fromTo(
      items,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: { trigger: grid, start: 'top 92%', once: true },
      },
    );
  });
}

// ─── navigation flyout ────────────────────────────────────────────────────────
const NAV_ACTIVE = 'PrimaryNavigation_active__gdInn';
const NAV_SUBMENU_OPEN = 'PrimaryNavigation_submenuOpen__uJhU7';
const NAV_TOGGLE_OPEN = 'PrimaryNavigation_toggleOpen__b_ys6';

function initNav() {
  const page = document.querySelector<HTMLElement>('.PrimaryNavigation_page__DgiUM');
  const button = document.querySelector<HTMLElement>('.PrimaryNavigation_icon__qAQCe');
  if (!page || !button) return;

  const setOpen = (open: boolean) => {
    page.classList.toggle(NAV_ACTIVE, open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  button.addEventListener('click', () => setOpen(!page.classList.contains(NAV_ACTIVE)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && page.classList.contains(NAV_ACTIVE)) setOpen(false);
  });

  document.querySelectorAll<HTMLElement>('.PrimaryNavigation_parent__bfX37').forEach((parent) => {
    parent.addEventListener('click', () => {
      const li = parent.closest('li');
      const submenu = li?.querySelector<HTMLElement>('.PrimaryNavigation_submenu__ryGWu');
      const toggle = parent.querySelector<HTMLElement>('.PrimaryNavigation_toggleSign__XESvT');
      submenu?.classList.toggle(NAV_SUBMENU_OPEN);
      toggle?.classList.toggle(NAV_TOGGLE_OPEN);
    });
  });
}

// ─── marquee (infinite logo strip) ────────────────────────────────────────────
function initMarquees() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((track) => {
    const speed = Number(track.dataset.speed ?? 40);
    const children = Array.from(track.children) as HTMLElement[];
    if (!children.length) return;
    children.forEach((c) => track.appendChild(c.cloneNode(true)));
    const total = track.scrollWidth / 2;
    gsap.to(track, {
      x: -total,
      duration: total / speed,
      ease: 'none',
      repeat: -1,
      modifiers: { x: (x) => `${parseFloat(x) % -total}px` },
    });
  });
}

// ─── magnetic hover buttons ───────────────────────────────────────────────────
function initMagnetics() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[class*="Magnetic_magnetic"]').forEach((el) => {
    const fill = el.dataset.fill === 'true';
    const strength = fill ? 0.35 : 0.55;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      gsap.to(el, { x, y, duration: 0.5, ease: 'power3.out' });
    };
    const reset = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', reset);
  });
}

// ─── swipers ──────────────────────────────────────────────────────────────────
function initSwipers() {
  document.querySelectorAll<HTMLElement>('.swiper').forEach((root) => {
    if(window.innerWidth >= 1024 && root.classList.contains('StatisticsCarousel_swiper__PGdj6')) return;
    // Buttons may live inside the swiper (.TestimonialsCarousel_swiperNav)
    // OR alongside it in the parent. Check both, in that order.
    const nextBtn =
      root.querySelector('.swiper-button-next') ||
      root.querySelector('.swiper-panel-next') ||
      root.parentElement?.querySelector('.swiper-panel-next') ||
      root.closest('.TestimonialsCarousel_container__YAjHa')?.querySelector('.swiper-panel-next');
    const prevBtn =
      root.querySelector('.swiper-button-prev') ||
      root.querySelector('.swiper-panel-prev') ||
      root.parentElement?.querySelector('.swiper-panel-prev') ||
      root.closest('.TestimonialsCarousel_container__YAjHa')?.querySelector('.swiper-panel-prev');
    const isTestimonials = root.classList.contains('TestimonialsCarousel_swiper__AMmtm');

    if (isTestimonials) {
      new Swiper(root, {
        modules: [EffectCreative, Navigation, A11y, Keyboard],
        effect: 'creative',
        creativeEffect: {
          limitProgress: 4,
          prev: {
            shadow: false,
            translate: ['110%', 0, 0],
            opacity: 0,
          },
          next: {
            shadow: false,
            translate: [-22, 8, -1],
            opacity: 0.85,
          },
        },
        grabCursor: true,
        keyboard: { enabled: true },
        navigation: (nextBtn || prevBtn)
          ? { nextEl: nextBtn as HTMLElement, prevEl: prevBtn as HTMLElement }
          : false,
        a11y: { enabled: true },
      });
      return;
    }

    // Testimonial carousel — single slide visible, fades between slides.
    const isTestiCarousel = root.classList.contains('c8-testi__carousel');
    if (isTestiCarousel) {
      new Swiper(root, {
        modules: [Navigation, A11y, Keyboard],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        keyboard: { enabled: true },
        navigation: (nextBtn || prevBtn)
          ? { nextEl: nextBtn as HTMLElement, prevEl: prevBtn as HTMLElement }
          : false,
        a11y: { enabled: true },
        autoplay: false,
      });
      return;
    }

    // Work case-study carousel — fixed 3-per-view on desktop, 2 tablet, 1 mobile.
    const isWorkCarousel = root.classList.contains('c8-work__carousel');
    if (isWorkCarousel) {
      new Swiper(root, {
        modules: [Navigation, A11y, Keyboard],
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          700:  { slidesPerView: 2, spaceBetween: 24 },
          1100: { slidesPerView: 3, spaceBetween: 32 },
        },
        grabCursor: true,
        keyboard: { enabled: true },
        navigation: (nextBtn || prevBtn)
          ? { nextEl: nextBtn as HTMLElement, prevEl: prevBtn as HTMLElement }
          : false,
        a11y: { enabled: true },
      });
      return;
    }

    new Swiper(root, {
      modules: [Navigation, Pagination, A11y, Keyboard],
      slidesPerView: 'auto',
      spaceBetween: 32,
      grabCursor: true,
      keyboard: { enabled: true },
      navigation: (nextBtn || prevBtn)
        ? { nextEl: nextBtn as HTMLElement, prevEl: prevBtn as HTMLElement }
        : false,
      a11y: { enabled: true },
    });
  });
}

// ─── statistics deck GSAP ──────────────────────────────────────────────────
function initStatisticsStacking() {
  if (prefersReduced || window.innerWidth < 1024) return;
  const pinSection = document.querySelector<HTMLElement>('.Statistics_statistics__vWlOY');
  if (!pinSection) return;
  const heading = document.querySelector<HTMLElement>('.StatisticsHeading_heading__3C_3F');
  const cardsWrapper = document.querySelector<HTMLElement>('.StatisticsCarousel_panels__pxnru');
  const cards = gsap.utils.toArray<HTMLElement>('.StatisticsCarousel_swiperSlide__is8BS');
  if (cards.length === 0 || !cardsWrapper) return;

  const OFFSET_X = 18; // how far each rear card peeks out to the left
  const OFFSET_Y = 6;  // small downward shift to suggest depth

  gsap.set(cards, { zIndex: (i) => cards.length - i, position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' });

  cards.forEach((card, i) => {
    if (i === 0) return;
    gsap.set(card, { x: -OFFSET_X * i, y: OFFSET_Y * i, opacity: 1 - 0.15 * i, transformOrigin: "center center" });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection,
      start: "top top",
      end: () => `+=${cards.length * 120}%`,
      scrub: 1,
      pin: true,
      pinSpacing: true
    }
  });

  if (heading) {
    // Heading flees DOWNWARD (runs far away) while the card takes its place.
    tl.to(heading, { opacity: 0, scale: 0.35, yPercent: 140, transformOrigin: "center center", duration: 1, ease: "power2.inOut" }, "entrance");
  }

  // Visual buffer freeze
  tl.to({}, { duration: 0.3 }, "entrance");

  cards.forEach((card, i) => {
    if (i === cards.length - 1) return;
    const label = `card-scrub-${i}`;
    // Front card exits by sliding right off-screen
    tl.to(card, { xPercent: 120, opacity: 0, duration: 1.5, ease: "power2.inOut" }, label);
    // Cards behind shuffle one step forward (closer to front)
    cards.forEach((underCard, j) => {
      if (j > i) {
        const newDepth = j - (i + 1);
        tl.to(underCard, { x: -OFFSET_X * newDepth, y: OFFSET_Y * newDepth, opacity: 1 - 0.15 * newDepth, duration: 1.5, ease: "power2.inOut" }, label);
      }
    });
    tl.to({}, { duration: 0.2 });
  });
}

// ─── word-split heading reveal ────────────────────────────────────────────────
function initSplitReveals() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[data-split="words"]').forEach((el) => {
    if (el.dataset.splitReady === 'true') return;
    const words = (el.textContent ?? '').split(/(\s+)/);
    el.textContent = '';
    const spans: HTMLSpanElement[] = [];
    words.forEach((chunk) => {
      if (chunk.trim() === '') {
        el.appendChild(document.createTextNode(chunk));
        return;
      }
      const span = document.createElement('span');
      span.className = 'split-word';
      span.style.display = 'inline-block';
      span.textContent = chunk;
      el.appendChild(span);
      spans.push(span);
    });
    el.dataset.splitReady = 'true';
    gsap.fromTo(
      spans,
      { opacity: 0, y: '0.6em' },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.06, scrollTrigger: { trigger: el, start: 'top 85%', once: true } },
    );
  });
}

// ─── bento grid ─────────────────────────────────────────────────────────────
function initBentoGrid() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[class*="Bento_bentoGrid"]').forEach(grid => {
    const items = gsap.utils.toArray<HTMLElement>(grid.querySelectorAll('[class*="Bento_bento__"]'));
    if (!items.length) return;
    gsap.fromTo(items, 
      { opacity: 0, y: 40, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: grid, start: "top 85%", once: true } }
    );
  });
}

// ─── line by line welcome reveals ──────────────────────────────────────────────
function initLineByLineReveals() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[class*="LineByLine_headingOuter__"]').forEach((el) => {
    // If the element has internal span layers, let's target them or the wrapper directly.
    const innerSpans = Array.from(el.querySelectorAll<HTMLElement>('span'));
    const targets = innerSpans.length ? innerSpans : el;
    
    // Globally unhide them first to override KOTA broken CSS
    gsap.set(targets, { opacity: 1, visibility: 'visible' });

    gsap.fromTo(targets, 
      { opacity: 0, y: 35, rotateX: -10 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: el, start: "top 90%", once: true } }
    );
  });
}

// ─── service rows aesthetic ───────────────────────────────────────────────────
function initAestheticServiceRows() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[class*="TextImageRows_row__"]').forEach(row => {
    const textBlock = row.querySelector<HTMLElement>('[class*="TextImageRows_text__"]');
    const mediaBlock = row.querySelector<HTMLElement>('[class*="TextImageRows_media__"]');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: "top 80%",
        once: true
      }
    });

    if (textBlock) {
      tl.fromTo(textBlock, 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, 0
      );
    }
    
    if (mediaBlock) {
      tl.fromTo(mediaBlock, 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0.2
      );
    }
  });
}

// ─── project cards aesthetic ──────────────────────────────────────────────────
function initAestheticProjectCards() {
  if (prefersReduced) return;
  const projectGrids = document.querySelectorAll<HTMLElement>('[class*="RelatedProjects_relatedProjects__"], [class*="AnimatedGrid_grid__"]');
  projectGrids.forEach(grid => {
    const cards = gsap.utils.toArray<HTMLElement>(grid.querySelectorAll('[class*="ProjectCard_project__"]'));
    if (!cards.length) return;
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 60, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: grid, start: "top 85%", once: true } }
    );
  });
}

// ─── service hero loader ──────────────────────────────────────────────────────
function initServiceHeroAnimation() {
  if (prefersReduced) return;
  const hero = document.querySelector<HTMLElement>('[class*="Hero_hero__"]');
  if (!hero) return;

  const introText = hero.querySelector<HTMLElement>('[class*="Hero_introText__"]');
  const video = hero.querySelector<HTMLElement>('[class*="Hero_video__"]');
  const arrow = document.querySelector<HTMLElement>('[class*="Hero_arrow__"]');
  
  const tl = gsap.timeline();
  if (introText) {
    tl.fromTo(introText, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" });
  }
  
  if (arrow) {
    // Arrow starts facing left (-90deg), rotates to down (0deg) as user scrolls down the landing top
    gsap.fromTo(arrow, 
      { rotation: -90 }, 
      { 
        rotation: 0, 
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=500",
          scrub: 1
        }
      }
    );
  }

  if (video) {
    tl.fromTo(video, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, "-=0.8");
    
    // Slight parallax on scroll
    gsap.to(video, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }
}

// ─── process timeline scrubber ────────────────────────────────────────────────
function initTimelineScrubber() {
  if (prefersReduced || window.innerWidth < 1024) return;
  document.querySelectorAll<HTMLElement>('[class*="Timeline_timeline__"]').forEach(timeline => {
    const scroller = timeline.querySelector<HTMLElement>('[class*="Timeline_scroller__"]');
    if (!scroller) return;

    const scrollAmount = scroller.scrollWidth - window.innerWidth;
    if (scrollAmount <= 0) return;
    
    gsap.to(scroller, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: timeline,
        start: "top top",
        end: () => `+=${scrollAmount}`,
        pin: true,
        scrub: 1,
        pinSpacing: true
      }
    });
  });
}

// ─── services stacking ────────────────────────────────────────────────────────
// Three service cards stack with the visual panel centred in the viewport:
//  - PIN_TOP is computed from the rendered panel height so equal whitespace
//    sits above AND below each pinned card (not flush against the navbar).
//  - The "Our Services" heading fades + slides up before card 1 reaches its
//    pin position, so the title never lingers over a pinned card.
//  - Scale shrinks from `center center` (not `top center`) so the card
//    appears to contract in-place rather than collapse downward.
//  - pinSpacing: false — the 50vh spacer in each card div is the runway.
//  - anticipatePin: 1 kills the 1-frame layout jerk at pin-start.
function initServicesStacking() {
  if (prefersReduced) return;
  const container = document.querySelector<HTMLElement>('.gsap-services-container');
  const cards = gsap.utils.toArray<HTMLElement>('.gsap-service-card');
  if (!container || cards.length === 0) return;

  // Measure the rendered visual panel so we can centre it in the viewport.
  // `.ServicesPanel_panel__YF4OS` is the actual card surface (not the spacer).
  // Fall back to 13 % of viewport if layout hasn't measured yet.
  const firstPanel = cards[0]?.querySelector<HTMLElement>('.ServicesPanel_panel__YF4OS');
  const panelH     = firstPanel?.offsetHeight ?? 0;
  const navH       = 72; // fixed navbar height
  const PIN_TOP    = panelH > 80
    ? Math.max(navH + 16, Math.round((window.innerHeight - panelH) / 2))
    : Math.round(window.innerHeight * 0.13);

  // Fade the "Our Services" heading out before card 1 pins, so the title
  // doesn't sit visible above the first pinned card.
  const heading = document.querySelector<HTMLElement>('.gsap-service-heading');
  if (heading) {
    gsap.to(heading, {
      opacity: 0,
      y: -28,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: cards[0],
        start: 'top 70%',           // begin fade when first card is 70% into view
        end:   `top top+=${PIN_TOP + 60}`, // finish just before card pins
        scrub: 1,
      },
    });
  }

  // Force the spacer height explicitly on every NON-LAST panel so each
  // card gets an equal, predictable scroll runway to pin. KOTA's base rule
  // (40vh) + the grid row-gap were producing cramped, uneven distances —
  // one dial in JS beats fighting CSS specificity across both stylesheets.
  // Setting `setProperty(..., 'important')` so nothing in KOTA's cascade
  // wins, and explicitly clearing any cached height on the parent panel
  // that ScrollTrigger may have locked during a previous refresh.
  const SPACER_PX = Math.round(window.innerHeight * 0.8);
  cards.forEach((card, i) => {
    const spacer = card.querySelector<HTMLElement>('.AnimatedPanel_spacer__w4GTD');
    if (!spacer) return;
    card.style.removeProperty('height');
    card.style.removeProperty('max-height');
    if (i === cards.length - 1) {
      spacer.style.setProperty('height', '0px', 'important');
      spacer.style.setProperty('display', 'none', 'important');
    } else {
      spacer.style.setProperty('height', `${SPACER_PX}px`, 'important');
      spacer.style.setProperty('display', 'block', 'important');
    }
  });

  cards.forEach((card) => {
    (card as HTMLElement).style.willChange = 'transform, opacity';

    ScrollTrigger.create({
      trigger: card,
      start: `top top+=${PIN_TOP}`,
      endTrigger: container,
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });
  });

  // Each card shrinks + fades from its centre as the NEXT card climbs up.
  // For the final card there's no following card inside the stack, so we
  // borrow the very next section (Showcase) as the "arriving" trigger —
  // this gives the last card the identical fade curve as its siblings.
  // The container lives two levels deep inside the section wrapper, so
  // walk up to the section and use *its* next sibling.
  const sectionWrap = container.closest('.gsap-services-section') as HTMLElement | null;
  const afterContainer = sectionWrap?.nextElementSibling as HTMLElement | null;
  cards.forEach((card, i) => {
    const next = (cards[i + 1] as HTMLElement | undefined) ?? afterContainer;
    if (!next) return;
    gsap.to(card, {
      scale: 0.94,
      opacity: 0,
      transformOrigin: 'center center',
      ease: 'none',
      scrollTrigger: {
        trigger: next,
        start: 'top bottom-=8%',
        end: `top top+=${PIN_TOP}`,
        scrub: true,
      },
    });
  });
}

// ─── ethos mouse tracker ──────────────────────────────────────────────────────
function initEthosMouseTracker() {
  if (prefersReduced) return;
  const tracker = document.getElementById('ethos-cursor-tracker');
  const trackerImg = tracker?.querySelector('img');
  if (!tracker || !trackerImg) return;
  const rows = document.querySelectorAll<HTMLElement>('[data-ethos-row]');
  const xTo = gsap.quickTo(tracker, "x", {duration: 0.4, ease: "power3"});
  const yTo = gsap.quickTo(tracker, "y", {duration: 0.4, ease: "power3"});
  let isHovering = false;
  window.addEventListener('mousemove', (e) => { if(!isHovering) return; xTo(e.clientX); yTo(e.clientY); });
  rows.forEach((row) => {
    const nestedImage = row.querySelector('img');
    const imageSrc = nestedImage?.getAttribute('data-src') || nestedImage?.getAttribute('src');
    const revealBox = row.querySelector<HTMLElement>('[data-ethos-image]');
    if (revealBox) revealBox.style.display = 'none';
    row.addEventListener('mouseenter', (e) => {
      isHovering = true;
      if (imageSrc) trackerImg.src = imageSrc;
      gsap.set(tracker, { x: e.clientX, y: e.clientY });
      gsap.to(tracker, { opacity: 1, duration: 0.3 });
    });
    row.addEventListener('mouseleave', () => { isHovering = false; gsap.to(tracker, { opacity: 0, duration: 0.3 }); });
  });
}

// ─── cinematic blur text reveal ───────────────────────────────────────────────
function initCinematicBlurs() {
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[data-blur-reveal]').forEach((el) => {
    if (el.dataset.blurReady === 'true') return;
    const content = el.innerHTML;
    el.innerHTML = '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null);
    let node;
    const textNodes: Text[] = [];
    while ((node = walker.nextNode())) textNodes.push(node as Text);
    textNodes.forEach(textNode => {
      const chars = textNode.textContent?.split('') || [];
      const frag = document.createDocumentFragment();
      chars.forEach(char => {
        if (char === ' ') frag.appendChild(document.createTextNode(' '));
        else {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.className = 'blur-char';
          frag.appendChild(span);
        }
      });
      textNode.parentNode?.replaceChild(frag, textNode);
    });
    el.innerHTML = doc.body.innerHTML;
    el.dataset.blurReady = 'true';
    const charSpans = el.querySelectorAll('.blur-char');
    gsap.fromTo( charSpans, { opacity: 0, scaleX: 1.5, filter: 'blur(8px)', x: 24 }, { opacity: 1, scaleX: 1, filter: 'blur(0px)', x: 0, duration: 0.55, ease: 'power3.out', stagger: 0.008, scrollTrigger: { trigger: el, start: 'top 95%', once: true } } );
  });
}

// ─── hero svg animation ───────────────────────────────────────────────────────
function initHeroSVG() {
  if (prefersReduced) return;
  const groups = ['.rebelLetters', '.againstLetters', '.boringLetters'];
  const tl = gsap.timeline({ delay: 0.2 });
  groups.forEach((selector, i) => {
    const letters = document.querySelectorAll(`${selector} path, ${selector} rect`);
    if (letters.length > 0) tl.fromTo( letters, { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.04 }, i === 0 ? 0 : '-=0.5' );
  });
}

// ─── dark mode header trigger ─────────────────────────────────────────────────
function initDarkModeHeader() {
  const targets = [
    document.querySelector<HTMLElement>('.PrimaryNavigation_page__DgiUM'),
    document.querySelector<HTMLElement>('.Header_header__KwdYD'),
  ].filter((el): el is HTMLElement => !!el);
  if (!targets.length) return;

  const darkSections = gsap.utils.toArray<HTMLElement>('.Work_work__rSI8c, .Statistics_statistics__vWlOY, .Testimonials_testimonials__AMUEx, .Partners_partners__jBo8y, .Articles_articles__Wcz2C, .Faqs_section__bKzN8, .FinalCta_wrapper');

  const setDark = (dark: boolean) => {
    targets.forEach(t => { t.style.filter = dark ? 'invert(1) hue-rotate(180deg)' : 'none'; });
  };

  darkSections.forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 70px",
      end: "bottom 70px",
      onEnter: () => setDark(true),
      onLeave: () => setDark(false),
      onEnterBack: () => setDark(true),
      onLeaveBack: () => setDark(false),
    });
  });
}

// ─── boot ─────────────────────────────────────────────────────────────────────
function main() {
  initLenis();
  initReveals();
  initNav();
  initMarquees();
  initMagnetics();
  initSwipers();
  initSplitReveals();
  initLineByLineReveals();
  initBentoGrid();
  initServiceHeroAnimation();
  initAestheticServiceRows();
  initAestheticProjectCards();
  initTimelineScrubber();
  initServicesStacking();
  initStatisticsStacking();
  initEthosMouseTracker();
  initHeroSVG();
  initCinematicBlurs();
  initDarkModeHeader();
}

if (document.readyState !== 'loading') main();
else document.addEventListener('DOMContentLoaded', main);
