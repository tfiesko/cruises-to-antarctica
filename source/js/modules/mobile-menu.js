const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
const mobilMenuLink = document.querySelectorAll('[data-nav-link]');

if (mobileMenu) {
  mobileMenuButton.addEventListener('click', ()=>{
    if (mobileMenu.classList.contains('is-open')) {
      onMobilMenuClose();
    } else {
      mobileMenu.classList.add('is-open');
      window.scrollLock.disableScrolling();
      window.focusLock.lock('.page-header');
      document.addEventListener('keydown', onEscapeKeydown);
      if (mobilMenuLink) {
        mobilMenuLink.forEach((link)=>{
          link.addEventListener('click', onMobilMenuClose);
        });
      }
    }
  });
}

const onMobilMenuClose = ()=>{
  mobileMenu.classList.remove('is-open');
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
  document.removeEventListener('keydown', onEscapeKeydown);
  if (mobilMenuLink) {
    mobilMenuLink.forEach((link)=>{
      link.removeEventListener('click', onMobilMenuClose);
    });
  }
};

const onEscapeKeydown = (evt)=>{
  if (evt.key === 'Escape') {
    onMobilMenuClose();
  }
};
