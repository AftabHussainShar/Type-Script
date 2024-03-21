#!/usr/bin/env node
// creating bmi calculator with required parameters

import inquirer from "inquirer";
function calculateBmi(height: number, weight: number): string {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// take two input using inquirer
inquirer
    .prompt([
        {
            type: "number",
            name: "height",
            message: "Enter your height in meters: ",
        },
        {
            type: "number",
            name: "weight",
            message: "Enter your weight in kilograms: ",
        },
    ])
    .then((answers) => {
        const { height, weight } = answers;
        const bmi = calculateBmi(height, weight);
        console.log(`Your BMI is: ${bmi}`);
    })