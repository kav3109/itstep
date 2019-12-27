function checkCompletedNumber(number) {
    let result = 0;
    for(let i = 1; i < number; i++) {
        if(number%i === 0) {
            result = result + i;
        }
    }
    console.log('result '+result);
    console.log('number '+number);
    return (result === number)?'Your number is completed': 'Your number is NOT completed';

}
let userNumber = 27;
console.log(checkCompletedNumber(userNumber));