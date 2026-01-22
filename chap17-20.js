// ==========================
// Assignment #17–20
// Arrays and Loops
// ==========================

// 1. Declare and initialize an empty multidimensional array
var emptyMultiArray = [];
console.log("1. Empty Multidimensional Array:", emptyMultiArray);

// 2. Declare and initialize a multidimensional array (matrix)
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
console.log("2. Matrix:");
for (var i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}

// 3. Print numeric counting from 1 to 10
console.log("3. Counting 1 to 10:");
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Multiplication table (user input)
var tableNumber = +prompt("Enter table number:");
var tableLength = +prompt("Enter table length:");

console.log("4. Table of " + tableNumber + ":");
for (var i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// 5. Print items of array
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("5. Fruits:");
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Generate series
document.write("<h3>6. Series</h3>");

document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br>");

document.write("Reverse counting: ");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br>");

document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");

document.write("Odd: ");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");

document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
document.write("<br><br>");

// 7. Search by user input
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("7. Enter item to search:");
var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === userSearch.toLowerCase()) {
    found = true;
    alert(userSearch + " is found at index " + i);
    break;
  }
}
if (!found) {
  alert(userSearch + " is not found in the list");
}

// 8. Largest number
var numbers = [24, 53, 78, 91, 12];
var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("8. Largest number:", largest);

// 9. Smallest number
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}
console.log("9. Smallest number:", smallest);

// 10. Multiples of 5 (1–100)
console.log("10. Multiples of 5:");
for (var i = 5; i <= 100; i += 5) {
  console.log(i);
}
