export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }  
    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        this.toggleButtonState();
        this._inputList.forEach((_inputElement) => {
            _inputElement.addEventListener('input', () => {
                this._isValid(_inputElement)
                this.toggleButtonState();
            });
        });
    }
    _isValid(_inputElement) {
        if (!_inputElement.validity.valid) {
            this._showInputError(_inputElement, _inputElement.validationMessage);
        } else {
            this._hideInputError(_inputElement);
        }
    }
    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._config.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'disabled');
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled', 'disabled');
        }
    }
    _hasInvalidInput() {
        return this._inputList.some((_inputElement) => {
            return !_inputElement.validity.valid;
        })
    }
    _showInputError(_inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.add(this._config.inputErrorClass)
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
    }
    _hideInputError(_inputElement) {
        const errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    }
    resetError() {
        if (!this._hasInvalidInput()) {
            this._inputList.forEach(_inputElement => this._hideInputError(_inputElement));
            this.toggleButtonState();
        }
        else {this._inputList.forEach(_inputElement => this._hideInputError(_inputElement));}
    }
    enableValidation() {
        this._setEventListeners();
    }
}