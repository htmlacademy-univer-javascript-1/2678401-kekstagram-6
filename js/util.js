const countPhotos = 25;
const countComments = 1000000;

/**
 * Функция для генерации случайного числа в заданном диапазоне
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
let findRandomInteger = function (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

/**
 * Функция для генерации случайного числа в заданном диапазоне без повторений
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
let createRandomIdFromRangeGenerator = function (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = findRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = findRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateCommentId = createRandomIdFromRangeGenerator(1, countComments);

export {generateCommentId, findRandomInteger, countPhotos, countComments};
