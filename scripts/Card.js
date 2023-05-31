import {openPopup, viewPopup, viewPopupImage, viewPopupText} from './index.js';
export default class Card {
    constructor(link, name, selector) {
        this._link = link;
        this._name = name;
        this._templateSelector = selector;  
    }
    _cloneTemplate() {
        const imageTemplate = document
        .querySelector(`#image-element`)
        .content
        .querySelector('.elements__element')
        .cloneNode(true);
        return imageTemplate;
    }
    _deleteCard() {
        this._element.remove();
    };
    _likeToggle() {
        this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
    }
    _startImageViewPopup() {
        const eventTarget = this._element.querySelector('.elements__image');
        const imageLink = eventTarget.src;
        const imageText = eventTarget.alt;
        viewPopupImage.src = imageLink;
        viewPopupImage.alt = imageText;
        viewPopupText.textContent = imageText;
    }
    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._deleteCard())
        this._element.querySelector('.elements__like-button').addEventListener('click',() => this._likeToggle())
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._startImageViewPopup();
            openPopup(viewPopup);
        })
    }
    createNewElement() {
        this._element = this._cloneTemplate();
        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__text').textContent = `${this._name}`;
        this._setEventListeners();
        return this._element;
    }
}