import axios from 'axios';
import { page } from './create-options';

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function getImages(value) {
  const response = await axios.get(
    `?key=39553270-0fd37d1de6491581ffd7f6fe5&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
  );

  return await response.data.hits;
}
