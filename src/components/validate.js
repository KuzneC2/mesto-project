export const settings = {
    formInputError: 'popup__input_type_error',
    inputError: 'form__input-error',
    popupInput: '.popup__input',
    popupSumbit: '.popup__sumbit',
    formProfile: '.popup__form-profile',
    sumbitDisable: 'popup__sumbit_dsbl'
}
// Функция удаления ошибки
export const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(settings.formInputError);
    errorElement.classList.remove(settings.inputError);
    errorElement.textContent = '';
}

// Функция создания ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(settings.formInputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.inputError);

};
// Функция проверки ошибки
const isValid = (formElement, inputElement, settings) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity("Поле может содержать только латинские буквы, кириллические буквы, знаки дефиса и пробелы");
    } else {
        inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    }
    else {
        hideInputError(formElement, inputElement, settings)
    }
};
const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.popupInput));
    const buttonElement = formElement.querySelector(settings.popupSumbit);
    toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement, settings);
            toggleButtonState(inputList, buttonElement, settings);
        });
    });
};
export const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formProfile));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, settings);
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset, settings)
        });
    });

};
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
export function toggleButtonState(inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.sumbitDisable);
        buttonElement.disabled = true;
    }
    else {
        buttonElement.classList.remove(settings.sumbitDisable);
        buttonElement.disabled = false;

    }
}
export function resetElementForms(form, settings) {
    const inputEdit = form.querySelectorAll(settings.popupInput)
    const buttonSumbit = form.querySelector(settings.popupSumbit)
    const inputList = Array.from(form.querySelectorAll(settings.popupInput));
    inputEdit.forEach((inputEdit) => {
        hideInputError(form, inputEdit, settings)
    });
    toggleButtonState(inputList, buttonSumbit, settings);
}