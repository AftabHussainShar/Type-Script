console.log("Welcome to Todo App");

import inquirer from "inquirer";

// Define todoList as an array of strings
const todoList: string[] = []; 

function addTodo() {
    inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter your todo: "
        }
    ]).then((answers: { todo: string }) => {
        const todoItem: string = answers.todo.trim();
        if (todoItem !== "") {
            todoList.push(todoItem);
            console.log("Todo added successfully!");
        } else {
            console.log("Please enter a valid todo.");
        }
        promptUser();
    });
}

function displayTodos() {
    console.log("Your Todos:");
    todoList.forEach((todo: string, index: number) => { // Explicitly define types for todo and index
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
    ]).then((answers: { action: string }) => {
        switch (answers.action) {
            case "Add Todo":
                // Add code to add todo
                addTodo();
                break;
            case "View Todos":
                // Add code to display todos
                displayTodos();
                break;
            case "Exit":
                console.log("Exiting Todo App. Goodbye!");
                break;
        }
    });
}

promptUser();
