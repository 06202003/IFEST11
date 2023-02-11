var nav = document.querySelector('nav');
var logo = document.getElementById('logo');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bgnav', 'shadow');
    if (logo && logo.style) {
      logo.style.height = '75px';
      logo.style.width = '75px';
    }
  } else {
    nav.classList.remove('bgnav', 'shadow');
    if (logo && logo.style) {
      logo.style.height = '150px';
      logo.style.width = '150px';
    }
  }
});
