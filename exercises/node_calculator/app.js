const readlineSync = require("readline-sync");
const operator = readlineSync.keyIn("do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply?")
let numb1 = readlineSync.question("Enter first number: ")
let numb2 = readlineSync.question("Enter second number: ")
const addS = parseFloat(numb1) + parseFloat(numb2)
const sub = parseFloat(numb1) - parseFloat(numb2)
const mult = parseFloat(numb1) * parseFloat(numb2)
const divi = parseFloat(numb1) / parseFloat(numb2)

if(operator === 'a'){
 console.log("answer is " + addS)
} else if(operator === 's'){
    console.log("answer is " + sub)
} else if(operator === 'd'){
    console.log("answer is " + divi)
} else{
    console.log("answer is " + mult)
}
