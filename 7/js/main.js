import {renderPhotos} from './miniature.js';
import {createPhotos, PHOTO_COUNT} from './data.js';
import {handlerPicture} from './gallery.js';


const photos = createPhotos(PHOTO_COUNT);

renderPhotos(photos);
handlerPicture(photos);

