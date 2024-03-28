// quiz game ask three question relted to cs 
import inquirer from "inquirer";


// ask mcqs computer reltaed 

const answer = await inquirer.prompt([
    {
        name: "mcq1",
        type: "list",
        message: "What is your preferred operating system?",
        choices: ["Windows", "Linux", "Mac OS"]
        
    }
    {
        name: "mcq2",
        type: "list",
        message: "What is your preferred browser?",
        choices: ["Chrome", "Firefox", "Safari"]
    }
    {
        name: "mcq3",
        type: "list",
        message: "What is your preferred programming language?",
        choices: ["C", "C++", "Java"]
    }
    {
        name: "mcq4",
        type: "list",
        message: "What is your preferred editor?",
        choices: ["VS Code", "Sublime Text", "Atom"]
    }
]);