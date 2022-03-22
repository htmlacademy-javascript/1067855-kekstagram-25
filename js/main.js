import {renderPhotos} from './gallery.js';
import {createPhotos, PHOTO_COUNT} from './data.js';

const photos = createPhotos(PHOTO_COUNT);

renderPhotos(photos);

