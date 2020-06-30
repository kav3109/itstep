// 1. Node.js have been installed
// 2. Hello world
console.log('Hello world');
// 3. Hello world 15 times
for (let i = 0; i < 15; i++) {
    console.log(`${i+1}. Hello world`);
}
// 4. Odd numbers from 1 to 50
for (let i = 0; i < 50; i++) {
    if(i%2 !==0) console.log(i);
}
// 5. Math operation
function getMathResultOf(num1, operator, num2) {
    if(typeof num1 !=='number' && typeof num2 !== 'number') return 'Some of passed value is not number';
    if(operator.length > 1 || operator.match(/[*+\-%\/]/) === null) return `Wrong operator - "${operator}"`;
    function altEval(str) {
        return new Function('return ' + str)();
    }
    return altEval(`${num1+operator+num2}`);
}
console.log(getMathResultOf(1,'-',2));