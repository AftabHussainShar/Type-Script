#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import inquirer
const inquirer_1 = __importDefault(require("inquirer"));
// take random number and match it with user input
const answer = await inquirer_1.default.prompt([
    {
        name: "number",
        type: "number",
        message: "Guess a number between 1 and 10",
    }
]);
// generate random number
let number2 = Math.floor(Math.random() * 10) + 1;
// if condition
if (answer.number === number2) {
    console.log("You guessed right");
    // print number
    console.log("The number was " + number2);
}
else {
    console.log("You guessed wrong");
    // print number
    console.log("The number was " + number2);
}
