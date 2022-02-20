//Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

getRandomInt(2, 3);


//Проверка длинны строки.

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength(1390, 140);
