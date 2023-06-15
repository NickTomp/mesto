import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import '../pages/index.css'
//Объявление переменных (для profile)
const profilePopup = document.querySelector('#profile-popup');
const profilePopupHandler = new PopupWithForm('#profile-popup', handleProfileFormSubmit);
const newInfo = new UserInfo({ name: '.profile__name', job: '.profile__job' })
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('#name-input');
const jobInput = profileFormElement.querySelector('#job-input');
const editProfileButton = document.querySelector('.profile__button');
//Объявление переменных (для image)
const imagePopup = document.querySelector('#image-popup');
const imagePopupHandler = new PopupWithForm('#image-popup', handleImageFormSubmit)
const imageFormElement = imagePopup.querySelector('.popup__form');
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
const viewPopup = document.querySelector('#view-popup');
const viewPopupImage = viewPopup.querySelector('.popup__image');
const viewPopupText = viewPopup.querySelector('.popup__caption');
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
//(для profile)
function startProfilePopup() {
    const currentInfo = newInfo.getUserInfo()
    nameInput.value = currentInfo.name;
    jobInput.value = currentInfo.job;
}
function handleProfileFormSubmit(evt, values) {
    evt.preventDefault();
    newInfo.setUserInfo(values);
}
//(для image)
function renderCards(item) {
    const card = new Card(item.link, item.name, 'image-element', handleCardClick);
    return card.createNewElement();
}
function addCardsArray() {
    const newSection = new Section({ items: initialCards, renderer: renderCards }, '.elements');
    newSection.renderItems();
}
function createCard(imgLink, imgName) {
    const newElement = renderCards({ link: imgLink, name: imgName })
    const newSection = new Section({}, '.elements');
    newSection.addItem(newElement, false);
}
function handleCardClick(img) {
    const imagePopup = new PopupWithImage('#view-popup')
    imagePopup.open(img);
    imagePopup.setEventListeners()
}
function handleImageFormSubmit(evt, values) {
    evt.preventDefault();
    const imageTitle = values.title;
    const imageLink = values.link;
    createCard(imageLink, imageTitle);
}
//(Для валидации)
function buttonListeners(button, formVal) {
    button.addEventListener('click', () => { formVal.resetError(); formVal.toggleButtonState() });
}
function addValidation() {
    const profileFormVal = new FormValidator(settingsObject, profileFormElement);
    const imageFormVal = new FormValidator(settingsObject, imageFormElement);
    profileFormVal.enableValidation();
    imageFormVal.enableValidation();
    buttonListeners(editProfileButton, profileFormVal);
    buttonListeners(addButton, imageFormVal);
}
// Создание обработчиков пользовательских событий
//Для profile
profilePopupHandler.setEventListeners();
editProfileButton.addEventListener('click', function () {
    profilePopupHandler.open();
    startProfilePopup();
});
//Для image
imagePopupHandler.setEventListeners();
addButton.addEventListener('click', function () {
    imagePopupHandler.open();
});
addValidation();
export {
    viewPopupImage,
    viewPopupText,
};