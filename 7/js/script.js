let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let headerMain = document.querySelector('.header');

headerMain.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
