const readlineSync = require('readline-sync');
const chalk = require('chalk');
const input = require('readline-sync');
const name = input.question("Enter your name: ")


const player = {
    Name: name,
    Health: 10,
    Inventory: "nothing.."
}
const enemy1 = {
    Name: "Goblin",
    Health: 10
}
const enemy2 = {
    Name: "Orc",
    Health: 10
}
const enemy3 = {
    Name: "Richard",
    Health: 20
}

//open message
greeting()

function greeting(){
    
    const greet = "\nWelcome to the most linear quest of your life, ";
    console.log(chalk.white.bold(greet + name))
    walk()
} 
//walking function
function walk() {
    const walking = readlineSync.keyIn("\n(w)alk forward.. (p)layer status..: ")
    
    if(walking === "w") {
        console.log("\nYou take a step forward...")
        encounter();
    }
    if(walking === "p") {
        console.log(chalk.green.bold("\n" + name + "'s Stats: " + "\nName: " + player.Name + "\nHealth: "+ player.Health + "\nInventory Items: " + player.Inventory + "\n"))
        walk()
    }
}
//random enemy encounter
function encounter() {
    let d = Math.random();
    if (d < 0.25) {
        encounterResult()
    } else if(d > 0.25){
        walk()
    } else {
        checkInventory()
    }
}
//random enemy chance on encounter
function encounterResult() {
    let f = Math.random();
    if(f <= .33){
        console.log(chalk.red.bold("\nYou encountered and enemy!\n"))
        console.log("Name: " + enemy1.Name + "\nHealth: "+ enemy1.Health + "\n")
        willFight1()
    } else if(f > .33 && f <= .66) {
        console.log(chalk.red.bold("\nYou encountered and enemy!\n"))
        console.log("Name: " + enemy2.Name + "\nHealth: "+ enemy2.Health + "\n")
        willFight2()
    } else {
        console.log(chalk.red.bold("\nYou encountered and enemy!\n"))
        console.log("Name: " + enemy3.Name + "\nHealth: "+ enemy3.Health + "\n")
        willFight3()
    }
}
//player encounter decisions
function willFight1(){
    const willFight = readlineSync.keyIn("(f)ight or (r)un?")

    if(willFight === "f"){
        battle1()
    } else{
        walk()
    }
}

function willFight2(){
    const willFight = readlineSync.keyIn("(f)ight or (r)un?")

    if(willFight === "f"){
        battle2()
    } else {
        walk()
    }
}

function willFight3(){
    const willFight = readlineSync.keyIn("(f)ight or (r)un?")

    if(willFight === "f"){
        battle3()
    } else {
        walk()
    }
}
//battle function
function battle1(){
    let max = 3;
    let min = 2;
    let playerDam = Math.floor(Math.random() * (max - min +1));
    enemy1.Health = enemy1.Health - playerDam;
    let enemyDam = Math.floor(Math.random() * (max - min +1));
    player.Health = player.Health - enemyDam;
    console.log(enemy1);
    console.log(player);
    if(enemy1.Health > 0 && player.Health > 0){
        battle1();
    } else if (enemy1.Health <= 0 && player.Health > 0) {
        console.log("you win")
        player.Inventory = "Sword"
        player.Health = player.Health + 2;
        enemy1.Health = 10;
        walk();
    } else {
        console.log("You dead dude...\n");
        player.Health = 10;
        enemy1.Health = 10;
        greeting()

    }

}

function battle2(){
    let max = 3;
    let min = 2;
    let playerDam = Math.floor(Math.random() * (max - min +1));
    enemy2.Health = enemy2.Health - playerDam;
    let enemyDam = Math.floor(Math.random() * (max - min +1));
    player.Health = player.Health - enemyDam;
    //let newEnemy2 = enemy2
    console.log(enemy2);
    console.log(player);
    if(enemy2.Health > 0 && player.Health > 0){
        battle2();
    } else if (enemy2.Health <= 0 && player.Health > 0) {
        console.log("you win")
        player.Health = player.Health + 2;
        walk();
    } else {
        console.log("you died")
        console.log("You dead dude...\n");
        player.Health = 10;
        enemy2.Health = 10;
        greeting()
    }
}

function battle3(){
    let max = 3;
    let min = 2;
    let playerDam = Math.floor(Math.random() * (max - min +1));
    enemy3.Health = enemy3.Health - playerDam;
    let enemyDam = Math.floor(Math.random() * (max - min +1));
    player.Health = player.Health - enemyDam;
    //let newEnemy3 = enemy3
    console.log(enemy3);
    console.log(player);
    if(enemy3.Health > 0 && player.Health > 0){
        battle3();
    } else if (enemy3.Health <= 0 && player.Health > 0) {
        console.log("you win")
        player.Health = player.Health + 2;
        walk();
    } else {
        console.log("you died")
        console.log("You dead dude...\n");
        player.Health = 10;
        enemy3.Health = 20;
        greeting()
    }
}

function checkInventory() {
    console.log(player)

}


