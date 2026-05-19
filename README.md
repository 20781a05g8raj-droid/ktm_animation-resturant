# 🥟 KTM Momos — Restaurant Website

**Bihar Ka Sabse Dhamakedaar Momo Experience**

A fully-animated, immersive multi-page restaurant website for **KTM Momos** — built with pure HTML, CSS & vanilla JavaScript. No framework, no build step, no dependencies. Just open `index.html` in a browser.

---

## 📁 Project Structure

```
ktm-momos/
├── index.html           ← 🏠 Home (Hero landing)
├── menu.html            ← 🍽️  Full menu with tabs
├── gallery.html         ← 📸 Masonry gallery + lightbox
├── reviews.html         ← ⭐ 4.8★ counter + marquee
├── about.html           ← 📍 Story + timeline
├── contact.html         ← 📞 Contact + map + form
├── css/
│   ├── style.css        ← Main stylesheet
│   └── animations.css   ← Keyframes & reveals
├── js/
│   ├── main.js          ← Navbar, cursor, particles, progress bar
│   ├── parallax.js      ← Scroll parallax engine
│   └── animations.js    ← Letter split, tabs, lightbox, counter
└── README.md
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0D0A08` Deep charcoal |
| Primary Accent | `#F5A623` Saffron gold |
| Secondary | `#C0392B` Deep crimson |
| Text | `#FDF6EC` Warm ivory |
| Glow | `#FF6B35` Ember orange |
| Headings | Playfair Display (serif) |
| Body | Poppins |
| Signatures | Kalam (handwritten) |

---

## ✨ Animations Implemented

- ✅ Letter-by-letter hero title reveal
- ✅ Typewriter subtext
- ✅ 3D rotating momo SVG (20s loop)
- ✅ Animated steam paths (`stroke-dashoffset`)
- ✅ Floating SVG chilies, stars, spice particles
- ✅ Multi-layer parallax on scroll
- ✅ 3D card tilt on menu items (`perspective + rotateX/Y`)
- ✅ Shimmer animation on price badges
- ✅ Masonry staggered entrance (Intersection Observer)
- ✅ 3D flip cards in gallery (`rotateY(180deg)`)
- ✅ Lightbox with scale-in
- ✅ Count-up animation for 4.8 ★
- ✅ Infinite marquee for reviews (pause on hover)
- ✅ Glassmorphism review cards with shimmer
- ✅ Star fill animation on scroll-into-view
- ✅ SVG timeline line drawing
- ✅ Brush-stroke SVG underlines
- ✅ Rotating mandala background
- ✅ Location pin drop-bounce
- ✅ Flame SVG hover on Order button
- ✅ Custom momo cursor (mix-blend-mode: difference)
- ✅ Scroll progress bar (saffron gradient)
- ✅ Page-transition wipe between pages
- ✅ Ripple effect on buttons

---

## 🚀 How to Run

**Option 1 — Open directly:**
Just double-click `index.html` in any modern browser.

**Option 2 — Local server (recommended for videos/fonts):**
```bash
cd ktm-momos
python3 -m http.server 8000
# open http://localhost:8000
```

**Option 3 — Deploy:**
Upload the entire folder to Netlify, Vercel, GitHub Pages or any static host. Zero config.

---

## 📱 Responsive

- Desktop (1280 +)
- Tablet (900 – 1280)
- Mobile (< 900): hamburger menu, 1-column grids, disabled heavy 3D effects for performance.

---

## 📞 Restaurant Info

- **Name:** KTM Momos
- **Address:** Adapur Road, Near Saraswati Vidya Mandir School, Raxaul, Bihar 845305
- **Phone:** +91 91025 13769
- **Rating:** 4.8 ⭐ (166 reviews)
- **Price:** ₹200 – 400 per person
- **Hours:** Open daily till 11:00 PM

---

Made with ❤️ in Raxaul.
