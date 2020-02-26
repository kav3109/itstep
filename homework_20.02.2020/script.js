// 1. Circle

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

//  2.
//   Задание 2
// Определить класс Children, который содержит
// такие поля: имя ребенка, фамилию и возраст ,
//     публичные – методы ввода данных и
// отображения их на экран. Объявить два объекта
// класса, внести данные и показать их.
// Задание 3
// Реализовать класс, который описывает css класс.
//     Класс CssClass должен содержать внутри себя:
//     ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss() , который возвращает css код в виде стро-
// ки.