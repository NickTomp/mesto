export default class Section {
    constructor({ items, renderer }, sectionSelector) {
        this._items = items;
        this._renderer = renderer;
        this._section = document.querySelector(sectionSelector);
    }
    renderItems() {
        this._items.forEach(item => {
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