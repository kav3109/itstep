'use strict';

// // 1. Let string analytic for English text
// let str1 = 'Let\'s i give you 100500 y.e. for free!!!:)';
//
// const getTextAnalytic = (text) => {
//     if(typeof text !== 'string') return 'Passed value is not string!';
//     let arrayOfNumbers = ['0','1','2','3','4','5','6','7','8','9'];
//     let arrayOfEngLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];
//     let stringValues = 0;
//     let digitValues = 0;
//     let anySymbols  = 0;
//     for(let char of text) {
//         if(arrayOfNumbers.indexOf(char) > -1) {
//             digitValues++;
//         } else if(arrayOfEngLetters.indexOf(char.toLowerCase()) > -1) {
//             stringValues++;
//         } else {
//             anySymbols++;
//         }
//     }
//     console.log(`letters - ${stringValues}, digits - ${digitValues}, other symbols - ${anySymbols}, total length - ${text.length}.`);
//
// };
// getTextAnalytic(str1);

// // 2. Number to text
//
// let num = 100;
//
// const setNumberToText = (number) => {
//     if(typeof number !== 'number') return 'Passed value is not number!';
//     if(number < 0 || number > 99) return 'Passed value should be from 0 to 99!';
//     if(number%1 !== 0) return 'Passed number should be integer!';
//     number = Math.floor(number);// if user enter 0.0, 1.0 etc.
//     let simpleNumbers = {
//         0: 'zero',
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine',
//         10: 'ten',
//         11: 'eleven',
//         12: 'twelve',
//         13: 'thirteen',
//         14: 'fourteen',
//         15: 'fifteen',
//         16: 'sixteen',
//         17: 'seventeen',
//         18: 'eighteen',
//         19: 'ninteen'
//     };
//     let decimalNumbers = {
//         2: 'twenty',
//         3: 'thirty',
//         4: 'forty',
//         5: 'fifty',
//         6: 'sixty',
//         7: 'seventy',
//         8: 'eighty',
//         9: 'ninety'
//     };
//     if(number < 20) {
//         return simpleNumbers[number];
//     } else if(number.toString()[1] === '0') {
//         return decimalNumbers[number.toString()[0]];
//     } else {
//         return `${decimalNumbers[number.toString()[0]]} ${simpleNumbers[number.toString()[1]]}`
//     }
// };
// console.log(setNumberToText(num));


// 3. Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.
// 4. Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize , background-color в backgroundColor , text-
// align в textAlign .
// 5. Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
//     Например: cascading style sheets в CSS , объектно-
// ориентированное программирование в ООП