// Reverse of number
let rev = 0;
const reverse = (num) => {
  const data = String(num);
  const lengthofData = data.length;
  let temp = 0;
  for (let i = lengthofdata - 1; i >= 0; i--) {
    temp += data[i]; //New
  }
  return temp;
};
console.log(reverse(3243));

//javascript program to convert temperatures to and from celsius fahrenheit
// c/5 = (f-32)/9
const tempconv = (temp, measurement = "c") => {
  if (measurement == "c") {
    return (9 * temp) / 5 + 32 + "fahrenheiit";
  }
  return ((temp - 32) / 9) * 5 + "celsius";
};
console.log(tempconv(60));
// 45,"f"

//multiplication and division
/*1.create default function
 */
const divmul = (i, j, product = "m") => {
  if (product === "m") {
    return a * b;
  }
  return a / b;
};
console.log(divmul(4, 2));
