function bubbleSort(array) {
    // Only change code below this line
    const start = Date.now();
    let sorted;

    do {
        sorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            // Swap if current item is greater than the next item
            if (array[i] > array[i + 1]) {
                let temp = array[i + 1]
                array[i + 1] = array[i]
                array[i] = temp
                sorted = false
                // console.log(array[i] + ' vs ' + array[i+1])
            }
        }
    } while (sorted == false)

    console.log(array);
    console.log(Date.now() - start);
    // Only change code above this line
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);