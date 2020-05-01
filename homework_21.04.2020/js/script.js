class MyString extends String {

    constructor(str) {
        super();
        this._str = str;
    }

    get str() {
        return this._str;
    }
    set str(x) {
        this._str = x;
    }

    remove(index) {
        if(+index > this._str.length || +index < 0) return this._str;
        return this._str.slice(0,index)+this._str.slice(index+1);
    }

    insert(index, sign) {
        if(+index < 0) return sign+this._str;
        if(+index > this.str.length) return this._str+sign;
        return this._str.slice(0,index)+sign+this._str.slice(index+1);
    }

    trimSign() {
        let arr = this._str.split('');
        arr.forEach((val,id,arr) => {
            if(arr[id] === arr[id+1]) arr[id] = '';
        });
        return arr.join('');
    }

    toggle() {
        let newStr = '';
        for(let char of this._str) {
            if(char === char.toUpperCase())  {
                newStr += char.toLowerCase();
            } else {
                newStr += char.toUpperCase();
            }
        }
        return newStr;
    }

    counter(sign) {
        let arr = this._str.split('');
        return arr.filter((val) => val === sign).length;
    }
}

class MyDate extends Date {

    constructor(day, month, year) {
        super();
        this._day = day;
        this._month = month;
        this._year = year;
    }

    get day() {
        return this._day;
    }
    set day(x) {
        this._day = x;
    }
    get month() {
        return this._month;
    }
    set month(x) {
        this._month = x;
    }
    get year() {
        return this._year;
    }
    set year(x) {
        this._year = x;
    }

    showDate() {

        let date = new Date(Date.parse(`${this._year},${this._month},${this._day}`));
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
        return `${getTextNumber(number)} ${month}`;
    };

    isFuture() {
        let today = Date.parse(new Date);
        let date = Date.parse(`${this._year},${this._month},${this._day}`);
        return (today < date);
    }

    isLeapYear() {
        return (new Date(this._year, 1, 29).getMonth() === 1);
    }
    nextDay() {
        let next = new Date(Date.parse(`${this._year},${this._month},${this._day}`)+(1000*60*60*24));
        return `${next.getDate()}/${next.getMonth()+1}/${next.getFullYear()}`;
    }
}