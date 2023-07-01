import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__text-input');
        this._submitButton = this._popup.querySelector('.popup__submit-button')
        this.close = this.close.bind(this)
        this.renderLoading = this.renderLoading.bind(this)
    }
    _getInputValues() {
        this._valuesList = {};
        this._inputList.forEach(input => {
            this._valuesList[input.name] = input.value;
        });
        return this._valuesList;
    };
    renderLoading() {
        if (this._submitButton.textContent === 'Сохранить' || this._submitButton.textContent === 'Создать') {
            this._submitButton.textContent = 'Сохранение...'
        } else if (this._popup.id === 'image-popup'){
            this._submitButton.textContent = 'Создать'
        }
        else {
            this._submitButton.textContent = 'Сохранить'
        }
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._getInputValues();
            this._handleFormSubmit(this._valuesList);
        });
    };
    close() {
        super.close();
        this._form.reset();
    };
}
