import {generatePhotoList} from './main.js';

const renderPictures = function (picturesData) {

  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture-template');

  // Создаём DocumentFragment для оптимизации вставки
  const fragment = new DocumentFragment();

  picturesData.forEach((picture) => {
    // Клонируем шаблон с дочерними элементами
    const pictureElement = pictureTemplate.cloneNode(true);

    const img = pictureElement.querySelector('.picture__img');
    img.src = picture.url;
    img.alt = picture.description;

    const likesElement = pictureElement.querySelector('.picture__likes');
    likesElement.textContent = picture.likes;

    const commentsElement = pictureElement.querySelector('.picture__comments');
    commentsElement.textContent = picture.comments;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.innerHTML = '';
  picturesContainer.appendChild(fragment);
};

renderPictures(generatePhotoList);
