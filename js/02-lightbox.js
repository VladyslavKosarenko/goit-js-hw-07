import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


function partsGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
        `;
        
    }).join('');
}

const ul = document.querySelector('.gallery');
const markup = partsGallery(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);
ul.addEventListener('click', onClick)
function onClick(event) {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('gallery__image')) {
        const parent = target.closest('.gallery__link')
        lightbox.open(parent);
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
    sourceAttr: 'href', 
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionType: 'attr',
    captionsData: 'alt', 
    
});
    console.log(lightbox);