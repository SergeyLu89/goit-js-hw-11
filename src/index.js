import {
  onInputChanges,
  onLoadMoreBtnClick,
  onSubmitButton,
} from './js/create-options';

export const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('[name="searchQuery"]'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.input.addEventListener('input', onInputChanges);
refs.form.addEventListener('submit', onSubmitButton);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
