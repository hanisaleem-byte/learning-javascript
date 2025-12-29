// 1. Age alert
var age = 15; // change to your age
alert("My age is " + age);

// 2. Visit counter
var visitCount = localStorage.getItem("visits");

if (visitCount === null) {
  visitCount = 1;
} else {
  visitCount = Number(visitCount) + 1;
}

localStorage.setItem("visits", visitCount);
document.write("You have visited this site " + visitCount + " times<br><br>");

// 3. Birth year
var birthYear = 2009; // change to your birth year
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br><br>");

// 4. Clothing store order
var visitorName = "ali khan";
var productTitle = "T-shirt";
var quantity = 5;

document.write(
  visitorName + " ordered " + quantity + " " + productTitle +
  "(s) on XYZ Clothing store"
);
