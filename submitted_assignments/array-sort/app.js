// sort smallest to greatest
const arr1 = [1, 3, 5, 2, 90, 20];

const arr1Sort = arr1.sort((a, b) => a - b)
console.log(arr1Sort)

//sort greatest to smallest
const arr2 = [1, 3, 5, 2, 90, 20];

const arr2Sort = arr2.sort((a, b) => b - a)

console.log(arr2Sort)

// sort smallest string to longest

const arr3 = ["dog", "wolf", "by", "family", "eaten"]

const arr3Sort = arr3.sort((a, b) => a.length - b.length)
console.log(arr3Sort)

//sort array alphabetically

const arr4 = ["dog", "wolf", "by", "family", "eaten"]

const arr4Sort = arr4.sort((a, b) => a.localeCompare(b)).join('')
console.log(arr4)

// sort by age

const arr5 = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];
const arr5Sort = arr5.sort((a, b) => a.age - b.age)
console.log(arr5)