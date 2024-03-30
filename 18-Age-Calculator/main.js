"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// # take one date of date of birth then calculate age of person
const inquirer_1 = __importDefault(require("inquirer"));
// take date of birth
const answer = inquirer_1.default.prompt([
    { message: "Enter your date of birth", type: "date", name: "dob" }
]);
// calculate age
const age = new Date().getFullYear() - new Date(answer.dob).getFullYear();
console.log("Your age is " + age);
