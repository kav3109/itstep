// 1. Marker ******************************************************************
//
// class Marker {
//     constructor(count, color) {
//         this.count = count;
//         this.color = color;
//     }
//     get color() {
//         return this._color;
//     }
//     set color(val) {
//         if(typeof val !== 'string') {
//             console.error('Wrong type of passed color value!');
//             return;
//         }
//         this._color = val;
//     }
//     get count() {
//         return this._count;
//     }
//     set count(val) {
//         if(typeof val !== 'number') {
//             console.error('Wrong type of passed count value!');
//             return;
//         }
//         if(val < 0 || val > 100) {
//             console.error('Passed value should be from 0 to 100!');
//             return;
//         }
//         this._count = val;
//     }
//
//     displayText(text){
//         if(typeof text !== 'string') {
//             console.error('Wrong type of passed value!');
//             return;
//         }
//         text = text.trim();
//         let newText = '';
//         let counter = 0;
//         while(this.count >= 0.5 && counter < text.length) {
//             if(text[counter] !== ' ') {
//                 newText += text[counter];
//                 this.count -= 0.5;
//             } else {
//                 newText += text[counter];
//             }
//             counter++;
//         }
//         document.write(`<h1 style="color:${this.color}">${newText}</h1>`);
//     }
// }
//
// class MarkerCapacity extends Marker{
//
//     setCapasity(val) {
//         this.count = val;
//     }
//
// }
//
// let userColor = prompt('Enter color of text, please!');
// let userMarkerCapacity = +prompt('Enter capacity of a marker, please!');
// let userText = prompt('Enter your text, please!');
//
// const markerCapacity = new MarkerCapacity(userMarkerCapacity, userColor);
// markerCapacity.setCapasity(userMarkerCapacity);
// markerCapacity.displayText(userText);

// // 2. ExtendedDate ***************************************************************
//
// class ExtendedDate extends  Date{
//
//     checkPassedValue(number) {
//         if(typeof number !== 'number') {
//             console.error('Passed value should be in ms');
//             return;
//         }
//     };
//     getTextDate(seconds) {
//         this.checkPassedValue(seconds);
//         let date = new Date(seconds);
//         let number = date.getDate();
//         let month = date.toLocaleString("en", {month:'long'});
//         function getTextNumber(num) {
//             let simpleNum = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth', 'Tenth','Eleventh','Twelfth','Thirteenth','Fourteenth','Fifteenth','Sixteenth','Seventeenth','Eighteenth', 'Nineteenth'];
//             if(num < 20) {
//                 return simpleNum[num-1];
//             } else if (num === 20) {
//                 return 'Twentieth';
//             } else if(num === 30) {
//                 return 'Thirtieth';
//             } else if(num > 20 && num < 30){
//                 return `Twenty ${simpleNum[num-21]}`
//             } else {
//                 return `Thirty ${simpleNum[num-31]}`
//             }
//         }
//
//         alert(`The ${getTextNumber(number)} of ${month}`);
//     };
//     checkPeriodOfTime(seconds) {
//         this.checkPassedValue(seconds);
//         alert((seconds > Date.parse(Date()))? true: false);
//     };
//     checkLeapYear(seconds) {
//         this.checkPassedValue(seconds);
//         let year = new Date(seconds).getFullYear();
//         alert(new Date(year, 1, 29).getMonth() === 1);
//     };
//     getNextDate(seconds) {
//         this.checkPassedValue(seconds);
//         alert(new Date(seconds+(1000*60*60*24)));
//     };
// }
//
// const extendedDate = new ExtendedDate();
// extendedDate.getTextDate(Date.parse(Date()));
// extendedDate.checkPeriodOfTime(1584576000000);//19.03.2020;
// extendedDate.checkLeapYear(1584576000000);//19.03.2020;
// extendedDate.getNextDate(1584576000000);//19.03.2020;



// 3 News. ********************************************************************

class News {
    constructor(news) {
        this.news = news;
    }

    get countOfNews() {
        return this.news.length;
    }
}
const news = new News([{},{}]);
console.log(news.countOfNews);

// ■ метод для вывода на экран всех новостей;
// ■ метод для добавления новости;
// ■ метод для удаления новости;
// ■ метод для сортировки новостей по дате (от последних но-
// востей до старых);
// ■ метод для поиска новостей по тегу (возвращает массив
// новостей, в которых указан переданный в метод тег).
// Продемонстрировать работу написанных методов.

// Задание 1
// Реализовать класс, описывающий геометрическую фигуру со
// свойствами и методами:
// ■ get- свойство для получения названия фигуры;
// ■ метод для вывода информации о фигуре (стороны и их
// длина);
// ■ метод для вычисления площади фигуры;
// ■ метод для вычисления периметра фигуры.
//     Реализуйте классы-наследники: квадрат, прямоугольник и
// треугольник. Переопределите методы вывода и вычислений в
// классах-наследниках.
//     Создайте массив с различными фигурами и выведите инфор-
// мацию о каждой фигуре, включая площадь и периметр.