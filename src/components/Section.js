export default class Section {
    constructor({ renderer }, sectionSelector) {
        this._renderer = renderer;
        this._section = document.querySelector(sectionSelector);
    }
    renderItems(array) {
        array.forEach(item => {
            const newItem = this._renderer(item);
            this.addItem(newItem);
        })
    }
    addItem(item, defaultRender = true) {
        if (defaultRender) {
            this._section.append(item);
        } else {
            this._section.prepend(item);
        }
    }
}