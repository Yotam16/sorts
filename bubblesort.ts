function swap(arr: number[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr: number[]): number[] {
    const length = arr.length;
    
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
  
    return arr;
}

console.log('hello world');
const unsortedArray = [5, 3, 8, 1, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); 
