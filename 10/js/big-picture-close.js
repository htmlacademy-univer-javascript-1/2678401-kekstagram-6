export const closePopUp = function (bigPicture) {

  const iconClose = bigPicture.querySelector('.big-picture__cancel');
  iconClose.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    const body = document.querySelector('.body');
    body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') { // ESC
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      const body = document.querySelector('.body');
      body.classList.remove('modal-open');
    }
  });
};
