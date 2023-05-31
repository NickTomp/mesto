import Card from './Card.js';
import FormValidator from './FormValidator.js';
 //Объявление переменных (для profile)
const profilePopup = document.querySelector('#profile-popup');
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('#name-input');
const jobInput = profileFormElement.querySelector('#job-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const editProfileButton = document.querySelector('.profile__button');
//Объявление переменных (для image)
const imagePopup = document.querySelector('#image-popup');
const imageForm = imagePopup.querySelector('#add-image-form');
const imageFormElement = imagePopup.querySelector('.popup__form');
const titleInput = imageFormElement.querySelector('#title-input');
const linkInput = imageFormElement.querySelector('#link-input');
const addButton = document.querySelector('.profile__add-button');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
];
const cardsList = document.querySelector('.elements');
const viewPopup = document.querySelector('#view-popup');
const viewPopupImage = viewPopup.querySelector('.popup__image');
const viewPopupText = viewPopup.querySelector('.popup__caption');
const closeButtons = document.querySelectorAll('.popup__close-button');
const settingsObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text-input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_type_disabled',
    inputErrorClass: 'popup__text-input_type_error',
    errorClass: 'popup__input-error_active'
  }
//Создание первичных событий
addCardsArray();
//Объявление функций 
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscButton);
    popup.addEventListener('mousedown', handleBgClick); 
} 
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscButton);
    popup.removeEventListener('click', handleBgClick);
}
function makeButtonInactive(popup) {
   const targetButton = popup.querySelector('.popup__submit-button');
   targetButton.classList.add('popup__submit-button_type_disabled');
   targetButton.setAttribute('disabled', 'disabled');
}
function handleEscButton(evt) {
    if (evt.key === 'Escape') {
        const target = document.querySelector('.popup_opened');
        closePopup(target);
    }
}
function handleBgClick (evt) {
    const targetPopup = document.querySelector('.popup_opened');
    if (evt.currentTarget.className === evt.target.className) {
        closePopup(targetPopup);
    }
}
//(для profile)
function startProfilePopup() {
    const userName = profileName.textContent;
    const userJob = profileJob.textContent;
    nameInput.value = userName;
    jobInput.value = userJob;
}
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
        const userName = nameInput.value;
        const userJob = jobInput.value;
        profileName.textContent = userName;
        profileJob.textContent = userJob;
        closePopup(profilePopup);
}
//(для image)
function addCardsArray() {
    for (let i = 0; i < initialCards.length; i++) {
        const newElement = new Card(initialCards[i].link, initialCards[i].name, 'image-element');
        const imageElement = newElement.createNewElement();
        cardsList.append(imageElement);
    }
}
function handleImageFormSubmit(evt) {
    evt.preventDefault();
    const imageTitle = titleInput.value;
    const imageLink = linkInput.value;
    const newElement = new Card(imageLink, imageTitle, 'image-element');
    const imageElement = newElement.createNewElement();
    cardsList.prepend(imageElement);
    closePopup(imagePopup);
}
//Для валидации
function addValidation() {
    const formList = Array.from(document.querySelectorAll(settingsObject.formSelector));
    formList.forEach((formElement) => {
        const newValidation = new FormValidator(settingsObject, formElement);
        newValidation.enableValidation();
    });
}
// Создание обработчиков пользовательских событий
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});
//Для profile
editProfileButton.addEventListener('click', function () {
    openPopup(profilePopup);
    startProfilePopup();
});
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
//Для image
addButton.addEventListener('click', function () {
    openPopup(imagePopup);
    imageForm.reset();
    makeButtonInactive(imagePopup);
});
imageFormElement.addEventListener('submit', handleImageFormSubmit);
addValidation();
export {editProfileButton,
     addButton, 
     viewPopup, 
     viewPopupImage, 
     viewPopupText, 
     settingsObject,
     openPopup,
    };