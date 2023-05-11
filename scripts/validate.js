function showInputError (formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__text-input_type_error')
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}
function hideInputError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__text-input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
}
function isValid (formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        hideInputError(formElement, inputElement);
      }
}
function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      })
}
function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__submit-button_type_disabled');
      } else {
        buttonElement.classList.remove('popup__submit-button_type_disabled');
      }
}
function enableValidation({
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
}) {
        const formList = Array.from(document.querySelectorAll(`${formSelector}`));
        formList.forEach((formElement) => {
            setEventListeners(formElement);
})}
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__text-input'));
    const buttonElement = formElement.querySelector('.popup__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          isValid(formElement, inputElement)
          toggleButtonState(inputList, buttonElement);
        });
      });
}
//Включение валидации
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text-input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_type_disabled',
    inputErrorClass: 'popup__text-input_type_error',
    errorClass: 'popup__input-error_active'
  });