import Card from '../components/Card';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {initialCards, settingsObject} from '../utils/constants.js'
import './index.css';
//Объявление переменных (для profile)
const profilePopup = document.querySelector('#profile-popup');
const newProfilePopup = new PopupWithForm('#profile-popup', handleProfileFormSubmit);
const newInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' })
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('#name-input');
const jobInput = profileFormElement.querySelector('#job-input');
const editProfileButton = document.querySelector('.profile__button');
//Объявление переменных (для image)
const imagePopup = document.querySelector('#image-popup');
const newImagePopup = new PopupWithForm('#image-popup', handleImageFormSubmit)
const imageFormElement = imagePopup.querySelector('.popup__form');
const addButton = document.querySelector('.profile__add-button');
const newSection = new Section({ items: initialCards, renderer: renderCards }, '.elements');
const popupWithImage = new PopupWithImage('#view-popup');
//Создание первичных событий
addCardsArray();
//Объявление функций 
//(для profile)
function startProfilePopup() {
    const currentInfo = newInfo.getUserInfo()
    nameInput.value = currentInfo.name;
    jobInput.value = currentInfo.job;
}
function handleProfileFormSubmit(values) {
    newInfo.setUserInfo(values);
}
//(для image)
function renderCards(item) {
    const card = new Card(item.link, item.name, '#image-element', handleCardClick);
    return card.createNewElement();
}
function addCardsArray() {
    newSection.renderItems();
}
function createCard(imgLink, imgName) {
    const newElement = renderCards({ link: imgLink, name: imgName })
    newSection.addItem(newElement, false);
}
function handleCardClick({imgName, imgLink}) {
    popupWithImage.open({name: imgName, link: imgLink});
}
function handleImageFormSubmit(values) {
    
    const imageTitle = values.title;
    const imageLink = values.link;
    createCard(imageLink, imageTitle);
}
//(Для валидации)
function addOpenButtonListener(button, formVal) {
    button.addEventListener('click', () =>  formVal.resetValidaton());
}
function addValidation() {
    const profileFormVal = new FormValidator(settingsObject, profileFormElement);
    const imageFormVal = new FormValidator(settingsObject, imageFormElement);
    profileFormVal.enableValidation();
    imageFormVal.enableValidation();
    addOpenButtonListener(editProfileButton, profileFormVal);
    addOpenButtonListener(addButton, imageFormVal);
}
// Создание обработчиков пользовательских событий
//Для profile
newProfilePopup.setEventListeners();
editProfileButton.addEventListener('click', function () {
    newProfilePopup.open();
    startProfilePopup();
});
//Для image
newImagePopup.setEventListeners();
popupWithImage.setEventListeners()
addButton.addEventListener('click', function () {
    newImagePopup.open();
});
addValidation();