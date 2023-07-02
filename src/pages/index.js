import Card from '../components/Card';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirmation from '../components/PopupConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import { settingsObject } from '../utils/constants.js'
import './index.css';
//Объявление переменных (для profile)
const profile = document.querySelector('.profile');
const profilePopup = document.querySelector('#profile-popup');
const avatarPopup = document.querySelector('#avatar-popup');
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
api.getUserInfo()
    .then((data) => {
        newInfo.setUserInfo({ name: data.name, job: data.about });
        newInfo.setUserAvatar(data.avatar);
        profile.id = data._id;
    })
    .then(() => {
        api.getCardsArray()
            .then((cardsArray) => {
                newSection.renderItems(isLiked(cardsArray))
            })
    })
    .catch((err) => alert(`${err} - не удалось загрузить данные`))
//Объявление функций 
//(для profile)
function startProfilePopup() {
    const currentInfo = newInfo.getUserInfo()
    nameInput.value = currentInfo.name;
    jobInput.value = currentInfo.job;
}
function handleProfileFormSubmit(values) {
    newProfilePopup.renderLoading();
    api.editProfileInfo(values)
        .then(setTimeout(newProfilePopup.close, 1000))
        .then(setTimeout(newProfilePopup.renderLoading, 1000))
        .then(newInfo.setUserInfo(values))
        .catch((err) => alert(`${err} - не удалось обновить данные профиля`))
}
function handleAvatarFormSubmit(values) {
    newAvatarPopup.renderLoading();
    api.editProfileAvatar(values.link)
        .then(setTimeout(newAvatarPopup.close, 1000))
        .then(setTimeout(newAvatarPopup.renderLoading, 1000))
        .then(newInfo.setUserAvatar(values.link))
        .catch((err) => alert(`${err} - не удалось обновить аватар профиля`))
}
//(для image)
function isLiked(array) {
    array.forEach(card => {
        card.likes.forEach((like) => {
            if (like._id === profile.id) {
                card.isLiked = true
            }
        })
    });
    return array
}
function handleLikeToggle(likeButton, cardId, counter) {
    if (likeButton.classList.contains('elements__like-button_active')) { 
        api.removeLike(cardId)
        .then((data) => counter.textContent = data.likes.length)
        .catch((err) => alert(`${err} - не удалось убрать лайк`))
    } else { 
        api.setLike(cardId)
        .then((data) => counter.textContent = data.likes.length)
        .catch((err) => alert(`${err} - не удалось добавить лайк`))
    }
}
function handleDeleteCard(item) {
    api.deleteCard(item)
    .catch((err) => alert(`${err} - удалить карточку не удалось`))
}
function renderCards(item) {
    const card = new Card(item, '#image-element', handleCardClick, handleCardDelete, handleLikeToggle, profile.id);
    return card.createNewElement();
}
function createCard(imgLink, imgName) {
    newImagePopup.renderLoading();
    api.addNewCard(imgLink, imgName)
        .then((res) => {
            const newElement = renderCards({
                _id: res._id,
                link: res.link,
                name: res.name,
                owner: {
                    _id: res.owner._id
                },
                likes: res.likes,
            })
            newSection.addItem(newElement, false)
        })
        .then(setTimeout(newImagePopup.close, 1000))
        .then(setTimeout(newImagePopup.renderLoading, 1000))
        .catch((err) => alert(`${err} - не удалось добавить новую карточку`))
}
function handleCardClick({ imgName, imgLink }) {
    popupWithImage.open({ name: imgName, link: imgLink });
}
newConfirmationPopup.setEventListeners();
function handleCardDelete(item) {
    newConfirmationPopup.open(item, handleDeleteCard);
}
function handleImageFormSubmit(values) {
    const imageTitle = values.title;
    const imageLink = values.link;
    createCard(imageLink, imageTitle);
}
//(Для валидации)
function addOpenButtonListener(button, formVal) {
    button.addEventListener('click', () => formVal.resetValidaton());
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