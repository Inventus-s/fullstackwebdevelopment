/* Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
with the manipulated string or the new string to the console. */

function manipulateString(callbackString){
    if (typeof callbackString !== 'string') {
        console.error('Invalid Input');
    };

    function logString(str){
        return str.toUpperCase();
    }

    const manipulated = logString(callbackString);
    return manipulated;
};

const myString = "my name is mukund";

const result = manipulateString(myString);
console.log(result);