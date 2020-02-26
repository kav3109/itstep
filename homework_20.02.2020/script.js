// 1. Circle ******************************************************************

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(val) {
        if(typeof val !== 'number') {
            console.error('Wrong type of passed value!');
            return;
        }
        this._radius = val;
    }

    getDiameter() {
        return this._radius*2;
    }
    getArea() {
        return Math.pow(this._radius, 2)*Math.PI;
    }
    getPerimeter() {
        return this._radius*2*Math.PI;
    }
}
const circle = new Circle(4);
circle.radius = 5;
console.log(`radius = ${circle.radius};
diameter = ${circle.getDiameter()};
area = ${circle.getArea()};
length = ${circle.getPerimeter()};`);

//  2. Children ***************************************************************

class Children {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        if(typeof val !== 'string') console.error('Wrong type of passed value!');
        this._name = val;
    }
    get surname() {
        return this._surname;
    }
    set surname(val) {
        if(typeof val !== 'string') console.error('Wrong type of passed value!');
        this._surname = val;
    }
    get age() {
        return this._age;
    }
    set age(val) {
        if(typeof val !== 'number') console.error('Wrong type of passed value!');
        this._age = val;
    }
}
let girl = new Children('Olga', 'Petrova', 8);
let boy = new Children('Oleg', 'Petrov', 9);
console.log(`Girl: name - ${girl.name}, surname - ${girl.surname}, age - ${girl.age}`);
console.log(`Boy: name - ${boy.name}, surname - ${boy.surname}, age - ${boy.age}`);

// 3. Css *********************************************************************

class CssClass {
    constructor(name, styles) {
        this.name = name;
        this.styles = styles;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        if(typeof val !== 'string') console.error('Wrong type of passed value!');
        this._name = val;
    }
    get styles() {
        return this._styles;
    }
    set styles(val) {
        if(typeof val !== 'object') console.error('Wrong type of passed value!');
        this._styles = val;
    }
    deleteStyle() {
        this._styles = [];
    }
    getCss() {
        return `.${this.name} {${this.styles.join('')}}`
    }
}
let myStyle = new CssClass('header', ['font-size:12px;', 'color:blue;']);
console.log(myStyle.getCss());
myStyle.deleteStyle();
console.log(myStyle.getCss());