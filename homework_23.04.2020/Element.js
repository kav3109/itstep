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

class DomBuilder {

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
    withChild(childElem) {
        this.element.addChild(childElem);
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
let p1 = new DomBuilder().create('p').withId('p1').withClass('text').withContent('Hello,').result;
let p2 = new DomBuilder().create('p').withId('p2').withClass('text').withContent('world!').result;
let div = new DomBuilder().create('div').withId('main').withClass('container').withChild(p1).withChild(p2).result;