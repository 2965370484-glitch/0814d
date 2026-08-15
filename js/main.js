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
      <a class="category-card reveal" href="category.html?type=${cat.id}&from=works">
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

  // Hover autoplay removed (Option A): cards show first frame only; video plays on click.
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
    nav.classList.toggle('scrolled', window.scrollY > 50);
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

/* ========== Scrollspy (nav highlight) ========== */
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = links
    .map(function (a) { var h = a.getAttribute('href'); return (h && h.charAt(0) === '#') ? document.querySelector(h) : null; })
    .filter(Boolean);
  if (!sections.length) return;
  function spy() {
    var pos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s; });
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
    });
  }
  window.addEventListener('scroll', spy, { passive: true });
  spy();
})();

/* ========== Back to top ========== */
(function () {
  var btn = document.getElementById('toTop');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('show', window.scrollY > 420);
  }, { passive: true });
  btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();

/* ========== Remember homepage scroll position before entering a subpage ========== */
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[href*="category.html"]');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  var fromHero = /[?&]from=hero\b/.test(href);
  // 从 hero 标签进入 → 回到首页顶部；从作品卡片进入 → 记住当前滚动位置
  sessionStorage.setItem('portfolioHomeScroll', fromHero ? 0 : Math.round(window.scrollY));
});

/* ========== Restore homepage scroll position when returning from a subpage ========== */
(function () {
  var key = 'portfolioHomeScroll';
  var raw = sessionStorage.getItem(key);
  if (raw === null) return;
  var y = parseInt(raw, 10) || 0;
  sessionStorage.removeItem(key);
  var html = document.documentElement;
  var prev = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      window.scrollTo(0, y);
      html.style.scrollBehavior = prev;
    });
  });
})();
