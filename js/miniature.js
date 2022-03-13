import {createPhotos} from './data';

const template = document.querySelector('#picture').content;
const templatePicture = template.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

const templateFragment = document.createDocumentFragment();

createPhotos.forEach(({url, likes, comments}) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = createPhotos[url];
  photoElement.querySelector('.picture__likes').textContent = createPhotos[likes];
  photoElement.querySelector('.picture__comments').textContent = createPhotos[comments];
  templateFragment.append(photoElement);
});

pictureList.append(templateFragment);
console.log(createPhotos(25));
