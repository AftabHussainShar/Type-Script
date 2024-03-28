//question
const questions = [
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
];
// now ask Computer related 3 mcqs question 
const computerQuestions = [
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
];
export {};
