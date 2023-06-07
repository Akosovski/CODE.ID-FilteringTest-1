// Function untuk return index dari elemen target yang dicari dari sebuah array

var arr1 = [1, 2, 4];
var arr2 = [-1, 2, 5, 6, 7];

function findTarget(array, target) {
    var hasil = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] == target) {
            hasil = i;
        }
    }
    return hasil;
}

console.log(findTarget(arr1, 4));
console.log(findTarget(arr2, 6));