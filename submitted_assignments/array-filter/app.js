// greater than 5
const arr1 = [3, 6, 8, 2];

const arr1Filter = arr1.filter(num => num > 5)
console.log(arr1Filter)

//even numbers
const arr2 = [3, 6, 8, 2];

const arr2Filter = arr2.filter(num => num % 2 === 0)
console.log(arr2Filter)

//5 characters or fewer

const arr3 = ["dog", "wolf", "by", "family", "eaten", "camping"];

const arr3Filter =  arr3.filter(num => num.length <= 5)
console.log(arr3Filter)

// true or false

const arr4 = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

const arr4Filter = arr4.filter(num => num.member === true)
console.log(arr4Filter)

// old enough

const arr5 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const arr5Filter = arr5.filter(num => num.age >= 18)
console.log(arr5Filter)