/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 *
 * @param {number} min - первое число
 * @param {number} max - второе число
 *
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

getRandomInt(2, 3);


/**
 * Проверка длинны строки.
 *
 * @param {number} string - максимальная  строка
 * @param {number} maxLength - макисмальная длина строки
 */
const checkStringLength = (string, maxLength = 140) => string.length <= maxLength;

checkStringLength(1390, 140);


//** Объекты /*


const OBJECT_COUNTS = 25;
const MAX_COMMENTS = 6;
const AVATAR_COUNT = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 250;

const NAMES = [
  'Дон',
  'Кекс',
  'Дуглас',
  'Мурзилка',
  'Карлсон',
  'Укропчик',
  'Уматурман',
  'Лунтик',
  'Фаршик',
  'Десятый'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Кто-то мучается с js, а я отдыхаю',
  'Опоздание в домашках - как серпом по сердцу!',
  'Я устал что-то придумывать',
  'Описание описания',
  'Жизнь на марсе есть, но это не доказано.',
  'придумал описание... как вам?'
];


const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

let commentId = 0;

const createComment = () => (
  {
    id: commentId++,
    avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  }
);

const createObject = (index) => (
  {
    id: index + 1,
    url: `photos/${getRandomInt(1, OBJECT_COUNTS)}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomInt(0, MAX_COMMENTS)}, createComment)
  }
);

const createPost = Array.from({length: OBJECT_COUNTS}, (id, index) => createObject(index));

console.log(createPost);
