'use strict';

//1. Simple operation with Object
// 1) create empty object
let car = {};
// 2)  add property name with value Mercedes Benz
car.name = 'Mercedes Benz';
// 3) add property model with value Bionic.
car.model = 'Bionic';
// 4) Change value of property to Pete.
car.model = 'Pete';
// 5) Delete property model from object
delete car.model;

// 2. Numbers of object are multiplied to 4
let info =
{
    name: 'Object',
    price: 15,
    count: 2,
    isShow: true,
};
function multiply(obj) {
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            obj[key] = obj[key]*4;
        }
    }
}
multiply(info);

// 3. Traveling by car
let car = {
    producer: 'zaz',
    model: '1102',
    year: '1994',
    speed: 100
};
function getCarInfo(obj) {
    for(let key in obj) {
        console.log(key + ' : ' + obj[key]);
    }
}
function getTimeToGetPoint(distance, object) {
    //convert hours to hours with minutes
    function getTimeWithMinutes(hours) {
        let minutes = Math.round((hours*60)%60);
        if(minutes < 10) {minutes = '0' + minutes}//add fine view for minutes < 10
        hours = Math.floor(hours);
        return hours + ' h. ' + minutes + ' min.'
    }
    //check correct passed data into function
    if(typeof object !== 'object' || !('speed' in object)) {
        console.log('Object does not contain property "speed" or you passed wrong parameters');
    } else {
        let time = distance/object.speed;
        if(time <= 4) {
            console.log(getTimeWithMinutes(time));
        } else {
            let rest = Math.floor(time/4);
            console.log(getTimeWithMinutes(time+rest));
        }
    }
}
getCarInfo(car);
getTimeToGetPoint(1001, car);
