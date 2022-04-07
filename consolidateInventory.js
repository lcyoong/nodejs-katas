// Consolidate the inventory count of elements between two arrays and sort them according to alphabetical order
function updateInventory(arr1, arr2) {
    arr1.forEach(function (item1) {
        arr2.forEach(function (item2, index) {
            if (item2[1] == item1[1]) {
                item1[0] += item2[0];
                arr2.splice(index, 1);
            }
        });
    });

    return arr1.concat(arr2).sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));