import Popup from './Popup.js';
export default class PopupConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._deleteButton = this._popup.querySelector('.popup__submit-button_type_agree'); 
    }
    setEventListeners() {
        super.setEventListeners();
        this._deleteButton.addEventListener('click', () => {
            this._handleDelete();
        })
    }
    open(item, apiDeleteHandler) {
        this._item = item;
        this._apiDeleteHandler = apiDeleteHandler;
        super.open()
        
    }
    _handleDelete(){
        this._apiDeleteHandler(this._item);
        this._item.remove();
        super.close();
        }
    }
