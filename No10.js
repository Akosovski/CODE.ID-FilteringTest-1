// Penyisipan Elemen integer dalam sebuah array

function sisip(array, masukan){
    array.push(masukan);
    var len = array.length;
    var swapped;
    
    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return array;
}

var arr1 = [4, 7, 1, 20];
var arr2 = [3, 5, 2];
var arr3 = [2, 14, 10, 1, 11, 12, 3, 4];

console.log(sisip(arr1, 9));
console.log(sisip(arr2, 7));
console.log(sisip(arr3, 9));