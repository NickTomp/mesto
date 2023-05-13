//Объявление необходимых констант
const settingsObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_type_disabled',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__input-error_active'
}
//Объявление функций
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
      setEventListeners(formElement, config);
})}
function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, config)
        toggleButtonState(inputList, buttonElement, config);
      });
    });
}
function isValid (formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
}
function toggleButtonState (inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', 'disabled');
    }
}
function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
}
function showInputError (formElement, inputElement, errorMessage, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
}
function hideInputError (formElement, inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
}
function resetError(formElement, config) { 
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  if(!hasInvalidInput(inputList)) {
  inputList.forEach(inputElement => hideInputError(formElement, inputElement, config));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config); 
  }
  else {inputList.forEach(inputElement => hideInputError(formElement, inputElement, config));}
} 
//Включение валидации
enableValidation(settingsObject);