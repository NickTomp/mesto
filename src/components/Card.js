export default class Card {
    constructor(link, name, selector, handleCardClick) {
        this._link = link;
        this._name = name;
        this._templateSelector = selector;
        this._handleCardClick = handleCardClick;
    }
    _cloneTemplate() {
        const imageTemplate = document
            .querySelector(`#${this._templateSelector}`)
            .content
            .querySelector('.elements__element')
            .cloneNode(true);
        return imageTemplate;
    }
    _deleteCard() {
        this._element.remove();
    };
    _likeToggle() {
        this._likeButton.classList.toggle('elements__like-button_active');
    }
    _setEventListeners() {
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => this._deleteCard())
        this._likeButton = this._element.querySelector('.elements__like-button');
        this._likeButton.addEventListener('click', () => this._likeToggle());
        this._image.addEventListener('click', () => this._handleCardClick(this._image))
    }
    createNewElement() {
        this._element = this._cloneTemplate();
        this._image = this._element.querySelector('.elements__image');
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.elements__text').textContent = `${this._name}`;
        this._setEventListeners();
        return this._element;
    }
}