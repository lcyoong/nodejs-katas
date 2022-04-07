function binarySearch(searchList, target) {

    let result = search(searchList, target)

    if (result.length == 0) return 'Value Not Found'

    return result

}

function search(searchList, target) {
    let arrayPath = [];

    // Save mid value point
    let mid_index;

    if (searchList.length % 2 == 0) {
        mid_index = Math.floor(searchList.length / 2) - 1;
    } else {
        mid_index = Math.floor(searchList.length / 2);
    }
    let mid_value = searchList[mid_index];

    arrayPath.push(mid_value);

    // Found the match
    if (target == mid_value) {
        return arrayPath;
    } else {
        let sortedHalf = [];

        if (target > mid_value) {
            sortedHalf = searchList.slice(mid_index + 1);
        } else {
            sortedHalf = searchList.slice(0, mid_index);
        }

        // If the half sorted array is empty, not found
        if (sortedHalf.length == 0) {
            return [];
        } else {
            let finding = search(sortedHalf, target)

            // If the search yields empty array, cascade up
            if (finding.length == 0) {
                return [];
            } else {
                arrayPath = arrayPath.concat(finding);
            }
        }
    }

    return arrayPath;
}


let arr = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];

// console.log(arr.length);
console.log(binarySearch(arr, 6));