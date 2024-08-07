//task 1
const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

let tempGreaterOrEqualTo25 = temperatures.filter((temp) => {
  return temp >= 25;
});

console.log(tempGreaterOrEqualTo25);

//task 2
const tempLessThan20 = temperatures.filter((temp) => {
  return temp < 20;
});

console.log(tempLessThan20);

//task 3 the formula (Celsius * 9/5) + 32.
const toFahrenheit = temperatures.map((temp) => {
  return (temp * 9) / 5 + 32;
});

console.log(toFahrenheit);

const labelTemp = temperatures.map((temp) => {
  if (temp >= 25) {
    return "Warm";
  } else if (temp >= 20 && temp <= 24) {
    return "Mild";
  } else {
    return "Cool";
  }
});

console.log(labelTemp);

//task 5
let currentMax = temperatures[0];
const highestTempOfTheMonth = temperatures.forEach((temp) => {
  if (temp > currentMax) {
    currentMax = temp;
  }
});

console.log("this is the highest temp", currentMax);

//task 6
let currentMin = temperatures[0];
const lowestTempOfTheMonth = temperatures.forEach((temp) => {
  if (temp < currentMin) {
    currentMax = temp;
  }
});

console.log("this is the lowest temp", currentMin);
