var nav = document.querySelector('nav');
var logo = document.getElementById('logo');
var teksnav = document.getElementById('tekshaha');
var teksnav1 = document.getElementById('tekshaha1');
var teksnav2 = document.getElementById('tekshaha2');
var teksnav3 = document.getElementById('tekshaha3');
var teksnav4 = document.getElementById('tekshaha4');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bgnav', 'shadow');
    teksnav.style.color = 'white';
    teksnav1.style.color = 'white';
    teksnav2.style.color = 'white';
    teksnav3.style.color = 'white';
    teksnav4.style.color = 'white';
  } else {
    nav.classList.remove('bgnav', 'shadow');
    teksnav.style.color = 'black';
    teksnav1.style.color = 'black';
    teksnav2.style.color = 'black';
    teksnav3.style.color = 'black';
    teksnav4.style.color = 'black';
  }
});
