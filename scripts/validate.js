//Объявление необходимых констант
const settingsObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_type_disabled',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__input-error_active'
}
const editProfile = document.querySelector('#profile-popup');
const profileButton = document.querySelector('.profile__button');
const addImage = document.querySelector('#add-image-form');
const addImageButton = document.querySelector('.profile__add-button');
//Объявление функций
function enableValidation(formSelector) {
  const formList = Array.from(document.querySelectorAll(`${formSelector}`));
  formList.forEach((formElement) => {
      setEventListeners(formElement);
})}
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(`${settingsObject.inputSelector}`));
  const buttonElement = formElement.querySelector(`${settingsObject.submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement)
        toggleButtonState(inputList, buttonElement);
      });
    });
}
function isValid (formElement, inputElement) {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
}
function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(settingsObject.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(settingsObject.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', 'disabled');
    }
}
function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
}
function showInputError (formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settingsObject.inputErrorClass)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settingsObject.errorClass);
}
function hideInputError (formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settingsObject.inputErrorClass);
    errorElement.classList.remove(settingsObject.errorClass);
    errorElement.textContent = '';
}
function resetError(formElement, settingsObject) { 
  const inputList = Array.from(formElement.querySelectorAll(settingsObject.inputSelector));
  if(!hasInvalidInput(inputList)) {
  inputList.forEach(inputElement => hideInputError(formElement, inputElement));
  const buttonElement = formElement.querySelector(`${settingsObject.submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement); 
  }
  else {inputList.forEach(inputElement => hideInputError(formElement, inputElement));}
} 
//Включение валидации
enableValidation(settingsObject.formSelector);
//Добавление прочих слушателей событий
profileButton.addEventListener('click', function () {
  resetError(editProfile, settingsObject)
});
addImageButton.addEventListener('click', function () {
  resetError(addImage, settingsObject)
});