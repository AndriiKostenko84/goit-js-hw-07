import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function creatGalleryMarkUp(items) {
  return items
    .map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join('');
}

const addGalleryMarkUp = creatGalleryMarkUp(galleryItems);

galleryEl.innerHTML = addGalleryMarkUp;

galleryEl.addEventListener('click', handleImgClick);

function handleImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galleryEl.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}