

const bigPicture = document.querySelector('.big-picture');

const templateComments = `
      <li class="social__comment">
        <img class="social__picture" src="" alt="" width="35" height="35">
        <p class="social__text"></p>
      </li>`;

const hideBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add ('hidden')
};

const hideElements = () => {
  const commentCount = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};


const renderComments = (comments) => {
  const container = document.querySelector('.social__comments');
  container.innerHTML = '';
  comments.forEach(({avatar, name, message}) => {
    container.insertAdjacentHTML('afterbegin', templateComments);
    container.querySelector('.social__picture').src = avatar;
    container.querySelector('.social__picture').alt = name;
    container.querySelector('.social__text').textContent = message;
  });
};

const showBigPicture = ({url, likes, comments, description}) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  renderComments(comments);
  hideElements();
};

export {
  showBigPicture,
  renderComments,
  hideBigPicture
};
