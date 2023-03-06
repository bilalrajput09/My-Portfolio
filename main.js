const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#mobile_menu_container');
const close = document.querySelector('.close');

function showMenu() {
  mobileMenu.classList.remove('hide');
}
function closeMenu() {
  mobileMenu.classList.add('hide');
}

hamburger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);