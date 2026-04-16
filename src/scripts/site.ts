import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
// Class-prefix selectors match the stylesheet's hashed module classes.
const REVEAL_DEFAULTS = {
  trigger: 'top 85%',
  duration: 1.0,
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
  revealFrom('[class*="FadeInUp_container"]', { opacity: 0, y: 60 }, { duration: 1.1 });
  revealFrom('[class*="FadeIn_container"]', { opacity: 0 }, { duration: 0.9 });
  revealFrom('[class*="ImageEnter_image"]', { opacity: 0, scale: 1.08 }, { duration: 1.4 });
  revealFrom('[class*="AnimatedPanel_panel"]', { opacity: 0, y: 40 }, { duration: 1.0 });

  // Stagger children of AnimatedGrid
  if (prefersReduced) return;
  document.querySelectorAll<HTMLElement>('[class*="AnimatedGrid_grid"]').forEach((grid) => {
    const items = Array.from(grid.children) as HTMLElement[];
    if (!items.length) return;
    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
      },
    );
  });
}

// ─── navigation flyout ────────────────────────────────────────────────────────
// CSS state classes harvested from the stylesheet:
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
    // Duplicate content once so looping has no gap
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
  // Testimonials-style carousel: generic .swiper targeting
  document.querySelectorAll<HTMLElement>('.swiper').forEach((root) => {
    const hasNav = !!root.querySelector('[class*="swiperNav"]') || !!root.querySelector('.swiper-button-next');
    new Swiper(root, {
      modules: [Navigation, Pagination, A11y, Keyboard],
      slidesPerView: 'auto',
      spaceBetween: 32,
      grabCursor: true,
      keyboard: { enabled: true },
      navigation: hasNav
        ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
        : false,
      a11y: { enabled: true },
    });
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
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      },
    );
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
}

if (document.readyState !== 'loading') main();
else document.addEventListener('DOMContentLoaded', main);
