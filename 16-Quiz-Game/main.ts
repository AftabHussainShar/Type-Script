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
