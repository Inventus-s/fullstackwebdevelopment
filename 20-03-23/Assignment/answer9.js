/* Create a numberChecker function that takes an array of numbers as an argument and returns a function. The
returned function should take another number as an argument and return true if the number is in the array, and
false otherwise. */

function numberChecker(array){
    return function(number){
        return array.includes(number);
    }
}

const array = [1,2,3,4,5,6,7,8,9];
console.log(numberChecker(array)(11));