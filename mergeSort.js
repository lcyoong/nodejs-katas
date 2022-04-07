// Recursively split array until a 1-element and then merge
function mergeSort(array) {
    if (array.length == 1) return array;

    let split_index = Math.floor(array.length / 2);

    return merge(mergeSort(array.slice(0, split_index)), mergeSort(array.slice(split_index)))
}

// Merge 2 sorted arrays
function merge(array1, array2) {
    let merged = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] > array2[0]) {
            merged.push(array2[0])
            array2.shift()
        } else {
            merged.push(array1[0])
            array1.shift()
        }
    }

    return [...merged, ...array1, ...array2];

}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))