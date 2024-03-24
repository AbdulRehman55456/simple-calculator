#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the following to perform action",
        type: "list",
        name: "operators",
        choices: ["addition", "subtraction", "multiplication", "division", "power"],
    },
]);
//console.log(answer)
//conditional statement
if (answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operators === "power") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else {
    console.log("this is invalid");
}
