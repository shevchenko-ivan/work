// Ivan Shevchenko — portfolio motion
// Staggers list items (cards / pillars / facts / outcomes) in as they scroll
// into view. Each item is observed on its own, so tall grids never sit
// half-hidden waiting for a group threshold. Without JS, or with reduced
// motion, nothing is ever hidden (see the .js-scoped rules in main.css).

(function () {
  if (!('IntersectionObserver' in window)) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var groups = document.querySelectorAll(
    '.cases, .pillars, .facts, .case-facts, .outcomes, .related, .landing__grid'
  );
  var items = [];

  groups.forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (el, i) {
      el.classList.add('reveal-item');
      el.style.setProperty('--i', i % 4); // short stagger inside a row
      items.push(el);
    });
  });
  if (!items.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('reveal-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  items.forEach(function (el) { io.observe(el); });

  // printing never scrolls, so reveal everything first
  window.addEventListener('beforeprint', function () {
    items.forEach(function (el) { el.classList.add('reveal-in'); });
  });
})();
