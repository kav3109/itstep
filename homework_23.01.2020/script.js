'use strict';

// 1. Simple operation with array *********************************************
//Empty arrey
let someArrey = [];
//Add values
someArrey.push('Apple', 'Pineapple');
//Display Pineapple
console.log(someArrey[1]);
//Display all from arrey
for(let key of someArrey) {
    console.log('value: ' + key + ', index: ' + someArrey.indexOf(key) + ', array: someArrey');
}
//Delete last value
someArrey.pop();
//Check result of deletion
console.log(someArrey);

// 2. Function for Range of numbers. ******************************************
const getRangeOfNumbers = (num1, num2) => {
    let arr =[];
    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(getRangeOfNumbers(8, 12));

// 3. Creation arrey with value ***********************************************

const fillArray = (value, count) => {
    let arr =[];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
};
console.log(fillArray(1,5));

// 4. Sum of values from arrey*************************************************
let arr = [1,2,3,4,'a', false];
const sumArray = (array) => {
    let result = 0;
    for(let key of array) {
        if(typeof(key) === 'number') {
            result += key;
        }
    }
    return result;
};
console.log(sumArray(arr));
