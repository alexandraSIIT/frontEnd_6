// statement function
function myFirstFunction() {
  console.log("My first function");
}

// call function
myFirstFunction();

function myFirstFunctionReturn() {
  return "My first function retrun";
  // return exit from function
  console.log("My first function after retrun");
}
var result = myFirstFunctionReturn();
console.log(result);

// Expression function
var expFunction = function() {
  console.log("My first exp function");
};
expFunction();

// IIFE self invoking function
(function() {
  console.log("My IILE function");
})();

// Send function as params to another function
function callbackFunction() {
  console.log("My callback function");
}

function excCallbackFunction(fName) {
  // callbackFunction();
  console.log(fName);
  fName();
}
excCallbackFunction(callbackFunction);
excCallbackFunction(myFirstFunction);

// Paly with stars
function displayStars() {
  var i = 1;
  var star = "*";
  while (i <= 5) {
    console.log(star);
    star += "*";
    i++;
  }
}

displayStars();
displayStars();
displayStars();

// with params, nr=5 - default value
function displayStars1(nr = 5, char = "*") {
  var i = 1;
  var star = char;
  while (i <= nr) {
    console.log(star);
    star += char;
    i++;
  }
}

displayStars1(5);
displayStars1(3);
displayStars1(7, "-");
displayStars1();
displayStars1();

//SCOPE
// a = 1; GLOBAL SCOPE
var b = 2; // Global Scope
window.c = 3; // Global scope

function displayVariables() {
  var d = 4; // local scope inside function
  // e = 5; // global scope
  console.log("global variable", b);
}

displayVariables();

var global = "global";
function displayGlobal() {
  var global = "local";
  console.log("Global", global);
}
displayGlobal();
console.log("Global", global);

var x = 1;
function firstF() {
  var y = 2;
  function secondF() {
    var z = 3;
    console.log("X", x);
    console.log("Y", y);
    console.log("Z", z);
  }
  secondF();

  console.log("X", x);
  console.log("Y", y);
  // console.log("Z", z); access undefind variable z local scope of seconfF
}
firstF();

//THIS
console.log("THIS", this); // Window
console.log("THIS", window); // Window
// function displayThis() {
//   console.log("THIS", this); // Window
// }
// displayThis();

//Closure
var increase = (function() {
  var counter = 0;
  return function() {
    counter++;
    console.log("Counter", counter);
  };
})();

increase();
increase();
