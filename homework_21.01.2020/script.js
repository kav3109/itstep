'use strict';

// //1.Simple operation with object
// //Create object
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// //display key b
// console.log(obj.b);
// console.log(obj['b']);
// //add new key
// obj['new b'] = 4;
// //transfer value
// obj.a = obj['new b'];
// //delete new key
// delete obj['new b'];
// //display result
// console.log(Object.values(obj));

// 2. Numerator and denominator
let fraction1 = {
    num: 1,
    denum: 2
};
let fraction2 = {
    num: 2,
    denum: 3
};

// get NOD(наибольший общий делитель)
function getNod(n1, n2) {
    let n3 = n1 % n2;
    while (n3 !== 0) {
        n1 = n2;
        n2 = n3;
        n3 = n1 % n2;
    }
    return n2
}

// get NOK(наименьшее общее кратное)
function getNok(n1, n2) {
    return n1 * n2 / getNod(n1, n2);
}

const doSummationOfObj = function (obj1, obj2) {
    if(obj1.denum !== obj2.denum) {
        let nok = getNok(obj1.denum, obj2.denum);
        let result1 = nok/obj1.denum*obj1.num;
        let result2 = nok/obj2.denum*obj2.num;
        return {
            num: result1 + result2,
            denum: nok
        }
    } else {
        return {
            num: obj1.num + obj2.num,
            denum: obj1.denum
        }
    }
};
const doSubtractionOfObj = function (obj1, obj2) {
    return false;
};
console.log(doSummationOfObj(fraction1, fraction2));
console.log(doSubtractionOfObj(fraction1, fraction2));
// Задание 2
// Создать объект, хранящий в себе отдельно числитель и зна-
// менатель дроби, и следующие функции для работы с этим объ-
// ектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.
// 2
// Домашнее задание
// Задание 3
// Создать объект, описывающий время (часы, минуты, секун-
// ды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество
// секунд.
// 3. Функция изменения времени на переданное количество
// минут.
// 4. Функция изменения времени на переданное количество
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной
// части времени, может измениться и другая. Например: если ко
// времени «20:30:45» добавить 30 секунд, то должно получиться
// «20:31:15», а не «20:30:75».

