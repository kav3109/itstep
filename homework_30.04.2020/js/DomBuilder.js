class Element {
    constructor (element) {
        this._element = element;
    }
    setId(id) {
        this._element.setAttribute('id',id);
    }
    addClass(cssClass) {
        this._element.classList.add(cssClass);
    }
    setContent(text) {
        this._element.innerText = text;
    }
    addChild(child) {
        this._element.appendChild(child);
    }
    print() {
        return this._element;
    }
}

export default class DomBuilder {

    create(tagName) {
        this.element = new Element(document.createElement(tagName));
        return this;
    }
    withClass(className) {
        this.element.addClass(className);
        return this;
    }
    withId(idName) {
        this.element.setId(idName);
        return this;
    }
    withChild(...childElem) {
        childElem.forEach((val)=>{
            this.element.addChild(val);
        });
        return this;
    }
    withContent(text) {
        this.element.setContent(text);
        return this;
    }
    get result() {
        return this.element.print();
    }
}