//Default params
//ES5
function es5Params(name, age) {
  var name = name || "";
  var age = age || 0;
}
es5Params();

//ES6
function es6Params(name = "", age = 0) {
  //...
}
es6Params();

//Template Literals
//ES5
var id = 5;
var url = "http://post.com/" + id;
//var url = `http://post.com/${id}`;
console.log(url);

var fname = "Anca";
var lname = "BALC";
var name = "My name is" + fname + " " + lname;
console.log(name);

//ES6
var url = `http://post.com/ ${id}`;
console.log(url);
var name = `My name is ${fname} ${lname}`;
console.log(name);

// Multi-line Strings
//ES5
var text = "Ana are \n\t" + "mere";
console.log(text);
// var text2 = "Ana are
//           pere";
// console.log(text2);
var html =
  '<div class="article-item"><h2>title</h2><p>sabfdhfsad cdfchsdgf</p><div>autor</div><div>';
var html =
  '<div class="article-item">' +
  "<h2>title</h2>" +
  "<p>sabfdhfsad cdfchsdgf</p>" +
  "<div>autor</div>" +
  "<div>";
document.body.innerHTML = html;

//ES6
var text = `Ana are
          mere`;
console.log(text);
var html = `<div class="article-item">
  <h2>title</h2>
  <p>sabfdhfsad cdfchsdgf</p>
  <div>autor</div>
  <div>`;
document.body.innerHTML = html;

// Block-Scoped Constructs Let and Const
// hoisting
//ES5 - variables hoisting
function varTest() {
  console.log("X=", x);
  //console.log("Y=", y);
  var x = 2;
  if (true) {
    var x = 3; // same x
  }
  console.log("X=", x);
}
// => declaration on the top of the funtion
// function varTest() {
//   var x;
//   console.log("X=", x);
//   console.log("Y=", y);
//   x = 2;
// }
varTest();

//ES5 - hoisting function
hoistedFunction();
function hoistedFunction() {
  console.log("Hoisted function");
}
// => declaration on the top
// function hoistedFunction() {
//   console.log("Hoisted function");
// }
// hoistedFunction();

console.log("exp function", hoistedExpFunction);
var hoistedExpFunction = function() {
  console.log("Hoisted exp function");
};
console.log("exp function", hoistedExpFunction);

function letTest() {
  // console.log("X=", x);
  let x = 2;
  if (true) {
    let x = 3;
    console.log("X=", x); //3 - diffrent var
  }
  console.log("X=", x); //2
}
letTest();

// Display 0, 1, 2, 3 using timeout...
function displayIndexs() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log("Index=", i);
    }, 10);
  }
}
displayIndexs();

function displayIndexsES6() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log("Index=", i);
    }, 10);
  }
}
displayIndexsES6();

// CONST
const PI = 3.14;
//const PI = 3.141;  error duplicate declaration

const OBJ = {
  name: "Anca",
  age: 0
};
//const OBJ = {}; error dupllicate decaration
OBJ.name = "TRALALA";
console.log("OBJ", OBJ);

const es6ExpFunction = function() {
  console.log("ES6 exp function");
};
es6ExpFunction();

// Display button index on click without using data from html, event...
function initButtonsES5() {
  var body = document.body;

  for (var i = 0; i < 5; i++) {
    // new i var for each iteration
    var button = document.createElement("button");
    button.innerHTML = "Button " + i;
    addEvent(i);
    function addEvent(i) {
      // var cuurentIndex = i;
      button.addEventListener(
        "click",
        function(e) {
          alert(i);
        },
        false
      );
    }
    body.appendChild(button);
  }
}
initButtonsES5();

function initButtonsES6() {
  var body = document.body;
  for (let i = 0; i < 5; i++) {
    // new i var for each iteration
    var button = document.createElement("button");
    button.innerHTML = "Button " + i;
    button.addEventListener(
      "click",
      function(e) {
        alert(i);
      },
      false
    );
    body.appendChild(button);
  }
}
initButtonsES6();

// Arrow function
//ES5
var sum = function(x, y) {
  return x + y;
};
console.log("Sum=", sum(2, 3));

// ES6
const sum1 = (x, y) => {
  return x + y;
};
console.log("Sum1=", sum1(2, 3));

const sum2 = (x, y) => x + y;
console.log("Sum2=", sum2(2, 3));

const displayName = name => {
  return name;
};
console.log("Name=", displayName("anca"));

const displayName2 = name => name;
console.log("Name=", displayName("anca"));

// Arrow functions
// ES5
var es5Function = function() {
  console.log("My function");
};
var es5Function2 = function(a, b) {
  return a + b;
};

// ES6 function no params
const es61 = () => {
  console.log("No params arrow function");
};
es61();

const es62 = () => "No params arrow function";
console.log(es62());

// ES6 one param
const es63 = name => name;
// const es64 = (name) => name;
const es65 = name => {
  return name;
};
es63("Anca");
es65("Anca2");

// ES6 more params
const es66 = (x, y) => x + y;
const es67 = (x, y) => {
  console.log("x", x);
  console.log("y", y);
  return x + y;
};
es66(2, 3);
es67(5, 6);

//ES6 return object use ()
const es68 = () => ({
  name: "Anca"
});
console.log(es68());

// THIS SCOPE
//ES5 this scope
var body = document.body;
var button = document.createElement("button");
button.innerHTML = "Button ";
button.addEventListener(
  "click",
  function(e) {
    console.log("THIS", this); // button
  },
  false
);
body.appendChild(button);

//ES6 this scope
let body2 = document.body;
let button2 = document.createElement("button");
button2.innerHTML = "Button ";
button2.addEventListener(
  "click",
  () => {
    console.log("THIS", this); // window
  },
  false
);
body2.appendChild(button2);

// Classes
//ES5 function Animal(options) {this.color=options.color;this.type=options.type;}

const Animal = class {
  constructor(options) {
    this.color = options.color;
    this.type = options.type;
  }

  displayAnimal() {
    console.log("Animal color", this.color, " & type", this.type);
  }

  static existAnimal() {
    console.log("DAAAAAA");
  }
};

const animal = new Animal({ color: "brown", type: "wild" });
console.log("Animal", animal);
animal.displayAnimal();
Animal.existAnimal(); // call static method

class Dog extends Animal {
  constructor(options) {
    super(options); // call parent constructor
    this.specific = options.specific;
  }

  speak() {
    console.log(this.specific);
  }
}

const dog = new Dog({ color: "white", type: "domestic", specific: "Ham" });
console.log("Dog", dog);
dog.speak();
