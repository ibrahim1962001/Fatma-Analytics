// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function setNavOpen(isOpen) {
  navToggle.classList.toggle('active', isOpen);
  navLinks.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('menu-open', isOpen);
}

navToggle.addEventListener('click', () => {
  setNavOpen(!navLinks.classList.contains('active'));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setNavOpen(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('active')) {
    setNavOpen(false);
    navToggle.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
    setNavOpen(false);
  }
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    header.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
  lastScroll = currentScroll;
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.impact-card, .service-card, .project-card, .timeline-item, .cert-card, .rec-card, .highlight-card, .tool-item, .stat, .process-card, .faq-item, .client-badge'
).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 8) * 0.07}s`;
  observer.observe(el);
});

// Contact form — opens Gmail compose with pre-filled content
const contactForm = document.getElementById('contactForm');
const GMAIL_TO = 'fatmaalshall2000@gmail.com';

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const body = `From: ${email}\n\n${message}`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(GMAIL_TO)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, '_blank');

  const toast = document.getElementById('formToast');
  if (toast) {
    toast.hidden = false;
    setTimeout(() => { toast.hidden = true; }, 6000);
  }
});
}

// Fallback for broken dashboard preview images
document.querySelectorAll('.project-preview img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    img.parentElement.classList.add('project-preview--fallback');
  });
});
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.style.color = '';
    if (item.getAttribute('href') === `#${current}`) {
      item.style.color = 'var(--accent)';
    }
  });
});
