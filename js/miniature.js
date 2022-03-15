
const template = document.querySelector('#picture').content;
const templatePicture = template.querySelector('.picture');
const pictureList = document.querySelector('.pictures');


const renderPhotos = (photosData) => {

  const templateFragment = document.createDocumentFragment();
  photosData.forEach(({url, likes, comments}) => {
    const photoElement = templatePicture.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments;
    templateFragment.append(photoElement);
  });
  pictureList.append(templateFragment);
};

export {
  renderPhotos
};

