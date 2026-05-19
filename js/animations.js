/* =====================================
   KTM MOMOS — Page-specific animations
===================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Hero letter-by-letter ---------- */
  const heroTitle = document.querySelector('.hero-title[data-split]');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.innerHTML = text
      .split('')
      .map(ch => ch === ' ' ? '<span>&nbsp;</span>' : `<span>${ch}</span>`)
      .join('');
  }

  /* ---------- Menu tabs ---------- */
  const tabs = document.querySelectorAll('.menu-tab');
  const cats = document.querySelectorAll('.menu-category');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      cats.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      document.getElementById(t.dataset.cat).classList.add('active');
    });
  });

  /* ---------- Lightbox & Preview Box ---------- */
  const lightbox = document.querySelector('.lightbox');
  const lbImg    = document.querySelector('.lightbox img');
  const previewImg = document.getElementById('previewImg');
  const previewBox = document.getElementById('galleryPreviewBox');
  
  if (lightbox) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const img = item.querySelector('.gallery-face.front img');
        if(img) {
            lbImg.src = img.src;
            lightbox.classList.add('active');
        }
      });
    });
    lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
  }
  
  // New Preview Box Logic (Triggered even on the flipped back face)
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const img = item.querySelector('.gallery-face.front img');
      if(img && previewImg) {
        previewImg.style.opacity = '0';
        setTimeout(() => {
          previewImg.src = img.src;
          previewImg.style.opacity = '1';
        }, 200);
        
        // Scroll to preview box smoothly
        if(previewBox) {
            previewBox.scrollIntoView({behavior: "smooth", block: "center"});
        }
      }
    });
  });

  /* ---------- Count-up (reviews page) ---------- *//* ---------- Count-up (reviews page) ---------- */
  const counter = document.querySelector('[data-count]');
  if (counter) {
    const target = parseFloat(counter.dataset.count);
    let started = false;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting && !started) {
          started = true;
          const duration = 2000;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const val = (target * (1 - Math.pow(1 - p, 3))).toFixed(1);
            counter.textContent = val;
            if (p < 1) requestAnimationFrame(step);
            else {
              // fill the stars after count-up
              document.querySelector('.stars-row')?.classList.add('filled');
            }
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(counter);
  }

});
