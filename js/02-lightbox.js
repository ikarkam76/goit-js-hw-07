import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector('.gallery');
const imagesCardsMarkup = createImagesCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesCardsMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createImagesCardsMarkup(images) {
  return images
    .map(image => {
      return `
            <div class="gallery__item">
                <a class="gallery__link" href="${image.original}">
                    <img 
                    class="gallery__image" 
                    src="${image.preview}" 
                    alt="${image.description}"
                    />
                </a>
            </div>
        `;
    }).join('');
}

