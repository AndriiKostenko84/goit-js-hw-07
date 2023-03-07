import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')

const createGallery = galleryItems
    .map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>`
    )
    .join(''); 

galleryEl.insertAdjacentHTML('beforeend', createGallery);

new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionsData: 'alt',
    captionsDelay: 250
});
