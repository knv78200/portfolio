var burger = document.querySelector('.burger');
var panel = document.getElementById('mobile-panel');
if (burger && panel){
  burger.addEventListener('click', function(){
    var open = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  panel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      panel.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Apparition en cascade au defilement
if ('IntersectionObserver' in window) {
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el){ revealObserver.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
}

// Statut ouvert / ferme (Lun-Ven 6h-22h, Sam 8h-18h, Dim 9h-13h)
(function(){
  var pills = document.querySelectorAll('.status-pill[data-status]');
  if (!pills.length) return;
  var now = new Date();
  var day = now.getDay();
  var hour = now.getHours() + now.getMinutes() / 60;
  var open = false;
  if (day >= 1 && day <= 5) { open = hour >= 6 && hour < 22; }
  else if (day === 6) { open = hour >= 8 && hour < 18; }
  else if (day === 0) { open = hour >= 9 && hour < 13; }
  var label = open ? 'Salle ouverte' : 'Salle fermée';
  pills.forEach(function(pill){
    pill.classList.add(open ? 'open' : 'closed');
    var text = pill.querySelector('.status-text');
    if (text) text.textContent = label;
  });
})();

// Compteurs animes
var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function animateCount(el){
  var target = parseInt(el.getAttribute('data-target'), 10);
  if (reduceMotion || isNaN(target)) { el.textContent = target; return; }
  var duration = 1100, start = null;
  function step(ts){
    if (!start) start = ts;
    var progress = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}
if ('IntersectionObserver' in window) {
  var countObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat .count[data-target]').forEach(function(el){ countObserver.observe(el); });
} else {
  document.querySelectorAll('.stat .count[data-target]').forEach(function(el){ el.textContent = el.getAttribute('data-target'); });
}

// Tilt 3D + spotlight (souris fine uniquement)
var pointerFine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
if (pointerFine && !reduceMotion) {
  document.querySelectorAll('.card, .avis-card, .price-card, .photoblock').forEach(function(el){
    el.classList.add('tilt');
    el.addEventListener('mousemove', function(e){
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', (px * 100) + '%');
      el.style.setProperty('--my', (py * 100) + '%');
    });
  });
}
