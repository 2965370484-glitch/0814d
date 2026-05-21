/* ========== Render Category Cards ========== */
(function() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;

  const categories = Object.values(portfolioData);

  function countItems(cat) {
    if (cat.items) return cat.items.length;
    if (cat.groups) return cat.groups.reduce((sum, g) => sum + g.items.length, 0);
    return 0;
  }

  function getThumbHTML(cat) {
    const f = cat.featured;
    if (!f) return '<div class="category-card-thumb placeholder">' + cat.icon + '</div>';

    if (f.type === 'video' && f.src) {
      return `<div class="category-card-thumb"><video src="${f.src}" preload="metadata" muted loop playsinline></video></div>`;
    }
    if ((f.type === 'image') && f.src) {
      return `<img class="category-card-thumb" src="${f.src}" alt="${f.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`;
    }
    return '<div class="category-card-thumb placeholder">' + cat.icon + '</div>';
  }

  grid.innerHTML = categories.map(cat => {
    const total = countItems(cat);
    const f = cat.featured;
    const featHTML = f ? `
      <div class="category-card-featured">
        <div class="feat-label">FEATURED</div>
        <div class="feat-title">${f.title}</div>
        <div class="feat-desc">${f.desc}</div>
      </div>` : '';

    return `
      <a class="category-card" href="category.html?type=${cat.id}&from=works">
        ${getThumbHTML(cat)}
        <div class="category-card-body">
          <div class="cat-icon">${cat.icon}</div>
          <h3>${cat.name}</h3>
          <p>${cat.desc}</p>
          <span class="cat-count">${total} 个作品 &#8594;</span>
          ${featHTML}
        </div>
      </a>`;
  }).join('');

  // Hover effect: play video on category card thumbnails
  grid.querySelectorAll('.category-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    card.addEventListener('mouseenter', function() {
      video.currentTime = 0;
      video.play().catch(function() {});
    });
    card.addEventListener('mouseleave', function() {
      video.pause();
    });
  });
})();

/* ========== Hero Particles ========== */
(function() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.classList.add('hero-particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = (6 + Math.random() * 10) + 's';
    p.style.opacity = (0.1 + Math.random() * 0.4);
    const size = (1 + Math.random() * 3);
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    container.appendChild(p);
  }
})();

/* ========== Nav Scroll Effect ========== */
(function() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    nav.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.3)' : 'none';
  });
})();

/* ========== Mobile Nav Toggle ========== */
(function() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function() {
    links.classList.toggle('open');
    this.innerHTML = links.classList.contains('open') ? '&#10005;' : '&#9776;';
  });
  links.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { links.classList.remove('open'); toggle.innerHTML = '&#9776;'; });
  });
})();

/* ========== Smooth Scroll ========== */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});
