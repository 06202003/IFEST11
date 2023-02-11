var nav = document.querySelector('nav');
var logo = document.getElementById('logo');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bgnav', 'shadow');
  } else {
    nav.classList.remove('bgnav', 'shadow');
  }
});
