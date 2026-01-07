// ==============================
// 1. Empty array (literal)
var studentsLiteral = [];

// 2. Empty array (object)
var studentsObject = new Array();

// 3. String array
var stringArray = ["Apple", "Banana", "Mango"];

// 4. Numbers array
var numberArray = [10, 20, 30, 40];

// 5. Boolean array
var booleanArray = [true, false, true];

// 6. Mixed array
var mixedArray = ["Ali", 22, true, null];

// ==============================
// 7. Education Qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Education Qualifications in Pakistan</h2>");
for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// ==============================
// 8. Students scores & percentages
var studentNames = ["Ali", "Ahmed", "Sara"];
var studentScores = [420, 380, 450];
var totalMarks = 500;

document.write("<h2>Student Results</h2>");
for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  document.write(
    "Score of " + studentNames[i] + " is " +
    studentScores[i] + ". Percentage: " +
    percentage.toFixed(2) + "%<br>"
  );
}

// ==============================
// 9. Colors array operations
var colors = ["Red", "Green", "Blue"];
document.write("<h2>Colors Array</h2>" + colors + "<br>");

// a. Add to beginning
var colorStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorStart);
document.write("After adding at beginning: " + colors + "<br>");

// b. Add to end
var colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);
document.write("After adding at end: " + colors + "<br>");

// c. Add two colors at beginning
colors.unshift("Purple", "Orange");
document.write("After adding two colors at beginning: " + colors + "<br>");

// d. Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br>");

// e. Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br>");

// f. Add color at specific index
var addIndex = +prompt("Enter index to add color:");
var addColor = prompt("Enter color name:");
colors.splice(addIndex, 0, addColor);
document.write("After adding color at index: " + colors + "<br>");

// g. Delete colors from index
var delIndex = +prompt("Enter index to delete color(s):");
var delCount = +prompt("How many colors to delete?");
colors.splice(delIndex, delCount);
document.write("After deleting colors: " + colors + "<br>");

// ==============================
// 10. Sort scores in ascending order
var scores = [320, 230, 480, 120];
scores.sort(function (a, b) {
  return a - b;
});
document.write("<h2>Sorted Scores</h2>" + scores + "<br>");

// ==============================
// 11. Cities array copy
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);

document.write("<h2>Cities</h2>" + cities + "<br>");
document.write("<h2>Selected Cities</h2>" + selectedCities + "<br>");

// ==============================
// 12. Join array into string
var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join("");
document.write("<h2>Joined String</h2>" + result + "<br>");

// ==============================
// 13. FIFO (Queue)
var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");

document.write("<h2>FIFO</h2>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");

// ==============================
// 14. LIFO (Stack)
var lifo = [];
lifo.push("Keyboard");
lifo.push("Mouse");
lifo.push("Printer");

document.write("<h2>LIFO</h2>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");

// ==============================
// 15. Phone manufacturers dropdown
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h2>Phone Manufacturers</h2>");
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");
