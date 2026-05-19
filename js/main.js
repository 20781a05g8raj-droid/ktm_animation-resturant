/* =====================================
   KTM MOMOS — Shared main.js
   Navbar | Cursor | Progress | Particles
===================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Scroll progress bar ---------- */
  const progress = document.querySelector('.scroll-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      progress.style.width = pct + '%';
    });
  }

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    }));
  }

  /* ---------- Custom momo cursor ---------- */
  const cursor = document.querySelector('.cursor');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    const animate = () => {
      cx += (mx - cx) * 0.2;
      cy += (my - cy) * 0.2;
      cursor.style.transform = `translate(${cx - 15}px, ${cy - 15}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    document.querySelectorAll('a, button, .dish-card, .gallery-item, .btn, .menu-tab, input, textarea')
      .forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
      });
  }

  /* ---------- Global floating spice particles ---------- */
  const pc = document.querySelector('.global-particles');
  if (pc) {
    const shapes = [
      // chili
      `<svg width="20" height="20" viewBox="0 0 24 24" fill="#C0392B"><path d="M8 2s4 0 6 2 4 6 4 10-2 8-6 8-8-4-8-8 0-10 4-12z"/></svg>`,
      // star
      `<svg width="16" height="16" viewBox="0 0 24 24" fill="#F5A623"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>`,
      // coriander
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="#2ecc71"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="10" r="3"/><circle cx="12" cy="16" r="4"/></svg>`,
      // star anise
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="#FF6B35"><path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>`
    ];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.innerHTML = shapes[i % shapes.length];
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top  = Math.random() * 100 + 'vh';
      p.style.animationDuration = (20 + Math.random() * 30) + 's';
      p.style.animationDelay = (-Math.random() * 20) + 's';
      pc.appendChild(p);
    }
  }

  /* ---------- Page transition wipe on link click ---------- */
  const wipe = document.querySelector('.page-wipe');
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('tel:') ||
        href.startsWith('mailto:') || href.startsWith('http') ||
        link.target === '_blank') return;
    link.addEventListener('click', e => {
      if (!wipe) return;
      e.preventDefault();
      wipe.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 450);
    });
  });

  /* ---------- Intersection Observer reveals ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .dish-card, .gallery-item, .timeline, .timeline-item, .quote-block, .about-text p'
  ).forEach(el => io.observe(el));

  /* ---------- Button ripple ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const r = this.getBoundingClientRect();
      const rip = document.createElement('span');
      rip.className = 'ripple';
      const size = Math.max(r.width, r.height);
      rip.style.width = rip.style.height = size + 'px';
      rip.style.left = (e.clientX - r.left - size / 2) + 'px';
      rip.style.top  = (e.clientY - r.top  - size / 2) + 'px';
      this.appendChild(rip);
      setTimeout(() => rip.remove(), 800);
    });
  });

  /* ---------- Bokeh particles injector ---------- */
  document.querySelectorAll('[data-bokeh]').forEach(host => {
    for (let i = 0; i < 20; i++) {
      const b = document.createElement('div');
      b.className = 'bokeh';
      const s = 3 + Math.random() * 10;
      b.style.width = b.style.height = s + 'px';
      b.style.left = Math.random() * 100 + '%';
      b.style.bottom = '-20px';
      b.style.animationDuration = (8 + Math.random() * 10) + 's';
      b.style.animationDelay = (-Math.random() * 10) + 's';
      host.appendChild(b);
    }
  });

});
