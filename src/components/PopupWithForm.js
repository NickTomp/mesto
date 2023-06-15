import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._valuesList = {};
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__text-input');
    }
    _getInputValues() {
        this._inputList.forEach(input => {
            this._valuesList[input.name] = input.value;
          });
          return this._valuesList;
    };
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => { 
            this._getInputValues();
            this._handleFormSubmit(evt, this._valuesList);
            this.close();   
        });
    };
    close() {
        super.close();
        this._form.reset();
    };
}
