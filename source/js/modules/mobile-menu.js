const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');

mobileMenuButton.addEventListener('click', ()=>{
  if (mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
    window.scrollLock.enableScrolling();
  } else {
    mobileMenu.classList.add('is-open');
    window.scrollLock.disableScrolling();
  }
});
