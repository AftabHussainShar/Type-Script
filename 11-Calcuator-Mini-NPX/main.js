#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// take two inputs
const answer = await inquirer_1.default.prompt([
    { message: "Enter first number", type: "number", name: "firstname" },
    { message: "Enter Second number", type: "number", name: "secondname" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
// conditional statment
if (answer.operator === "Addition") {
    console.log(answer.firstname + answer.secondname);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstname - answer.secondname);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstname * answer.secondname);
}
else if (answer.operator === "Division") {
    console.log(answer.firstname / answer.secondname);
}
else {
    console.log("Please select valid operator");
}
