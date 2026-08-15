/* Reveal-on-scroll: 自动观察页面内 .reveal / .reveal-up 元素（含 JS 动态渲染的卡片） */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-up').forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  function scan() {
    document.querySelectorAll('.reveal:not(.in), .reveal-up:not(.in)').forEach(function (el) { io.observe(el); });
  }
  scan();
  var mo = new MutationObserver(function () { scan(); });
  mo.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('load', scan);
})();
