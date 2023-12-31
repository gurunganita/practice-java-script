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
let operator = Number(prompt("Enter arithmetic operation"));
/*
if(num1>65 && num1<90)

if (isNaN(num1)){
  alert("invalid");
}
97 122
*/
const isValidnum1 = (num1 >= 65 && num1 <= 90) || (num1 >= 97 && num1 <= 122);
const isValidnum2 = (num2 >= 65 && num2 <= 90) || (num2 >= 97 && num2 <= 122);
if (isValidnum1 || isValidnum2) {
  alert("Invalid num");
} else {
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
}
//ternary operator
const age = prompt("Enter your age");
const result =
  age >= 18 ? console.log("eligible to vote") : console.log("not eligible");
