/* ============================================================
   HAFENRATTENSAGA - main.js
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --- Smooth Scroll --- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    if (prefersReducedMotion) {
      target.scrollIntoView();
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* --- Sticky Nav --- */
const nav = document.querySelector('.nav');
const hero = document.querySelector('#hero');

const navObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle('opaque', !entry.isIntersecting),
  { threshold: 0.1 }
);
if (hero) navObserver.observe(hero);

/* --- Scroll Indicator --- */
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator && !prefersReducedMotion) {
  window.addEventListener('scroll', () => {
    scrollIndicator.classList.toggle('hidden', window.scrollY > 200);
  }, { passive: true });
}

/* --- Hamburger Menu --- */
const burger = document.querySelector('.nav-burger');
const overlay = document.querySelector('.nav-overlay');

function closeMenu() {
  burger?.classList.remove('open');
  overlay?.classList.remove('open');
  document.body.style.overflow = '';
}

burger?.addEventListener('click', () => {
  const open = overlay.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

overlay?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (lightboxOverlay?.classList.contains('open')) return closeLightbox();
  closeMenu();
});

/* --- Lightbox --- */
const lightboxOverlay = document.querySelector('.lightbox-overlay');
const lightboxImg = document.querySelector('.lightbox-overlay img');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => {
    if (!lightboxOverlay) return;
    const src = el.dataset.lightbox;
    const alt = el.dataset.lightboxAlt || '';
    if (lightboxImg) { lightboxImg.src = src; lightboxImg.alt = alt; }
    lightboxOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightboxOverlay?.addEventListener('click', e => {
  if (e.target === lightboxOverlay) closeLightbox();
});

function closeLightbox() {
  lightboxOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

/* --- Fade-in on Scroll --- */
if (!prefersReducedMotion) {
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );
  fadeEls.forEach(el => fadeObserver.observe(el));
} else {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

/* --- Newsletter Form --- */
const nlForm = document.querySelector('.nl-form');
const nlSuccess = document.querySelector('.nl-success');

nlForm?.addEventListener('submit', e => {
  e.preventDefault();
  nlForm.style.display = 'none';
  if (nlSuccess) nlSuccess.style.display = 'block';
});
