var burger = document.querySelector('.burger');
var panel = document.getElementById('mobile-panel');
if (burger && panel){
  burger.addEventListener('click', function(){
    var open = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
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