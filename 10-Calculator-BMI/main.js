"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// creating bmi calculator 
const inquirer_1 = __importDefault(require("inquirer"));
function calculateBmi(height, weight) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi < 25) {
        return "Normal";
    }
    else if (bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
// take two input using inquirer
inquirer_1.default
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
});
