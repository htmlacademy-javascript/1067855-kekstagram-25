import {hideBigPicture} from './fullsize-picture.js';

/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 *
 * @param {number} min - первое число
 * @param {number} max - второе число
 *
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
/**
 * Проверка длинны строки.
 *
 * @param {number} string - максимальная  строка
 * @param {number} maxLength - макисмальная длина строки
 */
const checkStringLength = (string, maxLength = 140) => string.length <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
  }
  hideBigPicture();
};

export {
  getRandomInt,
  getRandomArrayElement,
  onPopupEscKeyDown
};
