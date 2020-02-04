'use strict';

// 1. Shoping list ************************************************************

let shoppingList = [
    {
        name: 'oil',
        count: 1,
        bought: true
    },
    {
        name: 'bread',
        count: 2,
        bought: false
    },
    {
        name: 'apple',
        count: 3,
        bought: true
    }
];

const getShoppingList = (array) => {
    let needToBuy = array.filter(item => item.bought === false);
    let bought = array.filter(item => item.bought === true);
    if(needToBuy.length === 0) {
        console.log('You have already bought everything.');
    } else {
        console.log('You need to buy:');
        needToBuy.forEach((item, index, arr) => console.log(arr[index].count + ' unit/s of ' + arr[index].name));
    }
    if(bought.length === 0) {
        console.log('You have not bought anything else.');
    } else {
        console.log('You bought:');
        bought.forEach((item, index, arr) => console.log(arr[index].count + ' unit/s of ' + arr[index].name));
    }

};

const addItem = (good, count, array) => {
    let finder = array.findIndex(item => item.name === good);
    if(finder !== -1) {
        array[finder].count += count;
        array[finder].bought = false;
    } else {
        array.push({
           name: good,
           count: count,
           bought: false
        });
    }
};

const checkAsBought = (good, array) => {
    let finder = array.findIndex(item => item.name === good);
    if(finder === -1) {
        console.log('Your good is absent in your shopping list');
    } else {
        array[finder].bought = true;
    }
};

addItem('apple', 9, shoppingList);
checkAsBought('apple', shoppingList);
getShoppingList(shoppingList);

// 2. A bill ******************************************************************

let bill = [
    {
        name: 'oil',
        count: 1,
        price: 20
    },
    {
        name: 'bread',
        count: 2,
        price: 10
    },
    {
        name: 'apple',
        count: 3,
        price: 5
    }
];

const getBill = (array) => {
    array.forEach((item, index, arr) => console.log(`${arr[index].name}: ${arr[index].count} unit/s ${arr[index].price} y.e./unit`));
    console.log(`TOTAL: ${getTotalSum(array)} y.e.`);
};

const getTotalSum = (array) => {
    return array.reduce((acc, item, index, arr) => acc + arr[index].count*arr[index].price, 0);
};

const getExpensiveItem = (array) => {
    // get new array of total sum per item
    let totalSumsOfItems = array.map((item, index, arr) => arr[index].count*arr[index].price);
    // get maximal sum
    let max = 0;
    for(let i = 0; i <= totalSumsOfItems.length; i++) {
        if(totalSumsOfItems[i] > max) max = totalSumsOfItems[i];
    }
    // display all items with max total sum
    console.log('The most expensive purchase/s in the bill:');
    array.forEach((item, index, arr) => {
       if(arr[index].count*arr[index].price === max){console.log(arr[index])}
    });
};

const getAveragePrice = (array) => {
    let count = array.reduce((acc, item, index, arr) => acc + arr[index].count, 0);
    let sum = array.reduce((acc, item, index, arr) => acc + arr[index].price, 0);
    console.log('Average price per item is ' + (sum/count).toFixed(2));
};

getBill(bill);
getExpensiveItem(bill);
getAveragePrice(bill);

// 3. Styles ******************************************************************

let myStyle = [
    {'color': 'blue'},
    {'font-size': '20px'},
    {'text-align': 'center'},
    {'text-decoration': 'underline'}
];
const displayText = (array, text) => {

    // make a new array with string values from object
    let stringsInArray = array.map((item, index, arr) => {
        for(let key in arr[index]) {
            return key + ':' + arr[index][key];
        }
    });
    // make string from array
    let stringFronArray = stringsInArray.join(';');
    document.write('<p style="'+stringFronArray+'">'+text+'</p>');
};

displayText(myStyle, 'Welcome to IT HELL!');

// 4. Academy *****************************************************************

let rooms = [
    {
        roomName: 'C201',
        chairs: 10,
        facultyName: 'it'
    },
    {
        roomName: 'B202',
        chairs: 20,
        facultyName: 'biology'
    },
    {
        roomName: 'A203',
        chairs: 15,
        facultyName: 'biology'
    },
];

let bioGroup = {
    groupName: 'medicine',
    countOfStudents: 18,
    facultyName: 'biology'
};


const getRooms = (array) => {
    console.log('List of rooms:');
    console.log(array);
};

const getRoomsForFaculty = (faculty, array) => {
    let filterByFaculty = array.filter((item) => item.facultyName === faculty.toLowerCase());
    if(filterByFaculty.length === 0) {
        console.log(`There is no faculty with this name (passed name - ${faculty})`);
    } else {
        console.log(`List rooms for faculty ${faculty}:`);
        console.log(filterByFaculty);
    }
};

const getRoomForGroup = (object, array) => {
    let result = array.filter((item) => {
        if(object.facultyName === item.facultyName && object.countOfStudents <= item.chairs) return item;
    });
    console.log(`List of rooms for your group`);
    console.log(result);
};

const sortRoomsByChairs = (array) => {
    array.sort((a, b) => a.chairs - b.chairs);
    console.log(`New list of rooms sorted by chairs:`);
    console.log(array);
};

const sortRoomsByName = (array) => {
    array.sort(function(a, b) {
        let A = a.roomName.toUpperCase();
        let B = b.roomName.toUpperCase();
        if (A < B) return -1;
        if (A > B) return 1;
        return 0;
    });
    console.log(`New list of rooms sorted by name:`);
    console.log(array);
};
getRooms(rooms);
getRoomsForFaculty('biology', rooms);
getRoomForGroup(bioGroup, rooms);
sortRoomsByChairs(rooms);
sortRoomsByName(rooms);