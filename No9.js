// MIN MAX ARRAY

arr = [2, 3, 4, 5, 6, 7, 8, 9, 1, 10]


function searchMax(array){

    var max = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1] && i != array.length - 1) {
            max = array[i];
        }
        else if (array[i] == array.length && array[i] > array[i - 1]) {
            max = array[i];
        }
    }
    return max;
}

function searchMin(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1] && i != array.length - 1) {
            min = array[i];
        }
    }
    return min;
}


function minMaxArray(array){
    return "min = " + searchMin(array) + ", max = " + searchMax(array);
}

console.log(minMaxArray(arr));