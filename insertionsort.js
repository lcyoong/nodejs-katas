function insertionSort(array) {
    // Only change code below this line
    if (array.length == 1) return array;

    for (let i = 1; i < array.length; i++) {
        let target = array[i];
        let swap_index = i;

        // Traversing the sorted part
        for (let j = swap_index - 1; i > 0; j--) {

            // If target is less than the element, push the element backward
            if (target < array[j]) {
                array[swap_index] = array[j];
                swap_index = j;
            } else {
                array[swap_index] = target;
                break;
            }
        }
    }
    return array;
    // Only change code above this line
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));