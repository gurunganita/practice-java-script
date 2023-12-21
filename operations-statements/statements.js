// console.log("hello world!");
// Comparison Chart
/*
= -> a = b (value)
== => value && value check
=== => strictly type check value && value check  && type check 
*/
// StatementsA block of codes executing based on the condition then we use statements
// if else
// switch case

const gender = prompt("What is your gender? (m/f)");

if (gender == "m") {
  alert("He is male");
} else {
  alert("She is female");
}

// switch case
const value = prompt("Enter a value:"); //"1"

switch (value) {
  case 1:
    console.log("1");
    break;

  default:
    console.log("else");
}

// calculator using switch case
const num1 = prompt("enter num1");
const num2 = prompt("enter num2");
let operator = prompt("Enter arithmetic operation");

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("not required operator");
}
