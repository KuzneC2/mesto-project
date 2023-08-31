import './pages/index.css'
import { enableValidation, hideInputError, toggleButtonState, resetElementForms } from './components/validate.js';
import { openPopup, closePopup, formSubmitHandler, name, job, formEdit, popupEdit } from './components/utilits.js';
import { initialCards, renderCard, addForm, formSubmitAdd, cardAdd, popupAdd } from './components/cards.js';
enableValidation()
// Открытие попапа изменения профиля
const openEdidPopup = document.querySelector('.profile__edit-img');
openEdidPopup.addEventListener('click', function () {
    openPopup(popupEdit);
    document.querySelector('.popup__input_txt_name').value = name.textContent;
    document.querySelector('.popup__input_txt_profession').value = job.textContent;
    resetElementForms(formEdit);
});

// Открытие попапа добавления карточки
const openAddPopup = document.querySelector('.profile__add-button');
openAddPopup.addEventListener('click', function () {
    openPopup(popupAdd);
    const formAdd = document.querySelector('.popup__form-add');
    resetElementForms(formAdd);
    formAdd.reset()
});

//  закрытие попапов на крестик
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((item) => {
    item.addEventListener('click', function () {
        popup.forEach((item) => {
            closePopup(item);
        });
    })
})

// закрытие попапа на оверлей
const popup = document.querySelectorAll('.popup');
popup.forEach((item) => {
    item.addEventListener('click', function (evt) {
        if (evt.target === item) {
            closePopup(item);
        }
    })
})
// ESC закрытие окна
popup.forEach((item) => {
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closePopup(item)
        }
    })
});

// Отправка + закрытие попапа редактирования
formEdit.addEventListener('submit', formSubmitHandler);

// Рендеринг карточек
initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
});

// Отправка и закрытие попапа добавления карточек 
addForm.addEventListener('submit', formSubmitAdd);