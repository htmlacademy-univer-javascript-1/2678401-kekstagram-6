import {generatePhotoList} from './main.js';
import {renderBigPicture} from './big-picture.js';

const addPictureClickHandler = function (pictureElement, picture) {
  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderBigPicture(picture);
  });
};

const renderPictures = function (picturesData) {

  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  // Создаём DocumentFragment для оптимизации вставки
  const fragment = document.createDocumentFragment();

  picturesData.forEach((picture) => {
    // Клонируем шаблон с дочерними элементами
    const pictureElement = pictureTemplate.cloneNode(true);

    const img = pictureElement.querySelector('.picture__img');
    img.src = picture.url;
    img.alt = picture.description;

    const likesElement = pictureElement.querySelector('.picture__likes');
    likesElement.textContent = picture.likes;

    const commentsElement = pictureElement.querySelector('.picture__comments');
    commentsElement.textContent = picture.comments.length;

    addPictureClickHandler(pictureElement, picture);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

const photoList = generatePhotoList();
renderPictures(photoList);
