import { openPopup, closePopup } from "./utilits";
import { renderCard } from "./cards";

export const closeButtons = document.querySelectorAll('.popup__close');
// Отправка изменения профиля
export const popupEdit = document.querySelector('.popup_edit-profile');
export const formEdit = document.querySelector('.popup__form-profile')
export const name = document.querySelector('.profile__info-name');
export const job = document.querySelector('.profile__info-work');
export function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = document.querySelector('.popup__input_txt_name').value;
    job.textContent = document.querySelector('.popup__input_txt_profession').value;
    closePopup(popupEdit);
    formEdit.reset()
}

const nameA = document.querySelector('.popup__input_txt_name-add');
const linkA = document.querySelector('.popup__input_link');
export const popupAdd = document.querySelector('.popup_add-card');
export const addForm = document.querySelector('.popup__form-add');

// Функция кнопки создания карточки
export function formSubmitAdd(evt) {
    evt.preventDefault();
    const name = nameA.value;
    const link = linkA.value;
    renderCard(name, link);
    closePopup(popupAdd);
    addForm.reset();
}