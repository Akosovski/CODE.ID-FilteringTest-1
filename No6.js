// Function Plus One Digit

var arr1 = [1, 2, 3];
var arr2 = [4, 3, 2, 1];
var arr3 = [9];

function arrayToInteger(array) {
    var joinedString = array.join('');
    var result = parseInt(joinedString, 10);
    return result;
}
  
function plusOneDigit(array) {
    var accum = arrayToInteger(array);
    var sum = accum + 1;
    var resultArray = Array.from(String(sum), Number);
    return resultArray;
}

console.log(plusOneDigit(arr1));
console.log(plusOneDigit(arr2));
console.log(plusOneDigit(arr3));