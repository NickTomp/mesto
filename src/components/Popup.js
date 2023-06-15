export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    open() {
        this._popup.classList.add('popup_opened');
    };
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popup.removeEventListener('click', (evt) => this._handleBgClick(evt));
    };
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };
    _handleBgClick(evt) {
        if (evt.currentTarget.className === evt.target.className) {
            this.close();
        }
    };
    setEventListeners() {
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popup.addEventListener('mousedown', (evt) => this._handleBgClick(evt));
        this._closeButton = this._popup.querySelector('.popup__close-button');
        this._closeButton.addEventListener('click', () => this.close());
    };
}