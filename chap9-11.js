// City Name Input
let city = prompt("Enter your city name:");
if (city === "Karachi") {
  alert("Welcome to the city of lights");
}

// Gender Input
let gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma’am");
}

// Traffic Signal Color Input
let signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):");
if (signalColor === "Red") {
  alert("Must Stop");
} else if (signalColor === "Yellow") {
  alert("Ready to move");
} else if (signalColor === "Green") {
  alert("Move now");
}

// Fuel Check
let fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// Condition Check for Variables
// a. For `a`
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b. For `b`
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

// c. For `c`
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

// d. For `materialCost` and `laborCost`
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e. For `true` and `false` conditions
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

// f. For string comparison
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Percentage & Grade Calculation
let totalMarks = parseFloat(prompt("Enter total marks:"));
let marksObtained = parseFloat(prompt("Enter marks obtained:"));
let percentage = (marksObtained / totalMarks) * 100;
let grade;
let remarks;

if (percentage >= 90) {
  grade = "A+";
  remarks = "Excellent";
} else if (percentage >= 80) {
  grade = "A";
  remarks = "Very Good";
} else if (percentage >= 70) {
  grade = "B";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "C";
  remarks = "Satisfactory";
} else if (percentage >= 50) {
  grade = "D";
  remarks = "Needs Improvement";
} else {
  grade = "F";
  remarks = "Fail";
}

alert(`Total Marks: ${totalMarks}
Marks Obtained: ${marksObtained}
Percentage: ${percentage}%
Grade: ${grade}
Remarks: ${remarks}`);

// Guess Game
let secretNumber = Math.floor(Math.random() * 10) + 1; // Secret number between 1 and 10
let userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
}

// Divisible by 3
let number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
  alert("The number is divisible by 3");
}

// Even or Odd
let num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

// Temperature Check
let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
}

// Calculator
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operation");
}

alert(`The result of ${num1} ${operation} ${num2} is: ${result}`);
