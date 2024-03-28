#!/usr/bin/env node
// quiz game ask three question relted to cs 
import inquirer from "inquirer";
// ask mcqs computer reltaed 
const answer = await inquirer.prompt([
    {
        name: "mcq1",
        type: "list",
        message: "What is your preferred operating system?",
        choices: ["Windows", "Linux", "Mac OS"]
    },
    {
        name: "mcq2",
        type: "list",
        message: "What is your preferred browser?",
        choices: ["Chrome", "Firefox", "Safari"]
    },
    {
        name: "mcq3",
        type: "list",
        message: "What is your preferred programming language?",
        choices: ["C", "C++", "Java"]
    },
    {
        name: "mcq4",
        type: "list",
        message: "What is your preferred editor?",
        choices: ["VS Code", "Sublime Text", "Atom"]
    },
    {
        name: "mcq5",
        type: "list",
        message: "What is your preferred IDE?",
        choices: ["VS Code", "Sublime Text", "Atom"]
    },
    {
        name: "mcq6",
        type: "list",
        message: "What is full form of HTML?",
        choices: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Markup Language"]
    },
    {
        name: "mcq7",
        type: "list",
        message: "What is full form of CSS?",
        choices: ["Cascading Style Sheets", "Cascading Style Syntax", "Cascading Style Script"]
    },
    {
        name: "mcq8",
        type: "list",
        message: "What is full form of JS?",
        choices: ["Java Script", "Java Script Syntax", "Java Script Script"]
    },
    {
        name: "mcq9",
        type: "list",
        message: "What is full form of PHP?",
        choices: ["Hypertext Preprocessor", "Hypertext Preprocessor Syntax", "Hypertext Preprocessor Script"]
    },
    {
        name: "mcq10",
        type: "list",
        message: "What is full form of SQL?",
        choices: ["Structured Query Language", "Structured Query Syntax", "Structured Query Script"]
    }
]);
// results score out of 10
let score = 0;
if (answer.mcq1 === "Windows") {
    score = score + 1;
}
if (answer.mcq2 === "Chrome") {
    score = score + 1;
}
if (answer.mcq3 === "C") {
    score = score + 1;
}
if (answer.mcq4 === "VS Code") {
    score = score + 1;
}
if (answer.mcq5 === "VS Code") {
    score = score + 1;
}
if (answer.mcq6 === "Hypertext Markup Language") {
    score = score + 1;
}
if (answer.mcq7 === "Cascading Style Sheets") {
    score = score + 1;
}
if (answer.mcq8 === "Java Script") {
    score = score + 1;
}
if (answer.mcq9 === "Hypertext Preprocessor") {
    score = score + 1;
}
if (answer.mcq10 === "Structured Query Language") {
    score = score + 1;
}
console.log("Your score is " + score);
