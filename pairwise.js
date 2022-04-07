// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
function pairwise(arr, arg) {
    // Find pairs that sum up to the argument
    let pairs = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == arg) {
                // If the element has not been used in any existing pairs
                if (pairs.findIndex((element) => element.index1 == i || element.index2 == j || element.index1 == j || element.index2 == i) == -1) {
                    pairs.push({
                        index1: i,
                        index2: j,
                        value1: arr[i],
                        value2: arr[j]
                    });
                }
            }
        }
    }

    // Sum up the indices of all pairs
    let sum = 0;

    pairs.forEach((element) => {
        sum += element.index1 + element.index2;
    })

    return sum;
}

console.log(pairwise([1, 1, 1], 2));