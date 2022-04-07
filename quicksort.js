function quickSort(array) {

    // Only change code below this line

    if (array.length == 0) return [];

    let pivotIndex = 0;
    let smaller = [];
    let greater = [];
    let equal = [];

    for (let el of array) {
        if (el < array[pivotIndex]) {
            smaller.push(el);
        } else if (el == array[pivotIndex]) {
            equal.push(el);
        } else {
            greater.push(el);
        }
    }

    return [...quickSort(smaller), ...equal, ...quickSort(greater)];
    // Only change code above this line
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));