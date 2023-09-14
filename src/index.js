import './index.css'
import { openPopup, closePopup } from './components/utilits.js';
import { handleFormSubmit, name, job, formEdit, popupEdit, submitAddCard, popupAdd, addForm, inputName, inputProfession, popupAvatar, avatar, editAvatarBtn, formAvatar, editAvatar } from './components/modal.js';
import { renderCard, userId } from './components/cards.js';
import { enableValidation, resetElementForms, settings } from './components/validate.js';
import { getProfileApi, getCardsApi, getEditProfile } from './components/api.js';
enableValidation(settings);

// Аватар открыть сохранить ...
avatar.addEventListener('click', function () {
    openPopup(popupAvatar);
});
editAvatarBtn.addEventListener('click', function () {
    openPopup(popupAvatar);
});
formAvatar.addEventListener('submit', editAvatar)

// Открытие попапа изменения профиля
const openEdidPopup = document.querySelector('.profile__edit-img');
openEdidPopup.addEventListener('click', function () {
    openPopup(popupEdit);
    inputName.value = name.textContent;
    inputProfession.value = job.textContent;
    resetElementForms(formEdit, settings);
});
// Открытие попапа добавления карточки
const openAddPopup = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.popup__form-add');
openAddPopup.addEventListener('click', function () {
    openPopup(popupAdd);
    resetElementForms(formAdd, settings);
    formAdd.reset()
});
// Закрытие попапа на крестик и на оверлей
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})
// Отправка + закрытие попапа редактирования
formEdit.addEventListener('submit',handleFormSubmit)
// Отправка и закрытие попапа добавления карточек 
addForm.addEventListener('submit', submitAddCard);
const infoTablo = Promise.all([getProfileApi(), getCardsApi()])
    .then(([profileApi, cardsApi]) => {
        userId = profileApi._id;
        name.textContent = profileApi.name;
        job.textContent = profileApi.about;
        avatar.src = profileApi.avatar
        const cardArr = cardsApi.reverse() 
        cardArr.forEach(function (item) {
            renderCard(item.name, item.link, item.likes, item.owner._id, profileApi._id, item._id);
        });
    })
    .catch(err => {
        console.error(`Произошла ошибка: ${err}`);
    });