let edit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let containerAdd = document.querySelector('.popup__container_add');
let containerEdit = document.querySelector('.popup__container_edit');
let exit = document.querySelectorAll('.popup__close-btn');
let add = document.querySelector('.profile__add-button');
let popupPicture = document.querySelector('.popup-picture_opened');

edit.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    containerAdd.classList.add('display-none');
    containerEdit.classList.remove('display-none');
    let popupPicture = document.querySelector('.popup-picture_opened');
    popupPicture.classList.remove('popup-picture_opened');
    popup.classList.remove('popup_image-dark');
});

add.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    containerAdd.classList.remove('display-none');
    containerEdit.classList.add('display-none');
    popup.classList.remove('popup_image-dark');
    popupPicture.classList.remove('popup-picture_opened');
});

for (let i = 0; i < exit.length; i++) {
    exit[i].addEventListener('click', function () {
        popup.classList.remove('popup_opened');
        popupPicture.classList.remove('popup-picture_opened');
        popup.classList.remove('popup_image-dark');
    });
}

const formElement = document.querySelector('.popup__form-profile');
const nameInput = document.querySelector('.popup__input_txt_name');
const jobInput = document.querySelector('.popup__input_txt_profession');
let name = document.querySelector('.profile__info-name');
let job = document.querySelector('.profile__info-work');

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = document.querySelector('.popup__input_txt_name').value;
    job.textContent = document.querySelector('.popup__input_txt_profession').value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);


// 6 карточек
const grid = document.querySelector('.grid');

function sixCardsAdd(name, link) {
    const cardTemplate = document.querySelector('.template').content;
    const cardElementTemplate = cardTemplate.querySelector('.grid__element').cloneNode(true);
    cardElementTemplate.querySelector('.grid__title').textContent = name;
    cardElementTemplate.querySelector('.grid__image').src = link;
    cardElementTemplate.querySelector('.grid__heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('grid__heart_active')
    });

    grid.append(cardElementTemplate);

    let deleteList = document.querySelectorAll('.grid__trash');
    deleteList.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            console.log('lol')
        });
    });
}

sixCardsAdd('Архыз', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg');
sixCardsAdd('Челябинская область', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg');
sixCardsAdd('Иваново', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg');
sixCardsAdd('Камчатка', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg');
sixCardsAdd('Холмогорский район', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg');
sixCardsAdd('Байкал', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg');

// создание карточек через попап

const formAdd = document.querySelector('.popup__form-add');

function cardsAdd(evt) {
    evt.preventDefault();
    const cardTemplate = document.querySelector('.template').content;
    const cardElementTemplate = cardTemplate.querySelector('.grid__element').cloneNode(true);
    cardElementTemplate.querySelector('.grid__title').textContent = document.querySelector('.popup__input_txt_name-add').value;
    cardElementTemplate.querySelector('.grid__image').src = document.querySelector('.popup__input_link').value;
    grid.prepend(cardElementTemplate);
    popup.classList.remove('popup_opened');
    document.querySelector('.popup__input_link').value = '';
    document.querySelector('.popup__input_txt_name-add').value = '';
    cardElementTemplate.querySelector('.grid__heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('grid__heart_active')
    });

    let deleteList = document.querySelectorAll('.grid__trash');
    deleteList.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        });
    });
    let imageGrid = document.querySelectorAll('.grid__image');
    let titlGrid = document.querySelectorAll('.grid__title')
    imageGrid.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            document.querySelector('.popup-picture__image').src = imageGrid[i].src;
            document.querySelector('.popup-picture__title').textContent = titlGrid[i].textContent;
            edit.classList.remove()
            popup.classList.add('popup_opened')
            popupPicture.classList.add('popup-picture_opened');
            containerAdd.classList.add('display-none');
            containerEdit.classList.add('display-none');

        });
    });

}

formAdd.addEventListener('submit', cardsAdd);

// Попап картинка

let imageGrid = document.querySelectorAll('.grid__image');
let titlGrid = document.querySelectorAll('.grid__title')
imageGrid.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        document.querySelector('.popup-picture__image').src = imageGrid[i].src;
        document.querySelector('.popup-picture__title').textContent = titlGrid[i].textContent;
        edit.classList.remove()
        popup.classList.add('popup_opened')
        popupPicture.classList.add('popup-picture_opened');
        containerAdd.classList.add('display-none');
        containerEdit.classList.add('display-none');
        popup.classList.add('popup_image-dark');

    });
});