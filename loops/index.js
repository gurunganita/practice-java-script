//DRY don't repeat yourself ->function
//SOC seperation of concern
//loop to print from 1 to 100
/*
for (let a = 0; a <= 100; a++) {
  console.log(a);
}
//while loop
/*let a = 0;
while (a <= 10) {
  console.log(a);
  a++;
}
//do while loop
/*do {
  console.log(a);
  a++;
  */
// } while (a <= 10);

//multiplication table

let result;
const num1 = prompt("number you want to have multi-table");
for (let a = 1; a <= 10; a++) {
  result = num1 * a;
  console.log(result);
}
