// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr = arr1.concat(arr2);
// const shuffledArr = arr1.concat(arr2).sort(function(){
//     return Math.random() - 0.5;
// });
// console.log(shuffledArr);
const $arrCard = ['&#10084;','&#9885;','&#9742;','&#9875;', '&#9731;'];

const $getRandomArrey = () => {
    return $arrCard.concat($arrCard).sort(function(){
        return Math.random() - 0.5;
    });
};
console.log($getRandomArrey());
