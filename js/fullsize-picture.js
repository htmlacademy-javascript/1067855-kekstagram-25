import {onPopupEscKeyDown} from './util.js';

const bigPicture = document.querySelector('.big-picture');

const templateComments = `
      <li class="social__comment">
        <img class="social__picture" src="" alt="" width="35" height="35">
        <p class="social__text"></p>
      </li>`;

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeyDown);
};

const hideElements = () => {
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};

const renderComments = (comments) => {
  const commentsContainer = document.querySelector('.social__comments');
  commentsContainer.innerHTML = '';
  comments.forEach(({avatar, name, message}) => {
    commentsContainer.insertAdjacentHTML('afterbegin', templateComments);
    commentsContainer.querySelector('.social__picture').src = avatar;
    commentsContainer.querySelector('.social__picture').alt = name;
    commentsContainer.querySelector('.social__text').textContent = message;
  });
};

const showBigPicture = ({url, likes, comments, description}) => {
  const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.classList.remove('hidden');
  bigPictureCancel.addEventListener('click', () => hideBigPicture());
  document.addEventListener('keydown', onPopupEscKeyDown);
  document.body.classList.add('modal-open');
  renderComments(comments);
  hideElements();
};

export {
  showBigPicture,
  renderComments,
  hideBigPicture
};
