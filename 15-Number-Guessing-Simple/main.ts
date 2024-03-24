#!/usr/bin/env node
// import inquirer
import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    {
        name: "number",
        type: "number",
        message: "Guess a number between 1 and 10",
    }
]);


let number2: number = Math.floor(Math.random() * 10) + 1
if (answer.number ===number2 ) {
    console.log("You guessed right")
    console.log("The number was " + number2)

} else {
    console.log("You guessed wrong")
    console.log("The number was " + number2)

}