let userNumber = 16;//prompt('Enter your number, please!');
let result = [];
let counter = 0;
for(let g = 1; g <= userNumber; g++) {
    if(userNumber%g === 0) {
        result[counter] = g;
        counter++;
    }
}
console.log(result);