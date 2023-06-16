import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._viewPopupImage =  this._popup.querySelector('.popup__image');
        this._viewPopupText = this._popup.querySelector('.popup__caption');
    }
    open({name, link}) {
        super.open();
        const imageLink = link;
        const imageText = name;
        this._viewPopupImage.src = imageLink;
        this._viewPopupImage.alt = imageText;
        this._viewPopupText.textContent = imageText;
    };
}