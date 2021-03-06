const burger = document.querySelector('.burger-menu');
const navBar = document.querySelector('#nav-bar');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', collapseNav);

function collapseNav() {
  burger.classList.toggle('open-nav');
  navBar.classList.toggle('collapse-nav');
  navList.classList.toggle('flexColCenter');
}
