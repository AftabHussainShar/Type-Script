#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        message: "Guess a number between 1 and 10",
        type: "number",
        name: "number"
    }
]);
// take random number 
let number2 = Math.floor(Math.random() * 10) + 1;
if (answer.number === number2) {
    console.log("You guessed right");
    console.log("The number was " + number2);
}
else {
    console.log("You guessed wrong");
    console.log("The number was " + number2);
}
