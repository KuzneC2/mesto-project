import { closePopup } from "./utilits";
import { renderCard } from "./cards";
import { addNewCard, changeAvatar } from "./api.js";

export const closeButtons = document.querySelectorAll('.popup__close');
// Отправка изменения профиля
export const popupEdit = document.querySelector('.popup_edit-profile');
export const formEdit = document.querySelector('.popup__form-profile')
export const name = document.querySelector('.profile__info-name');
export const job = document.querySelector('.profile__info-work');
export const inputName = document.querySelector('.popup__input_txt_name');
export const inputProfession = document.querySelector('.popup__input_txt_profession')
export function handleFormSubmit(evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    job.textContent = inputProfession.value;
    closePopup(popupEdit);
}

export const nameA = document.querySelector('.popup__input_txt_name-add');
export const linkA = document.querySelector('.popup__input_link');
export const popupAdd = document.querySelector('.popup_add-card');
export const addForm = document.querySelector('.popup__form-add');
// Функция кнопки создания карточки
export function submitAddCard(evt) {
    evt.preventDefault();
    const name = nameA.value;
    const link = linkA.value;
    addNewCard();
    renderCard(name, link);
    closePopup(popupAdd);
    addForm.reset();
}
// Avatar 
export const popupAvatar = document.querySelector('.popup_avatar');
export let avatar = document.querySelector('.profile__avatar');
export const avatarInputLink = document.querySelector('.popup__input_link-avatar');
export const editAvatarBtn = document.querySelector('.profile__edit-avatar');
export const formAvatar = document.querySelector('.popup__form-avatar');
export function editAvatar() {
    avatarInputLink.textContent = avatar.src
    avatar.src = avatarInputLink.value;
    changeAvatar()
    closePopup(popupAvatar);
}
// Ux
export const saveInformation = document.querySelector('.popup__save-info')
export const savePicture = document.querySelector('.popup__save-picture')
export const saveAvatar = document.querySelector('.popup__save-avatar')
export const loadBlockInformation = document.querySelector('.popup__loading-info')
export const loadBlockPicture = document.querySelector('.popup__loading-picture')
export const loadBlockAvatar = document.querySelector('.popup__loading-avatar')
export function renderLoading(isLoading, button, loading){
    if(isLoading){
        button.classList.add('button__hidden');
        loading.classList.add('load__visible');
    }
    else{
        button.classList.remove('button__hidden');
        loading.classList.remove('load__visible');
    }
}