import {getRandomInt, getRandomArrayElement} from './util.js';

const PHOTO_COUNT = 25;
const MAX_COMMENTS = 6;
const AVATAR_COUNT = 6;

const LIKES = {
  min: 15,
  max: 250
};


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

let commentId = 0;

const createComments = () => (
  {
    id: commentId++,
    avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  }
);

const createObjects = (i) => (
  {
    id: i + 1,
    url: `photos/${i + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInt(LIKES.min, LIKES.max),
    comments: Array.from({length: getRandomInt(0, MAX_COMMENTS)}, createComments)
  }
);

const createPhotos = (count) => Array.from({length: count}, (id, index) => createObjects(index));

export {
  createPhotos,
  PHOTO_COUNT
};
