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
