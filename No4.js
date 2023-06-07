// Function untuk return index dari elemen mana saja yang dijumlahkan sama dengan target

var arr1 = [3, 2, 3];
var arr2 = [3, 2, 4];
var arr3 = [3, 3];

function addSum(array, target) {
    var arrHasil = [];

    if (array.length <= 2) {
        if (array.length === 2 && array[0] + array[1] === target) {
            arrHasil.push(0);
            arrHasil.push(1);
        }
        return arrHasil;

    } else {
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] + array[j] === target) {
                    arrHasil.push(i);
                    arrHasil.push(j);
                }
            }
        }
    }

    return arrHasil;
}

console.log(addSum(arr1, 6));
console.log(addSum(arr2, 6));
console.log(addSum(arr3, 6));