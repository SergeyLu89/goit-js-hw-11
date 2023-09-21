import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['key'] = '39553270-0fd37d1de6491581ffd7f6fe5';

const BASE_URL = 'https://pixabay.com/api/';

export async function fechImage(request, page = '1') {
  const params = {
    key: '39553270-0fd37d1de6491581ffd7f6fe5',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
