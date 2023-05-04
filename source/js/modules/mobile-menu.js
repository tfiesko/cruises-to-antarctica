const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
const mobilMenuLink = document.querySelectorAll('[data-mobile-menu-link]');

mobileMenuButton.addEventListener('click', ()=>{
  if (mobileMenu.classList.contains('is-open')) {
    onMobilMenuClose();
  } else {
    mobileMenu.classList.add('is-open');
    window.scrollLock.disableScrolling();
    window.focusLock.lock('.page-header');
  }
});

const onMobilMenuClose = ()=>{
  mobileMenu.classList.remove('is-open');
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
};

mobilMenuLink.forEach((link)=>{
  link.addEventListener('click', onMobilMenuClose);
});
