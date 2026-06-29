// Language Switcher
const langBtns = document.querySelectorAll('.lang-btn');
const currentLang = localStorage.getItem('language') || 'en';

// Set initial language on page load
document.documentElement.lang = currentLang;
updateLanguage(currentLang);
langBtns.forEach(btn => {
  if (btn.dataset.lang === currentLang) {
    btn.classList.add('active');
  }
});

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateLanguage(lang);
    
    // Update active button
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

function updateLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(element => {
    const text = element.dataset[lang];
    if (text) {
      // Handle HTML content (like <br/> tags)
      if (text.includes('<br')) {
        element.innerHTML = text.replace(/&lt;br\/?&gt;/g, '<br/>');
      } else {
        element.textContent = text;
      }
    }
  });
}

// Sticky navbar border on scroll
  const navbar = document.getElementById('navbar');
  const heroPhone = document.getElementById('heroPhone');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 10) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Parallax on hero phone
    if (heroPhone && y < window.innerHeight) {
      heroPhone.style.transform = `translateY(${y * 0.25}px) scale(${1 - y * 0.0003})`;
    }
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
