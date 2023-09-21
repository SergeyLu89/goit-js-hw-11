import Notiflix from 'notiflix';

import { refs } from './refs';
import { fechImage } from './web-API';
import { renderImageCard } from './render-options';

refs.form.addEventListener('submit', onSearchBtn);
// refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

let page = 1;
let inputValue = '';

async function onSearchBtn(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';
  page = 1;
  inputValue = refs.input.value;
  refs.loadMoreBtn.classList.add('hidden');

  if (inputValue === '') {
    Notiflix.Notify.warning('Please enter your request');
    return;
  }
  responseRequest();
}
async function responseRequest() {
  try {
    const request = await fechImage(inputValue, page);

    const hits = request.hits;
    const totalHits = request.totalHits;
    if (hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    if (page === 1) {
      Notiflix.Notify.success(`${totalHits} images found`);
    }

    renderImageCard(hits);

    if (page * 40 >= totalHits) {
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
      refs.loadMoreBtn.classList.add('hidden');
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
    } else {
      refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
      refs.loadMoreBtn.classList.remove('hidden');
      refs.upBtn.classList.remove('hidden');
    }
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}
function onLoadMoreBtnClick() {
  page += 1;
  responseRequest();
}
