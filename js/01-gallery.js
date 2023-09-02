import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function partsGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
        
    }).join('');
}

const ul = document.querySelector('.gallery');
const markup = partsGallery(galleryItems);

ul.insertAdjacentHTML('beforeend', markup);
let modalInstance = null;
ul.addEventListener('click', onClick);
function onClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return; 
    }

    const original = event.target.dataset.source;
    const description = event.target.alt;
    console.log(event.target.dataset.source);
    // modal
const modalInstance = basicLightbox.create(`
    <div class="modal">
    <img
                    class="gallery__image"
                    src="${original}"
                    data-source="${original}"
                    alt="${description}"
                /> 
    </div>
`)

    modalInstance.show();
    console.log(description);
    document.addEventListener('keydown', onKeyPress);
}
function onKeyPress(event) {
    if (event.code === 'Escape' && modalInstance !== null) {
        modalInstance.close();
        modalInstance = null;
        document.removeEventListener('keydown', onKeyPress);
    }
}