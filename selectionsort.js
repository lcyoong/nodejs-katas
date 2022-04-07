function selectionSort(array) {

    const start = Date.now();
    // Only change code below this line
    for (let i = 0; i < array.length - 1; i++) {

        let smallest_value = array[i];
        let smallest_index = 0;

        // Find the smallest value from the list
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < smallest_value) {
                smallest_value = array[j];
                smallest_index = j;
            }
        }

        // If smallest value has changed, swap it
        if (smallest_value != array[i]) {
            array[smallest_index] = array[i];
            array[i] = smallest_value;
        }
    }

    console.log(array);
    console.log(Date.now() - start);
    // Only change code above this line
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);