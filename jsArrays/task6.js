const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]

const copiedArray = numbersList.toSorted((a, b) => a - b)

console.log("Original array :", numbersList)
console.log("Sorted array :", copiedArray)