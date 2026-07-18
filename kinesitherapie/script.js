var burger = document.querySelector('.burger');
var panel = document.getElementById('mobile-panel');
if (burger && panel){
  burger.addEventListener('click', function(){
    var open = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}