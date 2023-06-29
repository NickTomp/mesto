export default class Card {
    constructor(item, api, selector, handleCardClick, deleteHandler, myId) {
        this._likesArray = item.likes
        this._api = api
        this._ownerId = item.owner._id;
        this._cardId = item._id
        this._myId = myId
        this._link = item.link;
        this._name = item.name;
        this._templateSelector = selector;
        this._numberOfLikes = item.likes.length;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = deleteHandler;
    }
    _cloneTemplate() {
        const imageTemplate = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.elements__element')
            .cloneNode(true);
        return imageTemplate;
    }
    _likeToggle() {
        if (this._likeButton.classList.contains('elements__like-button_active')) { 
            this._api.removeLike(this._cardId)
            .then((res) => res.json())
            .then((data) => this._likesCounter.textContent = data.likes.length)
        } else { 
            this._api.setLike(this._cardId)
            .then((res) => res.json())
            .then((data) => this._likesCounter.textContent = data.likes.length)
        }
        this._likeButton.classList.toggle('elements__like-button_active');
    }
    _setEventListeners() {
        if(this._deleteButton !== null){this._deleteButton.addEventListener('click', () => this._handleCardDelete(this._element))}
        this._likeButton = this._element.querySelector('.elements__like-button');
        this._likeButton.addEventListener('click', () => this._likeToggle());
        this._image.addEventListener('click', () => this._handleCardClick({imgName: this._name, imgLink: this._link}))
    }
    _setDeleteButton() {
        if (this._ownerId !== this._myId) {this._deleteButton.remove()};
    }
    createNewElement(isLiked) {
        this._element = this._cloneTemplate();
        this._element.id = this._cardId;
        this._deleteButton = this._element.querySelector('.elements__delete-button');
        this._setDeleteButton();
        this._image = this._element.querySelector('.elements__image');
        this._image.src = this._link;
        this._image.alt = this._name;
        this._likesCounter = this._element.querySelector('.elements__counter')
        this._likesCounter.textContent = this._numberOfLikes;
        this._element.querySelector('.elements__text').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
}