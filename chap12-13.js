/******************** QUESTION 1 ********************/
// Check whether input is number, uppercase or lowercase letter

var ch = prompt("Q1: Enter a character:");
var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
    console.log("Q1: It is a number");
} else if (code >= 65 && code <= 90) {
    console.log("Q1: It is an uppercase letter");
} else if (code >= 97 && code <= 122) {
    console.log("Q1: It is a lowercase letter");
} else {
    console.log("Q1: Other character");
}


/******************** QUESTION 2 ********************/
// Accept two integers and display the larger or equality

var num1 = parseInt(prompt("Q2: Enter first number:"));
var num2 = parseInt(prompt("Q2: Enter second number:"));

if (num1 > num2) {
    console.log("Q2: " + num1 + " is larger");
} else if (num2 > num1) {
    console.log("Q2: " + num2 + " is larger");
} else {
    console.log("Q2: Both numbers are equal");
}


/******************** QUESTION 3 ********************/
// Check positive, negative or zero

var num = parseInt(prompt("Q3: Enter a number:"));

if (num > 0) {
    console.log("Q3: Number is positive");
} else if (num < 0) {
    console.log("Q3: Number is negative");
} else {
    console.log("Q3: Number is zero");
}


/******************** QUESTION 4 ********************/
// Check vowel

var char = prompt("Q4: Enter a character:").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Q4: True (It is a vowel)");
} else {
    console.log("Q4: False (It is not a vowel)");
}


/******************** QUESTION 5 ********************/
// Password validation

var correctPassword = "javascript123";
var userPassword = prompt("Q5: Enter your password:");

if (!userPassword) {
    console.log("Q5: Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Q5: Correct! The password you entered matches the original password");
} else {
    console.log("Q5: Incorrect password");
}


/******************** QUESTION 6 ********************/
// Fixed if/else statement

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log("Q6:", greeting);


/******************** QUESTION 7 ********************/
// Time-based greeting (24-hour format)

var time = parseInt(prompt("Q7: Enter time in 24-hour format (e.g. 1900):"));

if (time >= 0 && time < 1200) {
    console.log("Q7: Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Q7: Good afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Q7: Good evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Q7: Good night");
} else {
    console.log("Q7: Invalid time");
}
