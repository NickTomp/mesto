//Объявление переменных
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('#name-input');
let jobInput = formElement.querySelector('#job-input');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let editProfileButton = document.querySelector('.profile__button');
let closeButton = document.querySelector('.popup__close-button');
//Объявление функций
function openPopup() {
    popup.classList.add('popup_opened');
    let userName = profileName.textContent;
    let userJob = profileJob.textContent;
    nameInput.value = userName;
    jobInput.value = userJob;
}
function closePopup() {
    popup.classList.remove('popup_opened');
}
function handleFormSubmit(evt) {
    evt.preventDefault();
    let userName = nameInput.value;
    let userJob = jobInput.value;
    profileName.textContent = userName;
    profileJob.textContent = userJob;
    closePopup();
}
//Создание обработчиков событий
editProfileButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);