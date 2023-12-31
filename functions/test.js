// namelesss function or Anonymous function
//function keyword must be used to make it global
const a = function () {
  console.log("hello");
};
a();
// used in global variable

// default function
// multiplication table of 2
// if nothing is sent a=3, a value will be overridden by user sent value
const mul = (a = 3, b) => {
  return a * b;
};
const res = mul(undefined, 2);
console.log(res);

// eg:pagination
const pagination = (page = 1, size = 5) => {
  for (let i = page; i <= size; i++) {
    console.log(i);
  }
};
pagination();

// parameterized function
const multiplier = (a, b, c, d) => {
  return a * b;
};

// inline function
// concept:reusability,using anynomous function which is used in global function
const footer = function () {
  console.log("Inline function");
};
footer(); //page 1
footer(); //page 2

// most important topic -> interview question
// closure  function
// write a function that returns a secret password
const secret = () => {
  const password = "password";
  return password;
};
console.log(secret());
// function that returns the hardcoded variable stored inside the function
// use case: used to get the secret environment variables used in the application

// Implicit function
const addit = (a, b) => a + b;
const result = addit(2, 3);
console.log(result);
// not needed return function

// Explicit function
// needed return function
const sub = (a, b) => {
  return a - b;
};
const output = sub(3, 2);
console.log(output);

// IIFE
// Immediately invoked functional expression
(function (a, b) {
  console.log(a + b);
  console.log("I am IIFE");
})(3, 4);
// use: Scripts to add the dummy data inside the application during first run.
