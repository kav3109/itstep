'use strict';

let arr = [1,2,3,4,5,6,7,8,9,10];

// 1. display array
const displayArray = (array) => {
    for(let key of array) {
        console.log(key);
    }
};
// 2. even value
const getOdd = (array) => {
    for(let key of array) {
        if(key%2 !== 0) console.log(key);
    }
};
// 3. sum of value
let result = arr.reduce((sum, current) => sum + current, 0);

// 4. get index
// const getIngex = (array, value) => {
//     console.log(array.indexOf(value));
// };
// getIngex(arr, 3);
const getIndex = (array, value) => {
    // return array.findIndex((element) => {
    //     return element === value;
    // })
    return array.findIndex(element => element === value);
};
// 5. get array of objects
const objArr = [{name: 'Vasya'},{name: 'Petya'}, {name: 'Vova'}];
const getName = (object, user) => {
    return object.find(item => item.name === user);
};
