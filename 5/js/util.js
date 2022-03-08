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

checkStringLength(1390, 140);

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export {
  getRandomInt,
  getRandomArrayElement
};
