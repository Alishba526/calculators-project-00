#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: " enter first number", type: "number", name: "firstNumber" },
  { message: " enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "devision"],
  },
]);
console.log(answer);

//condition statment;

if (answer.operator === "addition") {
  console.log(chalk.green(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "subtraction") {
  console.log(chalk.red(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "multiplication") {
  console.log(chalk.magenta(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "devision") {
  console.log(chalk.blue(answer.firstNumber / answer.secondNumber));
} else {
  console.log(chalk.red("please valid a number"));
}



















































































//session 11  practice question 5;
//import inquirer from "inquirer";
//const paswordvar=await inquirer .prompt([
//{
//type:'password',
//name:"passworda",
//message:"enter pasword",
//}
//]);
//console.log(paswordvar.passworda);

// import inquirer from "inquirer";

//const answer = await inquirer.prompt([
//{ message: "pyhton fees 5000", type: "number", name: "firstNumber" },
// {
//  message: "select one of the operator to perform action",
//type: "list",
//name: "operator",
// choices: ["python", "javascipt", "typescript"],
//},
//]);
//console.log(answer);

//condition statment;
//if(answer.firstNumber){
//console.log('admission succes');

//  }

//========QUESTION 15=================;
//=======BMI CALCULATOR ===============

// function myBmi(weight: number, height: number): number {
//   const bmi: number = weight / (height * height);
//   return bmi;
// }

// let weight: number = 80;
// let height: number = 1.8;
// let bmiResult: number = myBmi(weight, height);

// console.log(`your BMI CALCULATOR IS == ${height}${bmiResult}  `);

//bmi calculator//;
