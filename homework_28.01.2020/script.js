'use strict';

// // 1. Shoping list ************************************************************
//
// let shoppingList = [
//     {
//         name: 'oil',
//         count: 1,
//         bought: true
//     },
//     {
//         name: 'bread',
//         count: 2,
//         bought: false
//     },
//     {
//         name: 'apple',
//         count: 3,
//         bought: true
//     }
// ];
//
// const getShoppingList = (array) => {
//     let needToBuy = array.filter(item => item.bought === false);
//     let bought = array.filter(item => item.bought === true);
//     if(needToBuy.length === 0) {
//         console.log('You have already bought everything.');
//     } else {
//         console.log('You need to buy:');
//         needToBuy.forEach((item, index, arr) => console.log(arr[index].count + ' unit/s of ' + arr[index].name));
//     }
//     if(bought.length === 0) {
//         console.log('You have not bought anything else.');
//     } else {
//         console.log('You bought:');
//         bought.forEach((item, index, arr) => console.log(arr[index].count + ' unit/s of ' + arr[index].name));
//     }
//
// };
//
// const addItem = (good, count, array) => {
//     let finder = array.findIndex(item => item.name === good);
//     if(finder !== -1) {
//         array[finder].count += count;
//         array[finder].bought = false;
//     } else {
//         array.push({
//            name: good,
//            count: count,
//            bought: false
//         });
//     }
// };
//
// const checkAsBought = (good, array) => {
//     let finder = array.findIndex(item => item.name === good);
//     if(finder === -1) {
//         console.log('Your good is absent in your shopping list');
//     } else {
//         array[finder].bought = true;
//     }
// };
//
// addItem('apple', 9, shoppingList);
// checkAsBought('apple', shoppingList);
// getShoppingList(shoppingList);

// // 2. A bill ******************************************************************
//
// let bill = [
//     {
//         name: 'oil',
//         count: 1,
//         price: 20
//     },
//     {
//         name: 'bread',
//         count: 2,
//         price: 10
//     },
//     {
//         name: 'apple',
//         count: 3,
//         price: 5
//     }
// ];
//
// const getBill = (array) => {
//     array.forEach((item, index, arr) => console.log(`${arr[index].name}: ${arr[index].count} unit/s ${arr[index].price} y.e./unit`));
//     console.log(`TOTAL: ${getTotalSum(array)} y.e.`);
// };
//
// const getTotalSum = (array) => {
//     return array.reduce((acc, item, index, arr) => acc + arr[index].count*arr[index].price, 0);
// };
//
// const getExpensiveItem = (array) => {
//     // get new array of total sum per item
//     let totalSumsOfItems = array.map((item, index, arr) => arr[index].count*arr[index].price);
//     // get maximal sum
//     let max = 0;
//     for(let i = 0; i <= totalSumsOfItems.length; i++) {
//         if(totalSumsOfItems[i] > max) max = totalSumsOfItems[i];
//     }
//     // display all items with max total sum
//     console.log('The most expensive purchase/s in the bill:')
//     array.forEach((item, index, arr) => {
//        if(arr[index].count*arr[index].price === max){console.log(arr[index])};
//     });
// };
//
// const getAveragePrice = (array) => {
//     let count = array.reduce((acc, item, index, arr) => acc + arr[index].count, 0);
//     let sum = array.reduce((acc, item, index, arr) => acc + arr[index].price, 0);
//     console.log('Average price per item is ' + (sum/count).toFixed(2));
// };
//
// getBill(bill);
// getExpensiveItem(bill);
// getAveragePrice(bill);

//     Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнива-
// ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
// ект, состоящий из двух свойств: название стиля и значение стиля.
//     Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p> , добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.



//     Задание 4
// Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
//     Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
//     количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфа-
// виту).