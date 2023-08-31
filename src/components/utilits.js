// Открытие попапа
export function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}
// Закрытие попапа
export function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened')
}

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