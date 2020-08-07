'use strict';

//1.Simple operation with object ******************************************************

//Create object
let obj = {
    a: 1,
    b: 2,
    c: 3
};
//display key b
console.log(obj.b);
console.log(obj['b']);
//add new key
obj['new b'] = 4;
//transfer value
obj.a = obj['new b'];
//delete new key
delete obj['new b'];
//display result
console.log(Object.values(obj));

// 2. Numerator and denominator **********************************************************

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
    return Math.abs(n2);//because number can be negative
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
    if(obj1.denum !== obj2.denum) {
        let nok = getNok(obj1.denum, obj2.denum);
        let result1 = nok/obj1.denum*obj1.num;
        let result2 = nok/obj2.denum*obj2.num;
        return {
            num: result1 - result2,
            denum: nok
        }
    } else {
        return {
            num: obj1.num - obj2.num,
            denum: obj1.denum
        }
    }
};
const doMultiplicationOfObj = function (obj1, obj2) {
    return {
        num: obj1.num*obj2.num,
        denum: obj1.denum*obj2.denum
    }
};
const doDivisionOfObj = function (obj1, obj2) {
    return {
        num: obj1.num*obj2.denum,
        denum: obj1.denum*obj2.num
    }
};
const doReductionOfObj = function(obj) {
    let result = getNod(obj.num, obj.denum);
    if(result === 1) {
        return obj;
    } else {
        return {
            num: obj.num/result,
            denum: obj.denum/result
        }
    }
};

console.log(doReductionOfObj(doSummationOfObj(fraction1, fraction2)));
console.log(doReductionOfObj(doSubtractionOfObj(fraction1, fraction2)));
console.log(doReductionOfObj(doMultiplicationOfObj(fraction1, fraction2)));
console.log(doReductionOfObj(doDivisionOfObj(fraction1, fraction2)));

// 3. Display time ***********************************************************************

let time = {
    hh: 1,
    mm: 2,
    ss: 3
};
const displayTime = (obj) => {
    for(let key in obj) {
        if(obj[key] < 10) {obj[key] = '0'+obj[key]}
    }
    return obj;
};
const setHh = (hours, obj) => {
    let newHh = obj.hh + hours;
    if(newHh > 24) {
        obj.hh = newHh % 24;
    } else {
        obj.hh = newHh;
    }
    return obj;
};
const setMm = (minutes, obj) => {
    let newMm = obj.mm + minutes;
    if(newMm < 60) {
        obj.mm = newMm;
    } else {
        setHh(Math.floor(newMm/60), obj);
        obj.mm = newMm%60;
    }
    return obj;
};
const setSs = (seconds, obj) => {
    let newSs = obj.ss + seconds;
    if(newSs < 60) {
        obj.ss = newSs;
    } else {
        setMm(Math.floor(newSs/60), obj);
        obj.ss = newSs%60;
    }
    return obj;
};
console.log(displayTime(setHh(32, time)));
console.log(displayTime(setMm(60, time)));
console.log(displayTime(setSs(3597, time)));