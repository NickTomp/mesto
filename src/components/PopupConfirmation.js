import Popup from './Popup.js';
export default class PopupConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._deleteButton = this._popup.querySelector('.popup__submit-button_type_agree'); 
    }
    setEventListener() {
        this._deleteButton.addEventListener('click', () => {
            this._handleDelete();
        })
    }
    open(item, api) {
        this._item = item;
        this._api = api;
        super.open();
        super.setEventListeners();
        
    };
    _handleDelete(){
        this._item.remove();
        this._api.deleteCard(this._item);
        super.close();
        }
    }
