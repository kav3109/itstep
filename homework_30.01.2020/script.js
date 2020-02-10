'use strict';

// 1. Get range of array function *********************************************

 let someArray = [1, '10vd2', '2', {name:'Artem'}, 0.5, null, 'undefined', true, () => {return false}];

 const getFromArray = (array, number) => {
     if(typeof number !== 'number' || Array.isArray(array) !== true) return `You passed wrong parameters!`;
     if(number < 0 || number > array.length) return `You can choose elements in the range from 0 to ${array.length}`;
     return array.slice(0, number);
};
 console.log(getFromArray(someArray, 5));

 // 2. Get sum of arrays ******************************************************

let arr1 = [1, 2, 3,];
let arr2 = [1, 2, 3, 4, 5];

const getNewArrayOfSum = (array1, array2) => {
    // simple check for array
    if(Array.isArray(array2) !== true || Array.isArray(array1) !== true) return `You passed wrong parameters!`;
    // function gets sum for equal areas
    const getSum = (arr1, arr2) => {
        let newArray = [];
        for (let i = 0; i < arr1.length; i++) {
            newArray[i] = arr1[i] + arr2[i];
        }
        return newArray;
    };
    // compare length of arrays, and separation if lengths is different
    if(array1.length === array2.length) return getSum(array1, array2);
    let bigArray = (array1.length > array2.length)? array1: array2;
    let smallArray = (array1.length > array2.length)? array2: array1;

    // cut, sum and stick together
    let elementsForSum = bigArray.slice(0, smallArray.length);
    return getSum(smallArray, elementsForSum).concat(bigArray.slice(smallArray.length));

};
console.log(getNewArrayOfSum(arr1, arr2));

// 3. Get count of the same elements in array *********************************

let arr3 = ['arr', 1, 2, '10', 10, 2, null, 'arr'];

const getDoubleElements = (array) => {
    if(Array.isArray(array) !== true) return `You passed wrong parameters!`;
    let result = [];
    result = array.filter((item, index, arr) => index !== arr.indexOf(item));
    console.log(result.length);
};
getDoubleElements(arr3);

// 4. Move elements inside an array *******************************************

let arr4 = [1,2,3,4,5,6];

const moveElementOfArray = (array, from, to) => {
    if(Array.isArray(array) !== true || typeof from !== 'number' || typeof to !== 'number')
        return `You have wrong type of passed parameter!`;
    if(from >= array.length || to >= array.length || from < 0 || to < 0)
        return `Passed positions 'from' and 'to' should be from 0 to ${array.length-1}!`;
    if(to%1 !== 0 || from%1 !== 0)
        return 'Passed positions should be integer!';
    let newFrom = array[to];
    let newTo = array[from];
    array[from] = newFrom;
    array[to] = newTo;
    return array;
};
console.log(moveElementOfArray(arr4, 3, -0.0));