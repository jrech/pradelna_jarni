import { animate, inView } from 'motion';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOTION = {
  easeOut: [0.23, 1, 0.32, 1],
  imageEase: [0.77, 0, 0.175, 1],
  revealDuration: 0.42,
  revealMargin: '0px 0px -15% 0px',
  imageDuration: 0.72,
  imageMargin: '0px 0px -12% 0px',
  stagger: 0.05,
};
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menu.toggleAttribute('data-open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menu.removeAttribute('data-open');
    document.body.classList.remove('menu-open');
  }));
}

if (!reducedMotion) {
  document.documentElement.classList.add('motion-ready');

  const heroImage = document.querySelector('[data-hero-image]');
  const heroTitle = document.querySelector('[data-hero-title]');
  const heroIntroCopy = document.querySelector('[data-hero-intro-copy]');
  const heroIntroLink = document.querySelector('[data-hero-intro-link]');

  if (heroImage && heroTitle && heroIntroCopy && heroIntroLink) {
    animate(heroImage, { opacity: [0, 1], clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'] }, {
      duration: MOTION.imageDuration,
      easing: MOTION.imageEase,
    });
    animate(heroTitle, { opacity: [0, 1], transform: ['translateY(-24px)', 'translateY(0)'] }, {
      delay: 0.2,
      duration: 0.42,
      easing: MOTION.easeOut,
    });
    animate(heroIntroCopy, { opacity: [0, 1], transform: ['translateY(-18px)', 'translateY(0)'] }, {
      delay: 0.4,
      duration: 0.36,
      easing: MOTION.easeOut,
    });
    animate(heroIntroLink, { opacity: [0, 1], transform: ['translateY(-18px)', 'translateY(0)'] }, {
      delay: 0.6,
      duration: 0.3,
      easing: MOTION.easeOut,
    });
  }

  const revealElement = (element) => {
    const staggered = element.hasAttribute('data-reveal-stagger');
    const revealFrom = element.hasAttribute('data-reveal-down') ? '-14px' : '14px';
    const customDelay = Number.parseFloat(element.getAttribute('data-reveal-delay') || '0');
    const siblings = staggered
      ? [...element.parentElement.querySelectorAll('[data-reveal-stagger]')]
      : [];
    const delay = customDelay + (staggered ? Math.max(0, siblings.indexOf(element)) * MOTION.stagger : 0);

    animate(element, { opacity: [0, 1], transform: [`translateY(${revealFrom})`, 'translateY(0)'] }, {
      duration: MOTION.revealDuration,
      delay,
      easing: MOTION.easeOut,
    });
  };

  inView('[data-reveal]:not([data-reveal-early])', revealElement, { margin: MOTION.revealMargin });
  inView('[data-reveal-early]', revealElement, { margin: '0px 0px -5% 0px' });

  inView('[data-image-reveal]', (element) => {
    animate(element, { clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'] }, {
      duration: MOTION.imageDuration,
      easing: MOTION.imageEase,
    });
    const image = element.querySelector('img');
    if (image) animate(image, { transform: ['scale(1.025)', 'scale(1)'] }, { duration: 0.8, easing: MOTION.easeOut });
  }, { margin: MOTION.imageMargin });
}

const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack && !reducedMotion) {
  const marqueeObserver = new IntersectionObserver(([entry]) => {
    marqueeTrack.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
  }, { threshold: 0 });

  marqueeObserver.observe(marqueeTrack);
}

const audienceSection = document.querySelector('[data-audience]');
if (audienceSection && !reducedMotion) {
  const audienceItems = [...audienceSection.querySelectorAll('[data-audience-item]')];
  let audienceFrame = 0;

  const updateAudience = () => {
    audienceFrame = 0;
    if (window.innerWidth <= 700) return;

    const rect = audienceSection.getBoundingClientRect();
    const scrollable = Math.max(audienceSection.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
    const activeIndex = Math.min(audienceItems.length - 1, Math.floor(progress * audienceItems.length));

    audienceItems.forEach((item, index) => item.toggleAttribute('data-active', index === activeIndex));
  };

  const requestAudienceUpdate = () => {
    if (audienceFrame) return;
    audienceFrame = window.requestAnimationFrame(updateAudience);
  };

  updateAudience();
  window.addEventListener('scroll', requestAudienceUpdate, { passive: true });
  window.addEventListener('resize', requestAudienceUpdate);
}

const processSection = document.querySelector('[data-process]');
if (processSection && !reducedMotion) {
  const processSteps = [...processSection.querySelectorAll('[data-process-step]')];
  const processImages = [...processSection.querySelectorAll('[data-process-image]')];
  let processFrame = 0;

  const updateProcess = () => {
    processFrame = 0;
    const rect = processSection.getBoundingClientRect();
    const scrollable = Math.max(processSection.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
    const activeIndex = Math.min(processSteps.length - 1, Math.floor(progress * processSteps.length));

    processSection.style.setProperty('--process-progress', String(progress));
    processSteps.forEach((step, index) => step.toggleAttribute('data-active', index <= activeIndex));
    processImages.forEach((image, index) => image.toggleAttribute('data-active', index === activeIndex));
  };

  const requestProcessUpdate = () => {
    if (processFrame) return;
    processFrame = window.requestAnimationFrame(updateProcess);
  };

  updateProcess();
  window.addEventListener('scroll', requestProcessUpdate, { passive: true });
  window.addEventListener('resize', requestProcessUpdate);
}

const footer = document.querySelector('.site-footer');
const footerSignature = document.querySelector('[data-footer-parallax]');
if (footer && footerSignature && !reducedMotion) {
  let footerFrame = 0;

  const updateFooterParallax = () => {
    footerFrame = 0;
    const progress = Math.min(1, Math.max(0, (
      window.scrollY + window.innerHeight - footer.offsetTop
    ) / Math.max(footer.offsetHeight, 1)));
    footerSignature.style.transform = `translate3d(0, ${(1 - progress) * 160}px, 0)`;
  };

  const requestFooterParallax = () => {
    if (footerFrame) return;
    footerFrame = window.requestAnimationFrame(updateFooterParallax);
  };

  updateFooterParallax();
  window.addEventListener('scroll', requestFooterParallax, { passive: true });
  window.addEventListener('resize', requestFooterParallax);
}

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const subject = `Poptávka z webu — ${data.get('firma') || data.get('jmeno')}`;
    const body = [
      `Jméno: ${data.get('jmeno')}`,
      `Firma: ${data.get('firma') || 'neuvedeno'}`,
      `Telefon: ${data.get('telefon')}`,
      `E-mail: ${data.get('email')}`,
      '',
      String(data.get('zprava')),
    ].join('\n');
    window.location.href = `mailto:obchod@pradelnajarni.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
