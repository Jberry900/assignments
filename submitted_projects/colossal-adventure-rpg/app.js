const readlineSync = require('readline-sync');
const chalk = require('chalk');
const input = require('readline-sync');
const name = input.question(chalk.bgRed.black.bold("You wake up in a dark hallway. Someone asks you a question then vanishes..", "What is your name: "));
const player = {
    Name: name,
    Health: 10,
    Inventory: []
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
    Health: 10
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
    const walking = readlineSync.keyIn(chalk.white.bold("\n(w)alk forward.. (p)layer status..: "));
    
    if(walking === "w") {
        console.log(chalk.white.bold("\nYou take a step forward..."));
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
//running away functions
function running1() {
    let r = Math.random();
    if (r <= 0.50) {
        console.log("\nYou tried to run away... But didn't escape!\n" + "The Goblin tackles you to the ground..\n");
        battle1();
    } else {
        console.log("\nYou managed to outrun the Goblin..\n");
        walk();
    }
}

function running2() {
    let r = Math.random();
    if (r <= 0.50) {
        console.log("\nYou tried to run away... But didn't escape!\n" + "The Orc tackles you to the ground..\n");
        battle2();
    } else {
        console.log("\nYou managed to outrun the Orc..\n");
        walk();
    }
}

function running3() {
    let r = Math.random();
    if (r <= 0.50) {
        console.log("\nYou tried to run away... But didn't escape!\n" + "\nThe Richard tackles you to the ground..\n");
        battle3();
    } else {
        console.log("\nYou managed to outrun the Richard..\n");
        walk();
    }
}
//random enemy chance on encounter
function encounterResult() {
    let f = Math.random();
    if(f <= .33){
        console.log(chalk.red.bold("\nYou encountered and enemy!\n"));
        console.log(chalk.redBright.bold("Name: " + enemy1.Name + "\nHealth: "+ enemy1.Health + "\n"));
        willFight1();
    } else if(f > .33 && f <= .66) {
        console.log(chalk.red.bold("\nYou encountered and enemy!\n"));
        console.log(chalk.redBright.bold("Name: " + enemy2.Name + "\nHealth: "+ enemy2.Health + "\n"));
        willFight2();
    } else {
        console.log(chalk.red.bold("\nYou encountered and enemy!\n"));
        console.log(chalk.redBright.bold("Name: " + enemy3.Name + "\nHealth: "+ enemy3.Health + "\n"));
        willFight3();
    }
}
//player encounter decisions
function willFight1(){
    const willFight = readlineSync.keyIn(chalk.white.bold("(f)ight or (r)un?\n"));

    if(willFight === "f"){
        battle1();
    } else if(willFight === "r"){
        running1();
    }
}

function willFight2(){
    const willFight = readlineSync.keyIn(chalk.white.bold("(f)ight or (r)un?\n"));

    if(willFight === "f"){
        battle2();
    } else if(willFight === "r"){
        running2();
    }
}

function willFight3(){
    const willFight = readlineSync.keyIn(chalk.white.bold("(f)ight or (r)un?\n"));

    if(willFight === "f"){
        battle3();
    } else if(willFight === "r"){
        running3();
    }
}
//battle function
function battle1(){
    let max = 3;
    let min = 2;
    let playerDam = Math.floor(Math.random() * (max - min +2));
    enemy1.Health = enemy1.Health - playerDam;
    let enemyDam = Math.floor(Math.random() * (max - min +1));
    player.Health = player.Health - enemyDam;
    console.log(enemy1.Name, enemy1.Health);
    console.log(player.Name, player.Health);
    if(enemy1.Health > 0 && player.Health > 0){
        battle1();
    } else if (enemy1.Health <= 0 && player.Health > 0) {
        console.log(chalk.green.bold("\nYou Won the Fight!!\n"));
        console.log(chalk.yellowBright.bold("You found a Sword"));
        player.Inventory.push([" Sword "]);
        player.Health = player.Health + 2;
        enemy1.Health = 10;
        walk();
    } else {
        console.log(chalk.red.bold("\nYou dead dude...\n"));
        console.log(chalk.red.bold("Here... Try again\n"));
        player.Health = 10;
        enemy1.Health = 10;
        greeting()

    }

}

function battle2(){
    let max = 3;
    let min = 2;
    let playerDam = Math.floor(Math.random() * (max - min +2));
    enemy2.Health = enemy2.Health - playerDam;
    let enemyDam = Math.floor(Math.random() * (max - min +1));
    player.Health = player.Health - enemyDam;
    console.log(enemy2.Name, enemy2.Health);
    console.log(player.Name, enemy2.Health);
    if(enemy2.Health > 0 && player.Health > 0){
        battle2();
    } else if (enemy2.Health <= 0 && player.Health > 0) {
        console.log(chalk.green.bold("\nYou Won the Fight!!\n"));
        console.log(chalk.yellowBright.bold("You found a Shield!"));
        player.Inventory.push(" Shield ");
        player.Health = player.Health + 2;
        enemy2.Health = 10;
        walk();
    } else {
        console.log(chalk.red.bold("\nYou dead dude...\n"));
        console.log(chalk.red.bold("Here... Try again\n"));
        player.Health = 10;
        enemy2.Health = 10;
        greeting()
    }
}

function battle3(){
    let max = 3;
    let min = 2;
    let playerDam = Math.floor(Math.random() * (max - min +2));
    enemy3.Health = enemy3.Health - playerDam;
    let enemyDam = Math.floor(Math.random() * (max - min +1));
    player.Health = player.Health - enemyDam;
    console.log(enemy3.Name, enemy3.Health);
    console.log(player.Name, player.Health);
    if(enemy3.Health > 0 && player.Health > 0){
        battle3();
    } else if (enemy3.Health <= 0 && player.Health > 0) {
        console.log(chalk.green.bold("You Won the Fight!!\n"));
        console.log(chalk.yellowBright.bold("You found a Gem of Truth!"));
        player.Inventory.push(" Gem of Truth ");
        player.Health = player.Health + 2;
        enemy3.Health = 10;
        walk();
    } else {
        console.log(chalk.red.bold("\nYou dead dude...\n"));
        console.log(chalk.red.bold("Here... Try again\n"));
        player.Health = 10;
        enemy3.Health = 10;
        greeting()
    }
}

function checkInventory() {
    console.log(player);

}


