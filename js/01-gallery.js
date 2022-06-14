import { galleryItems } from './gallery-items.js';
// Change code below this line


const imagesContainer = document.querySelector('.gallery')
const imagesCardsMarkup = createImagesCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesCardsMarkup);

imagesContainer.addEventListener('click', onImageCardClick);

function onImageCardClick(evt) {
    evt.preventDefault();
    const currentActiveImage = evt.target.dataset.source;

    const instance = basicLightbox.create(`
            <div class="modal">
                <img
                    src= ${currentActiveImage}
                />
            </div>
        `);

        instance.show();

        document.addEventListener('keydown', event => {
            if (event.code === 'Escape') {
            instance.close();
            }
        }
    )
};

function createImagesCardsMarkup(images) {
    return images.map(image => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${image.original}">
                    <img
                        class="gallery__image"
                        src="${image.preview}"
                        data-source="${image.original}"
                        alt="${image.description}"
                    />
                </a>
            </div>
        `;
    }).join('');
}

