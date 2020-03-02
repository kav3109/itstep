'use strict';

// 1. Russion month ***********************************************************

const displayMonth = () => {
    let date = new Date();
    console.log(date.toLocaleString("ru", {month: 'long'}));
};
displayMonth();

// 2. Day of week *************************************************************

let today = '23.02.2020';
const getDayOfWeek = (date) => {
    let ms = Date.parse(date.split('.').reverse().join('.'));
    console.log((new Date(ms)).toLocaleString("ru", {weekday:'long'}));
};
getDayOfWeek(today);

// 3. Count of ms from start date *********************************************
let now = new Date();
let startDay = (new Date()).setHours(0,0,0,0);
console.log(Date.parse(now) - startDay);

// 4. Timer *******************************************************************

const timer = () => {
    return setInterval(() => {
        let now = new Date();
        let midnight = (new Date()).setHours(23,59,59,999);
        let result = (midnight - Date.parse(now))/1000/60/60;
        console.log(Math.floor(result));
        }, 3000);
};
let startTimer = timer();
clearInterval(startTimer);

// 5. Get the area of a circle *********************************************

let num = 13;
const getAreaOfCircle = (radius) => {
    return (typeof radius !== 'number')?'Passed value is not number': Math.PI*Math.pow(radius, 2);
};
console.log(getAreaOfCircle(num));

// 6. Sinus of corner *********************************************************

let value = 90;
const getSinus = (corner) => {
    return (typeof corner !== 'number')? 'Passed value is not number': Math.sin((corner * Math.PI) / 180);
};
console.log(getSinus(value));