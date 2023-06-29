import Card from '../components/Card';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirmation from '../components/PopupConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import {settingsObject} from '../utils/constants.js'
import './index.css';
//Объявление переменных (для profile)
const myId = '96f76a193f2e26b1ae5d7c3e';
const profilePopup = document.querySelector('#profile-popup');
const profilePopupSubmitButton = profilePopup.querySelector('.popup__submit-button');
const avatarPopup = document.querySelector('#avatar-popup');
const avatarPopupSubmitButton = profilePopup.querySelector('.popup__submit-button');
const avatarFormElement = avatarPopup.querySelector('.popup__form')
const newProfilePopup = new PopupWithForm('#profile-popup', handleProfileFormSubmit);
const newAvatarPopup = new PopupWithForm('#avatar-popup', handleAvatarFormSubmit);
const newConfirmationPopup = new PopupConfirmation('#delete-popup');
const newInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job', avatarSelctor: '.profile__avatar' })
const profileFormElement = profilePopup.querySelector('.popup__form');
const nameInput = profileFormElement.querySelector('#name-input');
const jobInput = profileFormElement.querySelector('#job-input');
const editProfileButton = document.querySelector('.profile__button');
const editAvatarButton = document.querySelector('.profile__avatar-button');
//Объявление переменных (для image)
const imagePopup = document.querySelector('#image-popup');
const imagePopupSubmitButton = imagePopup.querySelector('.popup__submit-button');
const newImagePopup = new PopupWithForm('#image-popup', handleImageFormSubmit)
const imageFormElement = imagePopup.querySelector('.popup__form');
const addButton = document.querySelector('.profile__add-button');
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
    headers: {
      authorization: 'ea3879cb-af90-42ef-bbf7-41be172d27a4',
      'Content-Type': 'application/json'
    }
  })
const newSection = new Section({ renderer: renderCards }, '.elements');
const popupWithImage = new PopupWithImage('#view-popup');
//Создание первичных событий
api.getCardsArray()
.then((cardsArray) => { 
    newSection.renderItems(cardsArray)
})
api.getUserInfo()
.then((data) => {
    newInfo.setUserInfo({ name: data.name, job: data.about });
    newInfo.setUserAvatar(data.avatar);
})
//Объявление функций 
//(для profile)
function startProfilePopup() {
    const currentInfo = newInfo.getUserInfo()
    nameInput.value = currentInfo.name;
    jobInput.value = currentInfo.job;
}
function handleProfileFormSubmit(values) {
    api.editProfileInfo(values, profilePopupSubmitButton)
    newInfo.setUserInfo(values);
}
function handleAvatarFormSubmit(values) {
 api.editProfileAvatar(values.link, avatarPopupSubmitButton);
 newInfo.setUserAvatar(values.link);
}
//(для image)
function renderCards(item) {
    const card = new Card(item, api, '#image-element', handleCardClick, handleCardDelete, myId);
    return card.createNewElement();
}
function createCard(imgLink, imgName) {
    api.addNewCard(imgLink, imgName, renderCards, newSection, imagePopupSubmitButton);
}
function handleCardClick({imgName, imgLink}) {
    popupWithImage.open({name: imgName, link: imgLink});
}
newConfirmationPopup.setEventListener();
function handleCardDelete(item) {
    newConfirmationPopup.open(item, api);

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
    const avatarFormVal = new FormValidator(settingsObject, avatarFormElement);
    profileFormVal.enableValidation();
    imageFormVal.enableValidation();
    avatarFormVal.enableValidation()
    addOpenButtonListener(editProfileButton, profileFormVal);
    addOpenButtonListener(addButton, imageFormVal);
    addOpenButtonListener(editAvatarButton, avatarFormVal);
}
// Создание обработчиков пользовательских событий
//Для profile
newProfilePopup.setEventListeners();
editProfileButton.addEventListener('click', function () {
    newProfilePopup.open();
    startProfilePopup();
});
newAvatarPopup.setEventListeners();
editAvatarButton.addEventListener('click', function () {
    newAvatarPopup.open();
    
});
//Для image
newImagePopup.setEventListeners();
popupWithImage.setEventListeners()
addButton.addEventListener('click', function () {
    newImagePopup.open();
});
addValidation();