// Ivan Shevchenko — portfolio motion
// Reveals list groups (cards / pillars / facts / outcomes) as they scroll in.
// Classes are added by JS, so content is fully visible when JS is off.

(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var groups = document.querySelectorAll(
    '.cases, .pillars, .facts, .case-facts, .outcomes, .related, .landing__grid'
  );
  if (!groups.length) return;

  var all = [];
  groups.forEach(function (group) {
    var kids = group.children;
    for (var i = 0; i < kids.length; i++) {
      kids[i].classList.add('reveal-item');
      kids[i].style.setProperty('--i', i % 6); // cap stagger so long lists stay snappy
      all.push({ group: group, el: kids[i] });
    }
  });

  function show(group) {
    var kids = group.children;
    for (var i = 0; i < kids.length; i++) kids[i].classList.add('reveal-in');
  }

  if (!('IntersectionObserver' in window)) {
    groups.forEach(show);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        show(e.target);
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

  groups.forEach(function (g) { io.observe(g); });

  // safety net — never leave a section hidden (hidden tabs, paused
  // transitions in headless renderers, no scroll, etc.)
  setTimeout(function () {
    groups.forEach(show);
    document.documentElement.classList.add('anim-settled');
  }, 2500);
})();
