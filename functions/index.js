// write a function to add two numbers
/*
const a = Number(prompt("Enter first num"));
const b = Number(prompt("Enter the second num"));
const c = Number(prompt("Enter the 3"));
const d = Number(prompt("Enter the 4"));

//Define the function (basic)
function add(a, b) {
  return a + b;
}

//call the function
const o = add(a, b);
console.log(o); //print the value
*/
//even num check
//Es5
/*
function checkeven(a) {
  return a % 2 == 0;
}
const e = checkeven(a);
console.log(e);

//Nameless function
//Inline function
//implicit function(intervies function)
//Explicit function
//Closure (interview question)
//parameterized function
//default function

//calculator

const operator = prompt("Enter the arithmetic operator");
//Es6
const calculator = (a, b) => {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
    case "/":
      return a / b;
      break;
    default:
      console.log("invalid");
  }
};
const op = calculator(a, b);
console.log(op);

//Es6 (arrow function)
const sum = (c, d) => {
  return c + d;
};
const s = sum(c, d);
console.log(s);
*/
// Write a multiplication table of 3 using function and loop
//define
const a = 3;
const multi = (num, i) => {
  return a * i;
};
//call
for (let i = 1; i <= 10; i++) {
  const result = multi(a, i);
  console.log(result);
}
