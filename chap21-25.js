// ==========================
// Assignment #21–25
// String Methods
// ==========================

// 1. First & last name merge
var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// 2. Favorite mobile model length
var mobile = prompt("Enter your favorite mobile phone model:");
document.write("2. Length of your input: " + mobile.length + "<br><br>");

// 3. Index of 'n' in "Pakistani"
var word = "Pakistani";
document.write("3. Index of 'n' in Pakistani: " + word.indexOf("n") + "<br><br>");

// 4. Last index of 'l' in "Hello World"
var hello = "Hello World";
document.write("4. Last index of 'l' in Hello World: " + hello.lastIndexOf("l") + "<br><br>");

// 5. Character at 3rd index in "Pakistani"
document.write("5. Character at 3rd index in Pakistani: " + word.charAt(3) + "<br><br>");

// 6. Repeat Q1 using concat()
var fName = prompt("Enter first name again:");
var lName = prompt("Enter last name again:");
var full = fName.concat(" ", lName);
alert("Hello " + full);

// 7. Replace "Hyder" with "Islam"
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("7. After replacement: " + newCity + "<br><br>");

// 8. Replace all "and" with "&"
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("8. " + newMessage + "<br><br>");

// 9. Convert string to number
var strNum = "472";
var num = Number(strNum);
document.write("9. Value: " + num + " | Type: " + typeof num + "<br><br>");

// 10. Convert to capital letters
var userInput = prompt("Enter text to convert into uppercase:");
document.write("10. " + userInput.toUpperCase() + "<br><br>");

// 11. Convert to title case
var titleInput = prompt("Enter text for title case:");
var words = titleInput.toLowerCase().split(" ");
var titleCase = "";

for (var i = 0; i < words.length; i++) {
  titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}
document.write("11. " + titleCase + "<br><br>");

// 12. Convert number to string and remove dot
var num2 = 35.36;
var str2 = num2.toString().replace(".", "");
document.write("12. " + str2 + "<br><br>");

// 13. Username validation
var username = prompt("Enter username:");
var isValid = true;

for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    isValid = false;
    break;
  }
}

if (!isValid) {
  alert("Please enter a valid username");
} else {
  alert("Username accepted");
}

// 14. Case-insensitive search
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Search bakery item:");
var foundItem = false;

for (var i = 0; i < items.length; i++) {
  if (items[i].toLowerCase() === searchItem.toLowerCase()) {
    foundItem = true;
    alert(searchItem + " is available at index " + i);
    break;
  }
}
if (!foundItem) {
  alert(searchItem + " is not available");
}

// 15. Password validation
var password = prompt("Enter password:");
var hasAlpha = false;
var hasNum = false;
var validStart = isNaN(password.charAt(0));
var validLength = password.length >= 6;

for (var i = 0; i < password.length; i++) {
  var c = password.charCodeAt(i);
  if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) hasAlpha = true;
  if (c >= 48 && c <= 57) hasNum = true;
}

if (hasAlpha && hasNum && validStart && validLength) {
  alert("Password is valid");
} else {
  alert("Invalid password. Please enter a valid password.");
}

// 16. Convert string to array
var university = "University of Karachi";
var uniArray = university.split("");
document.write("16.<br>");
for (var i = 0; i < uniArray.length; i++) {
  document.write(uniArray[i] + "<br>");
}
document.write("<br>");

// 17. Last character of user input
var userStr = prompt("Enter any text:");
document.write("17. Last character: " + userStr.charAt(userStr.length - 1) + "<br><br>");

// 18. Count occurrences of "the"
var sentence = "The quick brown fox jumps over the lazy dog";
var count = 0;
var lowerSentence = sentence.toLowerCase().split(" ");

for (var i = 0; i < lowerSentence.length; i++) {
  if (lowerSentence[i] === "the") {
    count++;
  }
}
document.write("18. Occurrences of 'the': " + count);
