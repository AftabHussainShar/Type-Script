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
        message: "What is your preferred IDE?",
        choices: ["VS Code", "Sublime Text", "Atom"]
    },
    {
        name: "mcq7",
        type: "list",
        message: "What is your preferred IDE?",
        choices: ["VS Code", "Sublime Text", "Atom"]
    },
    {
        name: "mcq8",
        type: "list",
        message: "What is your preferred IDE?",
        choices: ["VS Code", "Sublime Text", "Atom"]
    },
    {
        name: "mcq9",
        type: "list",
        message: "What is your preferred IDE?",
        choices: ["VS Code", "Sublime Text", "Atom"]
    },
    {
        name: "mcq10",
        type: "list",
        message: "What is your preferred IDE?",
        choices: ["VS Code", "Sublime Text", "Atom"]
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
if (answer.mcq6 === "VS Code") {
    score = score + 1;
}
if (answer.mcq7 === "VS Code") {
    score = score + 1;
}
if (answer.mcq8 === "VS Code") {
    score = score + 1;
}
if (answer.mcq9 === "VS Code") {
    score = score + 1;
}
if (answer.mcq10 === "VS Code") {
    score = score + 1;
}
console.log("Your score is " + score);
