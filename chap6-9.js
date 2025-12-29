// Task 1: Arithmetic Calculation Program
function arithmeticCalculation() {
    var num = 10; // Example number

    var result = num + 5;  // Adding 5 to the number
    result = result - 3;  // Subtracting 3 from the result
    result = result * 2;  // Multiplying the result by 2

    alert("The final result is: " + result);
}

// Task 2: Explanation of the JavaScript Arithmetic Expression
function arithmeticExpression() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    alert("Final result of expression (--a - --b + ++b + b--) is: " + result);

    // Break down of steps:
    alert("Step 1: --a = " + (--a));  // Pre-decrement a
    alert("Step 2: --a - --b = " + (--a - --b));  // Pre-decrement b
    alert("Step 3: --a - --b + ++b = " + (--a - --b + ++b));  // Pre-increment b
    alert("Step 4: --a - --b + ++b + b-- = " + (--a - --b + ++b + b--));  // Post-decrement b
}

// Task 3: Greet User by Name Program
function greetUser() {
    var name = prompt("Please enter your name:");
    alert("Hello, " + name + "! Welcome!");
}

// Task 4: Multiplication Table Program
function multiplicationTable() {
    var number = prompt("Enter a number for the multiplication table (leave blank for 5):");

    // If the user didn't enter a number, use 5 as default
    if (number === "") {
        number = 5;
    } else {
        number = parseInt(number);  // Convert to integer if needed
    }

    var result = "";
    for (var i = 1; i <= 10; i++) {
        result += number + " x " + i + " = " + (number * i) + "\n";
    }
    alert(result);
}

// Task 5: Student Marks Program
function studentMarks() {
    var subject1 = prompt("Enter name of first subject:");
    var subject2 = prompt("Enter name of second subject:");
    var subject3 = prompt("Enter name of third subject:");

    var totalMarks = 100;

    var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
    var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
    var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

    var totalObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    var percentage = (totalObtained / 300) * 100;

    var result = "Result:\n";
    result += "Subject: " + subject1 + " | Total Marks: " + totalMarks + " | Obtained Marks: " + obtainedMarks1 + "\n";
    result += "Subject: " + subject2 + " | Total Marks: " + totalMarks + " | Obtained Marks: " + obtainedMarks2 + "\n";
    result += "Subject: " + subject3 + " | Total Marks: " + totalMarks + " | Obtained Marks: " + obtainedMarks3 + "\n";
    result += "Total Obtained Marks: " + totalObtained + "\n";
    result += "Percentage: " + percentage + "%";

    alert(result);
}
