// quiz game ask three question relted to cs 
import inquirer from "inquirer";

//question mcqs type
type QuestionMCQsType = {
    type: "list",
    name: string,
    message: string,
    choices: string[]
}

//question type
type QuestionType = {
    type: "input",
    name: string,
    message: string
}

//question
const questions: QuestionType[] = [
    {
        type: "input",
        name: "name",
        message: "Enter your name"
    },
    {
        type: "input",
        name: "age",
        message: "Enter your age"
    },
    {
        type: "input",
        name: "city",
        message: "Enter your city"
    }
]


// now ask Computer related 3 mcqs question 
const computerQuestions: QuestionMCQsType[] = [
    {
        type: "list",
        name: "os",
        message: "What is your preferred operating system?",
        choices: ["Windows", "Linux", "Mac OS"]
    },
    {
        type: "list",
        name: "browser",
        message: "What is your preferred web browser?",
        choices: ["Chrome", "Firefox", "Safari"]
    },
    {
        type: "list",
        name: "laptop",
        message: "What is your preferred laptop brand?",
        choices: ["Dell", "HP", "MacBook"]
    }
]

