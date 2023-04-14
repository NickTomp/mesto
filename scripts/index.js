function getUserName() {
    let profileName = document.querySelector('.profile__name');
    let RecievedName = profileName.textContent;
    return RecievedName
}
function getUserJob() {
    let profileJob = document.querySelector('.profile__job');
    let recievedJob = profileJob.textContent;
    return recievedJob;
}
//Исполнение открытия формы и получение актуальных данных из документа
function openForm() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened')
    let userName = getUserName();
    let userJob = getUserJob();
    let nameInput = popup.querySelector('#name-input');
    let jobInput = popup.querySelector('#job-input');
    nameInput.value = `${userName}`;
    jobInput.value = `${userJob}`;
}
//Обработка нажатия на кнопку редактирования профиля
let editProfileButton = document.querySelector('.profile__button');
editProfileButton.addEventListener('click', openForm);
//Исполнение закрытия формы
function closeForm() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}
//Обработка нажатия на закрывающую кнопку
let closeButton = document.querySelector('.popup__close-button');
closeButton.addEventListener('click', closeForm);
//Блок редактирования формы
// Находим форму в DOM
let formElement = document.querySelector('.popup__container')
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#name-input')
let jobInput = formElement.querySelector('#job-input')
//Исполнение редактирования формы
function handleFormSubmit(evt) {
    evt.preventDefault();// Эта строчка отменяет стандартную отправку формы.
    //Получаем актуальные значения из полей
    let userName = nameInput.value;
    let userJob = jobInput.value;
    //Выбор объектов для записи, помещение их в переменные
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');
    //Запись значений переменных в нужные поля
    profileName.textContent = `${userName}`;
    profileJob.textContent = `${userJob}`;
    closeForm();
}
//Обработка отправки формы
let submitButton = document.querySelector('.popup__submit-button');
submitButton.addEventListener('click', handleFormSubmit);