import Popup from './Popup.js';
import {viewPopupImage, viewPopupText} from './index.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);  
    }
    open(img) {
        super.open();
        const eventTarget = img;
        const imageLink = eventTarget.src;
        const imageText = eventTarget.alt;
        viewPopupImage.src = imageLink;
        viewPopupImage.alt = imageText;
        viewPopupText.textContent = imageText;
    };
}