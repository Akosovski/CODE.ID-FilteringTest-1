// isPalindrome dengan inputan array dan return true apabila array palindrome dan sebaliknya

var arr1 = ["asep", "budi", "-", "budi", "asep"];
var arr2 = ["Tom", "Tim", "tim", "tom"];
var arr3 = ["tik", "tok", "toko", "tik"];

function isPalindrome(array){
    var start = 0;
    var end = array.length - 1;
  
  while (start < end) {
    if (array[start].toUpperCase() !== array[end].toUpperCase()) {
        return false;
    }
    start++;
    end--;
  }
  
  return true;
}

console.log(isPalindrome(arr1));
console.log(isPalindrome(arr2));
console.log(isPalindrome(arr3));