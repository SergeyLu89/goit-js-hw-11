import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

export function renderImageCard(data) {
  const markup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card gallery__item">
        <a href="${largeImageURL}" class="gallery__link" >
          <img class="gallery__image" src="${webformatURL}" alt="${tags} loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes ${likes}</b>
            </p>
            <p class="info-item">
              <b>Views ${views}</b>
            </p>
            <p class="info-item">
              <b>Comments ${comments}</b>
            </p>
            <p class="info-item">
              <b>Downloads ${downloads}</b>
            </p>
          </div>
          
        </div>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
