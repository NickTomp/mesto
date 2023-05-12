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
const imageTemplate = document.querySelector('#image-element').content;
const cardsList = document.querySelector('.elements');
const viewPopup = document.querySelector('#view-popup');
const viewPopupImage = viewPopup.querySelector('.popup__image');
const viewPopupText = viewPopup.querySelector('.popup__caption');
const viewPopupCloseButton = viewPopup.querySelector('.popup__close-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
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
function createCard(name, link) {
    const imageElement = imageTemplate.querySelector('.elements__element').cloneNode(true);
    const deleteButton = imageElement.querySelector('.elements__delete-button');
    const likeButton = imageElement.querySelector('.elements__like-button');
    const imageContent = imageElement.querySelector('.elements__image');
    imageElement.querySelector('.elements__image').src = link;
    imageElement.querySelector('.elements__image').alt = name;
    imageElement.querySelector('.elements__text').textContent = `${name}`;
    deleteButton.addEventListener('click', function (evt) {
        deleteCard(evt);
    })
    likeButton.addEventListener('click', function (evt) {
        likeToggle(evt);
    })
    imageContent.addEventListener('click', function (evt) {
        startImageViewPopup(evt);
        openPopup(viewPopup);
    })
    return imageElement
}
function addCardsArray() {
    for (let i = 0; i < initialCards.length; i++) {
        const imageElement = createCard(initialCards[i].name, initialCards[i].link);
        cardsList.append(imageElement);
    }
}
function handleImageFormSubmit(evt) {
    evt.preventDefault();
    const imageTitle = titleInput.value;
    const imageLink = linkInput.value;
    const imageElement = createCard(imageTitle, imageLink);
    cardsList.prepend(imageElement);
    closePopup(imagePopup);
}
function deleteCard(evt) {
    const eventTarget = evt.target;
    const cardItem = eventTarget.closest('.elements__element');
    cardItem.remove();
};
function likeToggle(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('elements__like-button_active');
}
function startImageViewPopup(evt) {
    const eventTarget = evt.target;
    const imageLink = eventTarget.src;
    const imageText = eventTarget.alt;
    viewPopupImage.src = imageLink;
    viewPopupImage.alt = imageText;
    viewPopupText.textContent = imageText;
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