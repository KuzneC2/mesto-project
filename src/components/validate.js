// Функция удаления ошибки
export const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error');
    errorElement.textContent = '';
}

// Функция создания ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error');

};


// Функция проверки ошибки
const isValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity("Поле может содержать только латинские буквы, кириллические буквы, знаки дефиса и пробелы");
    } else {
        inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideInputError(formElement, inputElement)
    }
};


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__sumbit');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form-profile'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset)
        });
    });

};


function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

export function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__sumbit_dsbl');
        buttonElement.disabled = true;
    }
    else {
        buttonElement.classList.remove('popup__sumbit_dsbl');
        buttonElement.disabled = false;

    }
}


export function resetElementForms(form) {
    const inputEdit = form.querySelectorAll('.popup__input')
    const buttonSumbit = form.querySelector('.popup__sumbit')
    const inputList = Array.from(form.querySelectorAll('.popup__input'));
    inputEdit.forEach((inputEdit) => {
        hideInputError(form, inputEdit)
    });
    toggleButtonState(inputList, buttonSumbit);
}