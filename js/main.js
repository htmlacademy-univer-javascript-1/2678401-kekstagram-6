import {nameList, messageList} from './data.js';
import {generateCommentId, findRandomInteger, countComments, countPhotos} from "./util.js";

/**
 * Функция для генерации массива фотографий
 * @returns {Array<{
 *  id: number,
 *  url: string,
 *  description: string,
 *  likes: number,
 *  comments: Array<{
 *    id: number,
 *    avatar: string,
 *    message: string,
 *    name: string
 *  }>
 *  }>}
 */
const generatePhotoList = () => {

  const photoList = [];
  for (let i = 1; i <= countPhotos; i++) {
    const commentCount = findRandomInteger(0, 30);
    const commentList = Array.from(
      {length: commentCount},
      () => generateComment()
    );

    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Фотография ${i}`,
      likes: findRandomInteger(15, 200),
      comments: commentList,
    };

    photoList.push(photo);
  }

  return photoList;
}

/**
 * Генерируем комментарий
 * @returns {Array<
 *    id: number,
 *    avatar: string,
 *    message: string,
 *    name: string
 *  >}
 */
const generateComment = () => {
  return {
    id: generateCommentId(1, countComments),
    avatar: `img/avatar-${findRandomInteger(1, 6)}.svg`,
    name: nameList[findRandomInteger(0, nameList.length - 1)],
    message: Array.from(
      {length: findRandomInteger(1, 2)},
      () => messageList[findRandomInteger(0, messageList.length - 1)]
    ).join(' '),
  };
}
