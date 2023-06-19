const openEdidPopup = document.querySelector('.profile__edit-img');
// popup нужен только для закрытия попапов при нажатии крестика
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
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened')
}
//  закрытие попапов на крестик
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
    closePopup(popupEdit);
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
const grid = document.querySelector('.grid');
function cardAdd(name, link) {
    const cardTemplate = document.querySelector('.template').content;
    const cardElementTemplate = cardTemplate.querySelector('.grid__element').cloneNode(true);
    cardElementTemplate.querySelector('.grid__title').textContent = name;
    cardElementTemplate.querySelector('.grid__image').src = link;
    cardElementTemplate.querySelector('.grid__heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('grid__heart_active')
    })
    const gridImage = document.querySelectorAll('.grid__image');
    const titleGrid = document.querySelectorAll('.grid__title');
    gridImage.forEach((btn, i) => {
        gridImage[i].addEventListener('click', () => {
            document.querySelector('.popup-picture__image').src = gridImage[i].src;
            popupGridTitle.textContent = titleGrid[i].textContent;
            openPopup(popupImage);
        })
    })
    return cardElementTemplate;
}
function renderCard(name, link) {
    grid.prepend(cardAdd(name, link));

}
initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
    const deleteList = document.querySelectorAll('.grid__trash');
    deleteList.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest('.grid__element').remove()
        });
    });
});
const nameA = document.querySelector('.popup__input_txt_name-add');
const linkA = document.querySelector('.popup__input_link');
const sumbitFormAdd = document.querySelector('.popup__save');
sumbitFormAdd.addEventListener('click', function (evt) {
    evt.preventDefault();
    const name = nameA.value;
    const link = linkA.value;
    renderCard(name, link);
    const deleteList = document.querySelectorAll('.grid__trash');
    deleteList.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest('.grid__element').remove()
        });
    });
    closePopup(popupAdd);
    document.querySelector('.popup__input_txt_name-add').value = '';
    document.querySelector('.popup__input_link').value = '';
    const gridImage = document.querySelector('.grid__image');
    const titleGrid = document.querySelector('.grid__title');
    gridImage.addEventListener('click', () => {
        document.querySelector('.popup-picture__image').src = gridImage.src;
        popupGridTitle.textContent = titleGrid.textContent;
        openPopup(popupImage);
    })
    grid.prepend(cardElementTemplate);
})
// Попап картинка
const popupImage = document.querySelector('.popup_image-open');
const popupGridImage = document.querySelector('.popup-picture__image');
const popupGridTitle = document.querySelector('.popup-picture__title');
