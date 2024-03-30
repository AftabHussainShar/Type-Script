// # take one date of date of birth then calculate age of person
import inquirer from "inquirer"

// take date of birth
const answer = await inquirer.prompt([
    {message: "Enter your date of birth", type: "date", name: "dob"}
])