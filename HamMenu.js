const menuToggle = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuContainer.classList.toggle('menu-visible');
});
