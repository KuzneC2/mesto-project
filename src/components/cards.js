import { openPopup, closePopup } from "./utilits";
// карточки стартовый набор
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


const pictureImage = document.querySelector('.popup-picture__image');
const popupGridTitle = document.querySelector('.popup-picture__title');
const popupImage = document.querySelector('.popup_image-open');
// Функция создания карточек
export function createCard(name, link) {
    const cardTemplate = document.querySelector('.template').content;
    const cardElementTemplate = cardTemplate.querySelector('.grid__element').cloneNode(true);
    cardElementTemplate.querySelector('.grid__title').textContent = name;
    cardElementTemplate.querySelector('.grid__image').src = link;
    cardElementTemplate.querySelector('.grid__image').alt = `Изображение ${name}`;
    cardElementTemplate.querySelector('.grid__heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('grid__heart_active')
    })
    cardElementTemplate.querySelector('.grid__image').addEventListener('click', () => {
        pictureImage.src = link;
        popupGridTitle.textContent = name;
        pictureImage.alt = `Изображение ${name}`;
        openPopup(popupImage);
    })

    cardElementTemplate.querySelector('.grid__trash').addEventListener('click', () => {
        cardElementTemplate.closest('.grid__element').remove();
    })

    return cardElementTemplate;
}

const grid = document.querySelector('.grid');
// Функция добавления карточек
export function renderCard(name, link) {
    grid.prepend(createCard(name, link));
}
