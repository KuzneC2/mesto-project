import { openPopup } from "./utilits";
import { deleteCardApi, putLike, deleteLike } from "./api.js";
export let userId = '';

const pictureImage = document.querySelector('.popup-picture__image');
const popupGridTitle = document.querySelector('.popup-picture__title');
const popupImage = document.querySelector('.popup_image-open');
// Функция создания карточек

export function createCard(name, link, likes, creatorId, userId, cardId) {
    const cardTemplate = document.querySelector('.template').content;
    const cardElementTemplate = cardTemplate.querySelector('.grid__element').cloneNode(true);
    const likeButton = cardElementTemplate.querySelector('.grid__heart');
    const likeCounter = cardElementTemplate.querySelector('.grid__heart-counter');
    cardElementTemplate.querySelector('.grid__title').textContent = name;
    cardElementTemplate.querySelector('.grid__image').src = link;
    cardElementTemplate.querySelector('.grid__image').alt = `Изображение ${name}`;
    cardElementTemplate.querySelector('.grid__heart-counter').textContent = likes.length;

    const isLikedByUser = likes.some(like => like._id === userId);

    if (isLikedByUser) {
        likeButton.classList.add('grid__heart_active');
    }

    cardElementTemplate.querySelector('.grid__heart').addEventListener('click', function () {
        if (likeButton.classList.contains('grid__heart_active')) {
            deleteLike(cardId, likeButton, likeCounter)
            .then(data => {
                likeButton.classList.remove('grid__heart_active');
                likeCounter.textContent = data.likes.length;
            })
            .catch(err => console.log(err))
        } else {
            putLike(cardId, likeButton, likeCounter)
            .then(data => {
                likeButton.classList.add('grid__heart_active');
                likeCounter.textContent = data.likes.length;
                likes.push({ _id: userId });
            })
            .catch(err => console.log(err))
        }
    })
    cardElementTemplate.querySelector('.grid__image').addEventListener('click', () => {
        pictureImage.src = link;
        popupGridTitle.textContent = name;
        pictureImage.alt = `Изображение ${name}`;
        openPopup(popupImage);
    })
    // Проверяем, является ли карточка вашей
    if (creatorId === userId) {
        cardElementTemplate.querySelector('.grid__trash').addEventListener('click', () => {
            deleteCardApi(cardId)
            .then(() => {
                // Удаление карточки после успешного запроса на сервер
                cardElementTemplate.closest('.grid__element').remove();
            })
            .catch(error => {
                console.error(`Ошибка при удалении карточки: ${error}`);
                // Добавьте обработку ошибки, если необходимо
            });
        });
    } else {
        // Если карточка не ваша, скрываем иконку удаления
        cardElementTemplate.querySelector('.grid__trash').style.display = 'none';
    }
    return cardElementTemplate;
}

const grid = document.querySelector('.grid');
// Функция добавления карточек
export function renderCard(name, link, likes = [], creatorId, userId, cardId) {
    grid.prepend(createCard(name, link, likes, creatorId, userId, cardId));
}