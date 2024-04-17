function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function bubbleSort(arr) {
    var length = arr.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
console.log('hello world');
var unsortedArray = [5, 3, 8, 1, 2];
var sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);
