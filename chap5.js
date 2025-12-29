// ============================
// Assignment 5 – Math Expressions
// ============================

// 1. Addition of two numbers
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
document.write("<h3>1. Addition</h3>");
document.write("Sum of " + num1 + " and " + num2 + " is: " + sum + "<br><br>");

// 2. Subtraction, Multiplication, Division, Modulus
document.write("<h3>2. Arithmetic Operations</h3>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");

// 3. Variable operations
document.write("<h3>3. Variable Operations</h3>");
var a;
document.write("Value after variable declaration is: " + a + "<br>");

a = 5;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a = a + 7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
document.write("The remainder is: " + remainder + "<br><br>");

// 4. Movie ticket cost
document.write("<h3>4. Movie Tickets</h3>");
var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;
document.write("Total cost to buy 5 tickets is: " + totalCost + " PKR<br><br>");

// 5. Multiplication table
document.write("<h3>5. Multiplication Table of 4</h3>");
var table = 4;
for (var i = 1; i <= 10; i++) {
  document.write(table + " x " + i + " = " + (table * i) + "<br>");
}
document.write("<br>");

// 6. Temperature Converter
document.write("<h3>6. Temperature Converter</h3>");
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fTemp = 70;
var cTemp = (fTemp - 32) * 5/9;
document.write(fTemp + "°F is " + cTemp + "°C<br><br>");

// 7. Shopping cart
document.write("<h3>7. Shopping Cart</h3>");
var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shippingCharges = 100;

var totalShoppingCost = (priceItem1 * qtyItem1) +
                        (priceItem2 * qtyItem2) +
                        shippingCharges;

document.write("Total cost of your order is: " + totalShoppingCost + " PKR<br><br>");

// 8. Percentage calculation
document.write("<h3>8. Percentage</h3>");
var totalMarks = 500;
var obtainedMarks = 410;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br><br>");

// 9. Currency conversion
document.write("<h3>9. Currency in PKR</h3>");
var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Total currency in PKR is: " + totalPKR + "<br><br>");

// 10. Single expression arithmetic
document.write("<h3>10. Arithmetic Sequence</h3>");
var result = ((5 + 5) * 10) / 2;
document.write("Result is: " + result + "<br><br>");

// 11. Age Calculator
document.write("<h3>11. Age Calculator</h3>");
var currentYear = 2025;
var birthYear = 2003;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age2 + " or " + age1 + " years old.<br><br>");

// 12. Geometrizer
document.write("<h3>12. Geometrizer</h3>");
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

// 13. Lifetime Supply Calculator
document.write("<h3>13. Lifetime Supply Calculator</h3>");
var snack = "Chocolate";
var currentAge = 22;
var maxAge = 70;
var perDay = 2;

var totalSnacks = (maxAge - currentAge) * 365 * perDay;
document.write(
  "You will need " + totalSnacks + " " + snack +
  " to last you until the ripe old age of " + maxAge
);
