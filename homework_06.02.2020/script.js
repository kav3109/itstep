'use strict';

// HOMEWORK **********************************************************************
// 1. get one string from several *********************************************
let str1 = '1';
let str2 = '2';
let str3 = '3';
let str4 = '4';
let str5 = '5';
const getOneString = (...rest) => {
    let newString = '';
    for(let item of rest) {
        newString =  newString + item + ' ';
    }
    return newString;
};
console.log(getOneString(str1, str2, str3, str4, str5));

// 2. Calculator **************************************************************

let expression = ' 6 / 2 ';

const calculate = (str) => {
    if(typeof str !== 'string') return 'Passed values is not an array';
    let action = '+-*/';
    let numOne;
    let numTwo;
    for(let char of action) {
        if(str.indexOf(char) > 0) {
            let index = str.indexOf(char);
            action = char;
            numOne = +str.slice(0,index);
            numTwo = +str.slice(index+1,str.length);
        }
    }
    if(action === '+') return numOne+numTwo;
    if(action === '-') return numOne-numTwo;
    if(action === '*') return numOne*numTwo;
    if(action === '/') return numOne/numTwo;
};
console.log(calculate(expression));

// 3. get Url function ********************************************************

let link = 'http://itstep.org/ua/about/company';

const getUrlInfo = (url) => {
    if(typeof url !== 'string') return 'Passed values is not an array';
    let slashes = [];
    let acc1 = 0;
    let acc2 = 0;
    for(let char of url){
        if(char === '/') {
            slashes[acc1] = url.indexOf(char, acc2);
            acc1++;
        }
        acc2++
    }
    let protocol = url.slice(0,url.indexOf(':'));
    let domen = url.slice(slashes[1]+1,slashes[2]);
    let direct = url.slice(slashes[2]);
    console.log(`protocol: ${protocol}, domen: ${domen} direct: ${direct}`);

};
getUrlInfo(link);

// 4. get Array of substrings *************************************************

let date = '12/02/2020/23:59/Thursday';

const getArrayFromSting = (str) => {

    if(typeof str !== 'string') return 'Passed values is not an array';
    let slashes = [];
    let acc1 = 0;
    let acc2 = 0;
    for(let char of str){
        if(char === '/') {
            slashes[acc1] = str.indexOf(char, acc2);
            acc1++;
        }
        acc2++
    }
    let result = [];
    for(let i = 0; i <= slashes.length; i++) {
        if(i === 0) {
            result[i] = str.slice(0,slashes[i]);
        } else if(i === slashes.length) {
            result[i] = str.slice(slashes[i-1]+1);
        } else {
            result[i] = str.slice(slashes[i-1]+1,slashes[i]);
        }
    }
    return result;
};
console.log(getArrayFromSting(date));

// 5. Message from template ***************************************************
let temp = 'Today is %1 %2.%3.%4';

const getTextFromTemplate = (template, ...values) => {
    let acc = 1;
    for(let value of values) {
        template = template.replace('%'+acc, value);
        acc++;
    }
    return template;
};
console.log(getTextFromTemplate(temp, 'Monday', 10, 8, 2020, 123, 11234,'3fq34'));

// PRACTICE *******************************************************************

// 1. Comparing of strings *************************************************

let text1 = 'fqw3errf';
let text2 = 'f34f34f50';

const compare = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'Wrong type of passed value!'
    } else if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
};
console.log(compare(text1, text2));

// 2. CamelCase ***************************************************************

let word = ' world! ';

const setCamelCase = (str) => {
    if (typeof str !== 'string') return 'Wrong type of passed value!';
    str = str.trim();
    return str[0].toUpperCase() + str.slice(1);
};
console.log(setCamelCase(word));

// 3. Consonants **************************************************************
 let text3 = 'Hello my dear friend!';

 const getSumOfConsonants = (str) => {
     if (typeof str !== 'string') return 'Wrong type of passed value!';
     str = str.toLowerCase();
     let consonants = 'bcdfghjklmnprstvwxz';
     let result = 0;
     for(let char of str) {
         if(consonants.indexOf(char) !== -1) result++;
     }
     return result;
 };
 console.log(getSumOfConsonants(text3));

// 4. Spam ********************************************************************
let message = 'Поздравляю, тольк сегодня у вас есть возможность получить товар 100% Бесплатно';

const checkSpam = (str) => {
    if (typeof str !== 'string') return 'Wrong type of passed value!';
    str = str.toLowerCase();
    let spam = ['100% бесплатно','увеличение продаж','только сегодня','не удаляйте', 'ххх'];
    // spam.forEach(item => {TODO find out how to stop call back end return true;
        // if(str.indexOf(item) !== -1) return true;
    // });
    for(let i = 0; i < spam.length; i++) {
        if(str.indexOf(spam[i]) !== -1) return true;
    }
    return false;
};
console.log(checkSpam(message));

// 5. Long string *************************************************************

let text5 = 'Hello my dear friend!';

const cutString = (str, num) => {
    if (typeof str !== 'string' || typeof num !== 'number') return 'Wrong type of passed value!';
    str = str.trim();
    return str.slice(0, -num) + '...';
};
console.log(cutString(text5, 113));

// 6. Palindrome **************************************************************

let text6 = 'asdfdsa';

const checkPalindrome = (str) => {
    if (typeof str !== 'string') return 'Wrong type of passed value!';
    let reverse = str.split('').reverse().join('');
    return reverse === str;
};
console.log(checkPalindrome(text6));

// 7. Get count of words ******************************************************

let text7 = 'Hello my dear friend!';

const getCountOfWords = (str) => {
    if(typeof str !== 'string') return 'Wrong type of passed value!';
    str = str.trim();
    if(str.indexOf('  ') >= 0) return 'You should delete extra whitespaces';
    return str.split(' ').length;
};
console.log(getCountOfWords(text7));

// 8. The longest word ********************************************************

let text8 = 'Hello my dear friend and Something else';

const getLongestWords = (str) => {
    if(typeof str !== 'string') return 'Wrong type of passed value!';
    str = str.trim();
    if(str.indexOf('  ') >= 0) return 'You should delete extra whitespaces';
    let arrWord = str.split(' ');
    let result = '';
    for(let i = 0; i < arrWord.length; i++) {
        result = (arrWord[i].length > result.length)? arrWord[i] : result;
    }
    return 'The longest word is ' + result;
};
console.log(getLongestWords(text8));

// 9. Average length of word in the stings ************************************

let text9 = 'Hello my dear friend';

const getAverageLength = (str) => {
    if(typeof str !== 'string') return 'Wrong type of passed value!';
    str = str.trim();
    if(str.indexOf('  ') >= 0) return 'You should delete extra whitespaces';
    let arrWord = str.split(' ');
    let totalSum = arrWord.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.length;
    }, 0);
    return Math.floor(totalSum/arrWord.length);
};
console.log(getAverageLength(text9));

// 10. Symbols in the string **************************************************

let text10 = 'Hello my dear friend!';

const getSymbols = (str, symbol) => {
    if(typeof str !== 'string') return 'Wrong type of passed value!';
    let acc1 = 0;
    let acc2 = 0;
    let arrSymbols = [];
    for(let char of str){
        if(char === symbol) {
            arrSymbols[acc1] = str.indexOf(char, acc2);
            acc1++;
        }
        acc2++
    }
    return `indexes of synbols - ${arrSymbols}, count of symbols - ${arrSymbols.length}.`
};
console.log(getSymbols(text10, ' '));