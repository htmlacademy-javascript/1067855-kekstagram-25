import {showBigPicture} from './fullsize-picture.js';
import {isEscapeKey} from './util.js';
import {hideBigPicture} from './fullsize-picture.js';

const handlerPicture = (photos) => {
  const picture = document.querySelectorAll('.pictures .picture');
  picture.forEach((elem, index) => {
    elem.addEventListener('click', () => showBigPicture(photos[index]));
  });
  const closeButton = document.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => hideBigPicture());
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      hideBigPicture();
    }
  });
};

export {
  handlerPicture
};
