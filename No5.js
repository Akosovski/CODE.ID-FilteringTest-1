// Function untuk menampilkan elemen value yang jika dijumlahkan tiap elemennya akan return value 0

var arr1 = [-1, 0, 1, 2, -1, 4];
var arr2 = [2, 3, 4, -1, -2];

function sumArray(array) {
    var sum = 0;
    
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    
    return sum;
}

function sumZero(array) {
    var arrHasil = [];

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 1; j < array.length; j++) {
            if (array[i] + array[j] == 0) {
                if (arrHasil.includes(array[i]) == false){
                    arrHasil.push(array[i]);
                }
                if (arrHasil.includes(array[j]) == false){
                    arrHasil.push(array[j]);
                }
            }
        }
    }

    if (sumArray(arrHasil) == 0){
        return arrHasil;
    }
}

console.log(sumZero(arr1));
console.log(sumZero(arr2));