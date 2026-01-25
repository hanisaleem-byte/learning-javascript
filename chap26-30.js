// -------------------------------------------------------------------------------------------
//                                        MATH METHOD 
// ------------------------------------------------------------------------------------------------

// QUESTION # 1
var Usernum = parseInt(prompt("enter any number"))
console.log(Usernum)
var roundofnum = Math.round(Usernum)
console.log(roundofnum)
var ceilnum = Math.ceil(Usernum)
console.log(ceilnum)
var floornum = Math.floor(Usernum)
console.log(floornum)


// QUESTION # 2
var negNum = parseFloat(prompt("Enter a negative floating point number:"));
console.log(negNum)
var roundnegNum = Math.round(negNum)
console.log(roundnegNum)
var ceilnegNum = Math.ceil(negNum)
console.log(ceilnegNum)
var floornegNum = Math.floor(negNum)
console.log(floornegNum)






// QUESTION # 3
 var num3 = parseFloat(prompt("Enter a number:"));

var absValue = Math.abs(num3);

document.write(`The absolute value of ${num} is ${absValue}`);


// ----------------------DICE GAME ------------------------------------------------------------
// QUESTION # 4
 var random = Math.ceil(Math.random()*6)
 console.log(random)
 document.write(`the number of dice is ${random} <br>`)


//  ------------------------------------------------------------------------------------------------






// QUESTION # 5
// Generate a random number: 0 or 1
var coin = Math.random() < 0.5 ? "Heads" : "Tails";

// Display the result in the browser
document.write("The coin shows: " + coin);








// QUESTION # 6
var num100 = Math.ceil(Math.random()*100)
console.log(num100)





// QUESTION # 7
var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
document.write(`<h1>the weight of the user is ${weight}</h1>`)




// QUESTION # 8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Congratulations! You guessed it right.");
    document.write("🎉 You guessed the secret number: " + secretNumber);
} else {
    alert("Oops! Try again. The secret number was " + secretNumber);
    document.write("The secret number was: " + secretNumber + ". Better luck next time!");
}