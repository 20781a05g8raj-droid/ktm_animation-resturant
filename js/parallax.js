/* =====================================
   KTM MOMOS — Parallax Engine
===================================== */
(() => {
  const parallaxItems = document.querySelectorAll('[data-parallax]');
  if (!parallaxItems.length) return;

  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    parallaxItems.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
