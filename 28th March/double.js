/* Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback. */

// function that return double array
function doubleUsingCallback(arr, callback){
    if (!Array.isArray(arr) || typeof callback !== 'function') {
        throw new Error('Invalid Input')
    };

    const doubleArray = arr.map(callback);
    return doubleArray;
}

// Array for iNput
const numbers = [1,2,3,4,5];

// double element
function doubleElement(element){
    return element * 2;
}

// call function
const doubledNumbers = doubleUsingCallback(numbers, doubleElement);
console.log(doubledNumbers);