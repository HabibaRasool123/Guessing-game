#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between (1 to 6):",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congragulations! you guess right number.");
}
else {
    console.log("you guess wrong number");
}
