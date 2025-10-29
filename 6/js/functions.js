/**
 * Проверяем длину строки
 * @param {string} text Строка
 * @param {number} count Максимальная длина
 * @returns {boolean}
 */
const isLine = (text, count) => text.length <= count

/**
 * Проверяем на строку палиндром
 * @param {string} text Строка
 * @returns {boolean}
 */
function isPalindrome(text) {
  const normalized = text.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }

  return reversed === normalized;
}

/**
 * Из строки находим цифры и выводим тип {number}
 * @param {number} text
 * @returns {number}
 */
function extractNumbers(text) {

  const str = text.toString();
  let result = '';
  for (const char of str) {
    let number = parseInt(char, 10);
    if (!Number.isNaN(number)) {
      result += number;
    }
  }

  const number = parseInt(result, 10);
  return Number.isNaN(number) ? NaN : number;
}

const isMeetingWithinWorkDay = function (workStart, workEnd, meetingStart, meetingDuration) {

  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStartMinutes = parseTime(workStart);
  const workEndMinutes = parseTime(workEnd);
  const meetingStartMinutes = parseTime(meetingStart);

  // Вычисляем время окончания встречи
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем, что встреча начинается не раньше начала рабочего дня
  // и заканчивается не позже конца рабочего дня
  return (
    meetingStartMinutes >= workStartMinutes &&
    meetingEndMinutes <= workEndMinutes
  );
}
