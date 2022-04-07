// Symmetric difference between arrays i.e. set of elements either in all sets but not in all
function sym(...args) {
    let result = [];

    for (let i = 0; i < args.length; i++) {
        result = symdiff(result, args[i]);
    }

    return result;
}

function symdiff(arr1, arr2) {
    let diff = [];

    arr1.forEach(function (item) {
        if (arr2.indexOf(item) == -1 && diff.indexOf(item) == -1) {
            diff.push(item);
        }
    });

    arr2.forEach(function (item) {
        if (arr1.indexOf(item) == -1 && diff.indexOf(item) == -1) {
            diff.push(item);
        }
    });

    return diff;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));