'use strict';

// 1. Five Numbers

function getSumOfNumbers (a1, a2, a3, a4, a5) {
    if(a2 === undefined) return a1;
    if(a3 === undefined) return a1+a2;
    if(a4 === undefined) return a1+a2+a3;
    if(a5 === undefined) return a1+a2+a3+a4;
    return a1+a2+a3+a4+a5;
}
console.log(getSumOfNumbers(1,1,1,1,1));

// 2. Multiply table

function getMultiply(k) {
    for (let m = 1; m <=9; m++) {
        console.log(k + "*" + m + "=" +(k*m) + " ");
    }
}
getMultiply(9);

// 3. Brackets

function getBrackets(a) {
    if(a === 1) {
        return '()';
    } else {
        return '(' + getBrackets(a-1) + ')';
    }
}
console.log(getBrackets(2));

// 4. Division by two

function makeDivision(number) {
    if(number < 50) {
        return 'Number < 50';
    } else {
        let result = 0;
        let divisionNumber = number;
        while(divisionNumber >= 50) {
            result++;
            divisionNumber = divisionNumber/2;
        }
        return 'Count of division for number ' + number + ' is ' + result;
    }
}
console.log(makeDivision(190));

// 5. Count of requested functions
let counter = 1;
const getCountOfRequests = function () {
  return counter++ +' request(s)';
};
getCountOfRequests();
