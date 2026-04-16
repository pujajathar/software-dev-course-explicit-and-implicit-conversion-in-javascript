/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false"); 
if (isValid) { 
    console.log("This is valid!"); 
}

let age = "25";
let totalAge = age + 5; // This will result in "255" before conversion. 
console.log("Total Age: " + totalAge);
// debugged code:
let totalAge1 = (Number(age)) + 5; // Used Number() to convert the string "25" to a number before adding 5. Which gives a numerical and valid result.
console.log("Total Age: " + totalAge1);

// Part 2: Write Your Own Examples
// Example of implicit type conversion
let score = "20";
let totalScore = score * 5; // Implicitly converts "20" to a number before multiplication.
console.log("Total Score = " + totalScore);

// Example of explicit type conversion
let price = "30";
let quantity = 5;
let totalPrice = (Number(price)) * quantity; // Explicitly converts the string "30" to a number before multiplication.
console.log("Total Price = " + totalPrice);

// Edge case example with null
let totalValue = null;
console.log("Total value = " + totalValue); // Result will be "Total value = null" because null is a falsy value and does not convert to a number. 