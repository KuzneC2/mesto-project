const openEdidPopup = document.querySelector('.profile__edit-img');
const popup = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-card');
const openAddPopup = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

// попапы изменения и добавления
openEdidPopup.addEventListener('click', function () {
    openPopup(popupEdit);
});

openAddPopup.addEventListener('click', function () {
    openPopup(popupAdd);
});

//  закрытие попапов на крестик
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened')
}
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function () {
        closePopup(popup[i]);
    })
}
// изменение профиля 
const formElement = document.querySelector('.popup__form-profile');
const name = document.querySelector('.profile__info-name');
const job = document.querySelector('.profile__info-work');
function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = document.querySelector('.popup__input_txt_name').value;
    job.textContent = document.querySelector('.popup__input_txt_profession').value;
    popup[0].classList.remove('popup_opened');
}
formElement.addEventListener('submit', formSubmitHandler);
// Функция создания карточек
const initialCards = [
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
let result = initialCards.map(function (a) { return a.name })
console.log()
const grid = document.querySelector('.grid');
function cardAdd(name, link) {

    const cardTemplate = document.querySelector('.template').content;
    const cardElementTemplate = cardTemplate.querySelector('.grid__element').cloneNode(true);
    cardElementTemplate.querySelector('.grid__title').textContent = name;
    cardElementTemplate.querySelector('.grid__image').src = link;
    cardElementTemplate.querySelector('.grid__heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('grid__heart_active')
    })
    grid.prepend(cardElementTemplate);
    const deleteList = document.querySelectorAll('.grid__trash');

    deleteList.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        });
    });
}
initialCards.forEach(function (item) {
    cardAdd(item.name, item.link);
});
const sumbitFormAdd = document.querySelector('.popup__save');
sumbitFormAdd.addEventListener('click', function (evt) {
    evt.preventDefault();
    const name = document.querySelector('.popup__input_txt_name-add').value
    const link = document.querySelector('.popup__input_link').value
    cardAdd(name, link);
    popup[1].classList.remove('popup_opened');
    document.querySelector('.popup__input_txt_name-add').value = '';
    document.querySelector('.popup__input_link').value = '';
    const gridImage = document.querySelectorAll('.grid__image');
    const titleGrid = document.querySelectorAll('.grid__title');
    gridImage.forEach((btn, i) => {
        gridImage[i].addEventListener('click', () => {
            document.querySelector('.popup-picture__image').src = gridImage[i].src;
            popupGridTitle.textContent = titleGrid[i].textContent;
            openPopup(popupImage);
        })
    })
})
// Попап картинка
const gridImage = document.querySelectorAll('.grid__image');
const titleGrid = document.querySelectorAll('.grid__title');
const popupImage = document.querySelector('.popup_image-open');
const popupGridImage = document.querySelector('.popup-picture__image');
const popupGridTitle = document.querySelector('.popup-picture__title');
gridImage.forEach((btn, i) => {
    gridImage[i].addEventListener('click', () => {
        document.querySelector('.popup-picture__image').src = gridImage[i].src;
        popupGridTitle.textContent = titleGrid[i].textContent;
        openPopup(popupImage);
    })
})