import './pages/index.css'
import { openPopup, closePopup } from './components/utilits.js';;
import { handleFormSubmit, name, job, formEdit, popupEdit, submitAddCard, popupAdd, addForm, inputName, inputProfession } from './components/modal.js';
import { initialCards, renderCard} from './components/cards.js';
import { enableValidation,  resetElementForms, settings } from './components/validate.js';

enableValidation(settings);






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
formEdit.addEventListener('submit', handleFormSubmit);

// Рендеринг карточек
initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
});

// Отправка и закрытие попапа добавления карточек 
addForm.addEventListener('submit', submitAddCard);