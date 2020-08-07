// 1. Marker ******************************************************************

class Marker {
    constructor(count, color) {
        this.count = count;
        this.color = color;
    }
    get color() {
        return this._color;
    }
    set color(val) {
        if(typeof val !== 'string') {
            console.error('Wrong type of passed color value!');
            return;
        }
        this._color = val;
    }
    get count() {
        return this._count;
    }
    set count(val) {
        if(typeof val !== 'number') {
            console.error('Wrong type of passed count value!');
            return;
        }
        if(val < 0 || val > 100) {
            console.error('Passed value should be from 0 to 100!');
            return;
        }
        this._count = val;
    }

    displayText(text){
        if(typeof text !== 'string') {
            console.error('Wrong type of passed value!');
            return;
        }
        text = text.trim();
        let newText = '';
        let counter = 0;
        while(this.count >= 0.5 && counter < text.length) {
            if(text[counter] !== ' ') {
                newText += text[counter];
                this.count -= 0.5;
            } else {
                newText += text[counter];
            }
            counter++;
        }
        document.write(`<h1 style="color:${this.color}">${newText}</h1>`);
    }
}

class MarkerCapacity extends Marker{

    setCapasity(val) {
        this.count = val;
    }

}

let userColor = prompt('Enter color of text, please!');
let userMarkerCapacity = +prompt('Enter capacity of a marker, please!');
let userText = prompt('Enter your text, please!');

const markerCapacity = new MarkerCapacity(userMarkerCapacity, userColor);
markerCapacity.setCapasity(userMarkerCapacity);
markerCapacity.displayText(userText);

// 2. ExtendedDate ***************************************************************

class ExtendedDate extends  Date{

    checkPassedValue(number) {
        if(typeof number !== 'number') {
            console.error('Passed value should be in ms');
            return;
        }
    };
    getTextDate(seconds) {
        this.checkPassedValue(seconds);
        let date = new Date(seconds);
        let number = date.getDate();
        let month = date.toLocaleString("en", {month:'long'});
        function getTextNumber(num) {
            let simpleNum = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth', 'Tenth','Eleventh','Twelfth','Thirteenth','Fourteenth','Fifteenth','Sixteenth','Seventeenth','Eighteenth', 'Nineteenth'];
            if(num < 20) {
                return simpleNum[num-1];
            } else if (num === 20) {
                return 'Twentieth';
            } else if(num === 30) {
                return 'Thirtieth';
            } else if(num > 20 && num < 30){
                return `Twenty ${simpleNum[num-21]}`
            } else {
                return `Thirty ${simpleNum[num-31]}`
            }
        }

        alert(`The ${getTextNumber(number)} of ${month}`);
    };
    checkPeriodOfTime(seconds) {
        this.checkPassedValue(seconds);
        alert((seconds > Date.parse(Date())));
    };
    checkLeapYear(seconds) {
        this.checkPassedValue(seconds);
        let year = new Date(seconds).getFullYear();
        alert(new Date(year, 1, 29).getMonth() === 1);
    };
    getNextDate(seconds) {
        this.checkPassedValue(seconds);
        alert(new Date(seconds+(1000*60*60*24)));
    };
}

const extendedDate = new ExtendedDate();
extendedDate.getTextDate(Date.parse(Date()));
extendedDate.checkPeriodOfTime(1584576000000);//19.03.2020;
extendedDate.checkLeapYear(1584576000000);//19.03.2020;
extendedDate.getNextDate(1584576000000);//19.03.2020;

// 3 News. ********************************************************************

class News {
    constructor(news) {
        this.news = news;
    }

    get countOfNews() {
        return this.news.length;
    }

    getAllNews() {
        for(let val of this.news) {
            console.log(val);
        }
    }
    addNews(val) {
        if(typeof val !== 'object') console.error('Passed value is not object!!!');
        this.news.push(val);
    }
    deleteNews(val) {
        this.news.splice(val,1);
    }
    sortByDate() {
        this.news.sort((a, b) => a.date < b.date ? 1 : -1);
    }
    filterByTag(val) {
        return this.news.filter(item => item.tag === val)
    }

}
const news = new News([{title: 'news 1', date: '2020.02.01', tag: 'one'}, {title: 'news 2', date: '2020.02.09', tag: 'two'}]);
console.log(news.countOfNews);
news.addNews({title: 'news 3', date: '2020.03.03', tag: 'two'});
news.deleteNews(1);
news.sortByDate();
console.log(news.filterByTag('two'));
news.getAllNews();

// 4. Figure (Practice) *******************************************************

class Figure {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._privateName;
    }
    set name(val) {
        this._privateName = val;
    }

    static getSides(arr) {
        let str = '';
        for(let val of arr) {
            str = str + (val +'cm; ');
        }
        return str;
    }
    getArea(arr) {
        return arr.sides[0]*arr.sides[1];
    }
    getPerimeter(arr) {
        return (arr.sides[0]+arr.sides[1])*2;
    }
}
class Square extends Figure{
    constructor(name) {
        super(name);
    }
}
class Rectangle extends Figure{
    constructor(name) {
        super(name);
    }
}
class Triangle extends Figure{
    constructor(name) {
        super(name);
    }
    getArea(arr) {
        let height = 0;
        let p = 1/2*(arr.sides[0]+arr.sides[1]+arr.sides[2]);
        height = (2*Math.sqrt(p*(p-arr.sides[0])*(p-arr.sides[1])*(p-arr.sides[2])))/(arr.sides[0]);
        return 1/2*arr.sides[0]*height;
    }
    getPerimeter(arr) {
        return (arr.sides[0]+arr.sides[1]+arr.sides[2]);
    }
}

let arrFigures = [
    {name: 'square', sides: [2,2]},
    {name: 'triangle', sides: [5,5,6]},
    {name: 'rectangle', sides: [3,2]}
    ];
const square = new Square(arrFigures[0].name);
const rectangle = new Rectangle(arrFigures[2].name);
const triangle = new Triangle(arrFigures[1].name);

console.log(`${square.name} (sides: ${Square.getSides(arrFigures[0].sides)}): area = ${square.getArea(arrFigures[0])}, perimeter = ${square.getPerimeter(arrFigures[0])}`);
console.log(`${rectangle.name} (sides: ${Rectangle.getSides(arrFigures[2].sides)}): area = ${rectangle.getArea(arrFigures[2])}, perimeter = ${rectangle.getPerimeter(arrFigures[2])}`);
console.log(`${triangle.name} (sides: ${Triangle.getSides(arrFigures[1].sides)}): area = ${triangle.getArea(arrFigures[1])}, perimeter = ${triangle.getPerimeter(arrFigures[1])}`);