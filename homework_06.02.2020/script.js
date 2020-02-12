'use strict';

// HOMEWORK
// // 1. get one string from several *********************************************
// let str1 = '1';
// let str2 = '2';
// let str3 = '3';
// let str4 = '4';
// let str5 = '5';
// const getOneString = (...rest) => {
//     let newString = '';
//     for(let item of rest) {
//         newString =  newString + item + ' ';
//     }
//     return newString;
// };
// console.log(getOneString(str1, str2, str3, str4, str5));

// // 2. Calculator **************************************************************
//
// let expression = ' 6 / 2 ';
//
// const calculate = (str) => {
//     if(typeof str !== 'string') return 'Passed values is not an array';
//     let action = '+-*/';
//     let numOne;
//     let numTwo;
//     for(let char of action) {
//         if(str.indexOf(char) > 0) {
//             let index = str.indexOf(char);
//             action = char;
//             numOne = +str.slice(0,index);
//             numTwo = +str.slice(index+1,str.length);
//         }
//     }
//     if(action === '+') return numOne+numTwo;
//     if(action === '-') return numOne-numTwo;
//     if(action === '*') return numOne*numTwo;
//     if(action === '/') return numOne/numTwo;
// };
// console.log(calculate(expression));

// // 3. get Url function ********************************************************
//
// let link = 'http://itstep.org/ua/about/company';
//
// const getUrlInfo = (url) => {
//     if(typeof url !== 'string') return 'Passed values is not an array';
//     let slashes = [];
//     let acc1 = 0;
//     let acc2 = 0;
//     for(let char of url){
//         if(char === '/') {
//             slashes[acc1] = url.indexOf(char, acc2);
//             acc1++;
//         }
//         acc2++
//     }
//     let protocol = url.slice(0,url.indexOf(':'));
//     let domen = url.slice(slashes[1]+1,slashes[2]);
//     let direct = url.slice(slashes[2]);
//     console.log(`protocol: ${protocol}, domen: ${domen} direct: ${direct}`);
//
// };
// getUrlInfo(link);

// // 4. get Array of substrings *************************************************
//
// let date = '12/02/2020/23:59/Thursday';
//
// const getArrayFromSting = (str) => {
//
//     if(typeof str !== 'string') return 'Passed values is not an array';
//     let slashes = [];
//     let acc1 = 0;
//     let acc2 = 0;
//     for(let char of str){
//         if(char === '/') {
//             slashes[acc1] = str.indexOf(char, acc2);
//             acc1++;
//         }
//         acc2++
//     }
//     let result = [];
//     for(let i = 0; i <= slashes.length; i++) {
//         if(i === 0) {
//             result[i] = str.slice(0,slashes[i]);
//         } else if(i === slashes.length) {
//             result[i] = str.slice(slashes[i-1]+1);
//         } else {
//             result[i] = str.slice(slashes[i-1]+1,slashes[i]);
//         }
//     }
//     return result;
// };
// console.log(getArrayFromSting(date));

// 5.

// Написать функцию вывода текста по заданному шаблону.
//     Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо%
// индекс необходимо вывести значение соответствующего
// входного параметра.
//     Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
//     8, 2020) должна вывести “Today is Monday 10.8.2020”.


// PRACTICE
// Написать функцию, которая принимает 2 строки и срав-
// нивает их длину. Функция возвращает 1, если в первой
// строке больше символов, чем во второй; -1 – если во вто-
// рой больше символов, чем в первой; или 0 – если строки
// одинаковой длины.
// 2. Написать функцию, которая переводит в верхний регистр
// первый символ переданной строки.
// 3. Написать функцию, которая считает количество гласных
// букв в переданной строке.
// 4. Написать функцию для проверки спама в переданной
// строке. Функция возвращает true , если строка содержит
// спам. Спамом считать следующие слова: 100% бесплатно,
//     увеличение продаж , только сегодня , не удаляйте , ххх .
//     Функция должна быть нечувствительна к регистру.
// 5. Написать функцию сокращения строки. Функция прини-
// мает строку и ее максимальную длину. Если длина строки
// больше, чем максимальная, то необходимо отбросить
// лишние символы, добавив вместо них троеточие.
//     Например: truncate(“Hello, world!”, 8) должна вернуть
// “Hello...” .
// 2
// Практическое задание №3
// 6. Написать функцию, которая проверяет, является ли пере-
// данная строка палиндромом.
// 7. Написать функцию, которая считает количество слов в
// предложении.
// 8. Написать функцию, которая возвращает самое длинное
// слово из предложения.
// 9. Написать функцию, которая считает среднюю длину слова
// в предложении.
// 10. Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.