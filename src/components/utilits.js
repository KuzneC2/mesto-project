// Открытие попапа
export function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}
// Закрытие попапа
export function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened')
}