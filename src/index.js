import './pages/index.css'
import { openPopup, closePopup } from './components/utilits.js';;
import { handleFormSubmit, name, job, formEdit, popupEdit, submitAddCard, popupAdd, addForm, inputName, inputProfession } from './components/modal.js';
import { initialCards, renderCard } from './components/cards.js';
import { enableValidation, resetElementForms, settings } from './components/validate.js';
enableValidation(settings);


// Аватар открыть сохранить ...
const popupAvatar = document.querySelector('.popup_avatar');
const avatar = document.querySelector('.profile__avatar');
const avatarInputLink = document.querySelector('.popup__input_link-avatar');
const editAvatarBtn = document.querySelector('.profile__edit-avatar');
const formAvatar = document.querySelector('.popup__form-avatar');
avatar.addEventListener('click', function () {
    openPopup(popupAvatar);
});
editAvatarBtn.addEventListener('click', function () {
    openPopup(popupAvatar);
});
formAvatar.addEventListener('submit', editAvatar)
function editAvatar() {
    avatarInputLink.textContent = avatar.src
    avatar.src = avatarInputLink.value;
    closePopup(popupAvatar);
}



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
// initialCards.forEach(function (item) { -----------------------------------------------
//     renderCard(item.name, item.link);
// });
// Отправка и закрытие попапа добавления карточек 
addForm.addEventListener('submit', submitAddCard);



// GET загрузка профиля с сервера
fetch('https://nomoreparties.co/v1/plus-cohort-28/users/me', {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4'
    },
    body: JSON.stringify()
})
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        name.textContent = data.name;
        job.textContent = data.about;
        avatar.src = data.avatar;
    })
    .catch(err => {
        console.log(`Ошибка ${err}`);
    });
    

fetch('https://nomoreparties.co/v1/plus-cohort-28/cards', {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4'
    },
    body: JSON.stringify()
})
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(function (item) {
            renderCard(item.name, item.link);
        });
        })
    .catch(err => {
        console.log(`Ошибка ${err}`);
    })