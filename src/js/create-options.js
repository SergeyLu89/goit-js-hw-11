import Notiflix from 'notiflix';
import { refs } from '..';
import { getImages } from './img-api';
import { renderImageCard } from './render-options';

export let inputValue = '';
function onInputChanges() {
  const inputFormValue = refs.input.value;
  return (inputValue = inputFormValue);
}

export let page = 1;
async function onSubmitButton(event) {
  if (inputValue === '') {
    Notiflix.Notify.warning('Please enter your request');
  }

  try {
    await event.preventDefault();
    const image = await getImages(inputValue);
    if (image.length !== 0) {
      renderImageCard(image);
      page += 1;
      if (page > 1) {
        refs.loadMoreBtn.classList.remove('hidden');
      }
    } else {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

function onLoadMoreBtnClick() {
  getImages(inputValue);
  console.log();
}
export { onInputChanges, onSubmitButton, onLoadMoreBtnClick };
