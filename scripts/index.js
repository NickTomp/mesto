//Объявление переменных (для profile)
const ProfilePopup = document.querySelector('#profile-popup');
const ProfileFormElement = ProfilePopup.querySelector('.popup__form');
const nameInput = ProfileFormElement.querySelector('#name-input');
const jobInput = ProfileFormElement.querySelector('#job-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const editProfileButton = document.querySelector('.profile__button');
const ProfileCloseButton = ProfilePopup.querySelector('.popup__close-button');
//Объявление переменных (для image)
const ImagePopup = document.querySelector('#image-popup');
const ImageFormElement = ImagePopup.querySelector('.popup__form');
const titleInput = ImageFormElement.querySelector('#title-input');
const linkInput = ImageFormElement.querySelector('#link-input');
const addButton = document.querySelector('.profile__add-button');
const ImageCloseButton = ImagePopup.querySelector('.popup__close-button');
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
let cardsList = document.querySelector('.elements');
const viewPopup = document.querySelector('#view-popup');
const viewPopupImage = viewPopup.querySelector('.popup__image');
const viewPopupText = viewPopup.querySelector('.popup__caption');
const viewPopupCloseButton = viewPopup.querySelector('.popup__close-button');
//Создание первичных событий, объявление вторичных переменных
addCardsArray();
const cards = document.querySelector('.elements');
const deleteButton = cards.querySelectorAll('.elements__delete-button');
const likeButton = cards.querySelectorAll('.elements__like-button');
const imageContent = cards.querySelectorAll('.elements__image');
//Объявление функций 
//(для profile)
function openProfilePopup() {
    ProfilePopup.classList.add('popup_opened');
    const userName = profileName.textContent;
    const userJob = profileJob.textContent;
    nameInput.value = userName;
    jobInput.value = userJob;
}
function closeProfilePopup() {
    ProfilePopup.classList.remove('popup_opened');
}
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const userName = nameInput.value;
    const userJob = jobInput.value;
    profileName.textContent = userName;
    profileJob.textContent = userJob;
    closeProfilePopup();
}
//(для image)
function addCardsArray() {
    for (let i = 0; i < initialCards.length; i++) {
        const imageElement = imageTemplate.querySelector('.elements__element').cloneNode(true);
        imageElement.querySelector('.elements__image').src = initialCards[i].link;
        imageElement.querySelector('.elements__image').alt = initialCards[i].alt;
        imageElement.querySelector('.elements__text').textContent = `${initialCards[i].name}`;
        cardsList.append(imageElement);
    }
}
function initializeArray(deleteButton, likeButton, imageContent) {
    //Назначения для первичных кнопок delete
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', function (evt) {
            deleteCard(evt);
        })
    };
    //Назначения для первичных кнопок like
    for (let i = 0; i < likeButton.length; i++) {
        likeButton[i].addEventListener('click', function (evt) {
            likeToggle(evt);
        })
    };
    //Назначения для первичных кнопок view
    for (let i = 0; i < imageContent.length; i++) {
        imageContent[i].addEventListener('click', function (evt) {
            openImageViewPopup(evt);
        })
    };
};
function openImageAddPopup() {
    ImagePopup.classList.add('popup_opened');
    titleInput.value = '';
    linkInput.value = '';
}
function closeImageAddPopup() {
    ImagePopup.classList.remove('popup_opened');
}
function handleImageFormSubmit(evt) {
    evt.preventDefault();
    const imageTitle = titleInput.value;
    const imageLink = linkInput.value;
    const imageElement = imageTemplate.querySelector('.elements__element').cloneNode(true);
    imageElement.querySelector('.elements__image').src = imageLink;
    imageElement.querySelector('.elements__image').alt = imageTitle;
    imageElement.querySelector('.elements__text').textContent = `${imageTitle}`;
    cardsList.prepend(imageElement);
    const newDeleteButton = imageElement.querySelector('.elements__delete-button');
    newDeleteButton.addEventListener('click', function (evt) {
        deleteCard(evt);
    });
    const newLikeButton = imageElement.querySelector('.elements__like-button');
    newLikeButton.addEventListener('click', function (evt) {
        likeToggle(evt);
    });
    const picture = imageElement.querySelector('.elements__image');
    picture.addEventListener('click', openImageViewPopup);
    closeImageAddPopup();
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
function openImageViewPopup(evt) {
    const eventTarget = evt.target;
    const imageLink = eventTarget.src;
    const imageText = eventTarget.alt;
    viewPopupImage.src = imageLink;
    viewPopupImage.alt = imageText;
    viewPopupText.textContent = imageText;
    viewPopup.classList.add('popup_opened');
}
function closeImageViewPopup() {
    viewPopup.classList.remove('popup_opened');
}
// Создание обработчиков пользовательских событий
//Для profile
editProfileButton.addEventListener('click', openProfilePopup);
ProfileCloseButton.addEventListener('click', closeProfilePopup);
ProfileFormElement.addEventListener('submit', handleProfileFormSubmit);
//Для image
initializeArray(deleteButton, likeButton, imageContent);
addButton.addEventListener('click', openImageAddPopup);
ImageCloseButton.addEventListener('click', closeImageAddPopup);
ImageFormElement.addEventListener('submit', handleImageFormSubmit);
viewPopupCloseButton.addEventListener('click', closeImageViewPopup);
