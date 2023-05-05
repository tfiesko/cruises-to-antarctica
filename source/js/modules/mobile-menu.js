const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
const mobilMenuLink = document.querySelectorAll('[data-nav-link]');

mobileMenuButton.addEventListener('click', ()=>{
  if (mobileMenu.classList.contains('is-open')) {
    onMobilMenuClose();
    mobilMenuLink.forEach((link)=>{
      link.removeEventListener('click', onMobilMenuClose);
    });
  } else {
    mobileMenu.classList.add('is-open');
    window.scrollLock.disableScrolling();
    window.focusLock.lock('.page-header');
    if (mobilMenuLink) {
      mobilMenuLink.forEach((link)=>{
        link.addEventListener('click', onMobilMenuClose);
      });
    }
  }
});

const onMobilMenuClose = ()=>{
  mobileMenu.classList.remove('is-open');
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
};
