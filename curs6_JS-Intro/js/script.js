// declaring a variable and assigning a value to it
/** More comments example
 second line of this useless comment **/
var x = 2;
// prints the value for variable x in browser console (check Console tab on Chrome Dev tools for it)
console.log(x);
// prints a string in browser console
console.log("Hello from my first JS Script");

var y = 10;
// save expresion result in variables
var mult = x * y;
var isGreaterThan100 = mult > 100;
console.log(mult);
console.log(isGreaterThan100);

// string concatenation
var message = "Number: " + mult + " is not greater than 100";
console.log(message);

//defining an array
// empty array
var arr = [];
var fruits = ["Orange", "Banana", "Apple", "Kiwi", "Papaya"];
// get the number of elements in fruits array
var noOfFruits = fruits.length;
console.log(fruits);
console.log("Number of fruits: " + noOfFruits);
// getting data from fruits array
var secondFruit = fruits[1];
console.log("Second fruit is: " + secondFruit);
// getting the last element in array
var lastFruit = fruits[fruits.length - 1];
console.log("The last fruit in array is: " + lastFruit);
// adding a new element in array
fruits.push("Mango");
console.log(fruits);
// sorting elements in array
fruits.sort();
console.log(fruits);
// Defining Objects in JS
//empty object
var obj = {};
var dog = {
  name: "Arya",
  age: 3,
  barks: true,
  "owner.name": "Alexandra"
};
console.log(dog);
// Extract object property
var dogName = dog.name;
console.log(dogName);
var dogAge = dog["age"];
console.log(dogAge);
var owner = dog["owner.name"];
console.log(owner);

// If statements
if (isGreaterThan100) {
  console.log("Number is greater than 100, really!");
} else {
  console.log("Number is not greater than 100. Promise!");
}

var temperature = 29;
if (temperature < 0) {
  console.log("Brr!Is frizing!");
} else if (temperature >= 0 && temperature < 15) {
  console.log("It's pretty cold outside");
} else if (temperature >= 15 && temperature <= 28) {
  console.log("Feels good to be outside");
} else {
  console.log("I'm melting here...");
}
