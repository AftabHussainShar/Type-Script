console.log("Welcome to Todo App");
import inquirer from "inquirer";
const todoList = []; // Define todoList as an array of strings
function addTodo() {
    inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter your todo: "
        }
    ]).then((answers) => {
        const todoItem = answers.todo.trim();
        if (todoItem !== "") {
            todoList.push(todoItem);
            console.log("Todo added successfully!");
        }
        else {
            console.log("Please enter a valid todo.");
        }
        promptUser();
    });
}
function displayTodos() {
    console.log("Your Todos:");
    todoList.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
    promptUser();
}
function promptUser() {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Choose an action:",
            choices: ["Add Todo", "View Todos", "Exit"]
        }
    ]).then((answers) => {
        switch (answers.action) {
            case "Add Todo":
                addTodo();
                break;
            case "View Todos":
                displayTodos();
                break;
            case "Exit":
                console.log("Exiting Todo App. Goodbye!");
                break;
        }
    });
}
promptUser();
