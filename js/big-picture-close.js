export const closePopUp = function (bigPicture) {

  const iconClose = bigPicture.querySelector('.big-picture__cancel');
  iconClose.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') { // ESC
      bigPicture.classList.add('hidden');
    }
  });
};
