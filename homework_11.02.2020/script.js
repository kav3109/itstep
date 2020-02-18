'use strict';

// HOMEWORK **********************************************************************
// 1. Display text every n-second

function displayText(text, timer) {
    let timerId = setTimeout(function tick() {
        console.log(text);
        timerId = setTimeout(tick, timer); // (*)
    }, timer);
}
displayText('text', 1000);

// 2. Display time ************************************************************

let displayTime = setTimeout(function tick() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    console.log(`${hh}:${mm}:${ss}`);
    displayTime = setTimeout(tick, 1000);
}, 1000);

// 3. To stop displayTime() ***************************************************

clearTimeout(displayTime);

// 4. Progress bar ************************************************************
// setInterval approach
function progressBar1() {
    let current = 1;
    let timerId = setInterval(function() {
        console.log(`${current}%`);
        if (current === 100) {
            clearInterval(timerId);
        }
        current++;
    }, 500);
}
progressBar1();

// setTimeout aproach
function progressBar2() {
    let current = 1;
    setTimeout(function go() {
        console.log(`${current}%`);
        if (current < 100) {
            setTimeout(go, 300);
        }
        current++;
    }, 300);
}
progressBar2();

// 5. Display dates ************************************************************

let someDate = new Date(2020, 1, 18);
console.log(parseDate(someDate));

const addDays = (date, days) => {
    if(typeof date !== 'object' || typeof  days !== 'number') return 'Wrong passed parameters!';
    return parseDate(new Date(date.setDate(date.getDate()+days)));
};
console.log(addDays(someDate, 5));

const minusDays = (date, days) => {
    if(typeof date !== 'object' || typeof  days !== 'number') return 'Wrong passed parameters!';
    return parseDate(new Date(date.setDate(date.getDate()-days)));
};
console.log(minusDays(someDate, 16));

const getDayOfWeek = (date) => {
    if(typeof date !== 'object') return 'Wrong passed parameters!';
    let days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    return days[date.getDay()-1];
};
console.log(getDayOfWeek(someDate));

function parseDate(date) {
    if(typeof date !== 'object') return 'Wrong passed parameters!';
    let y = date.getFullYear();
    let m = date.getMonth();
    if(m < 10) m = '0'+ m;
    let d = date.getDate();
    if(d < 10) d = '0'+ d;
    return `${d}.${m}.${y}`;
}