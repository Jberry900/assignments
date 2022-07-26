const readline = require("readline-sync");
const name = readline.question("What is your name? ");
const question = readline.keyIn("(p)ut hand in hole? (l)ook for key? (o)pen the door?");


if(question === "p"){
    console.log("you reached in hole")
    
} else{
    console.log(key)
}