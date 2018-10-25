var obj1 = {}; // Literal object no props no methods
console.log("Empty obj", obj1);

var obj2 = new Object();
console.log("Empty obj", obj2);

var obj1 = {
  name: "object 1"
}; // Literal obj wit props
console.log("Object 1", obj1);

obj2.name = "object 2"; // set prop value
console.log("Object 2", obj2);
console.log("Object name", obj2.name); // get prop value

var user = {
  name: "John Doe",
  age: 25,
  height: 170,
  weight: 70,
  sayHi: function() {
    console.log("Hi");
  },
  sayHiTo: function(name) {
    console.log("Hi " + name);
  },
  calculateBMI: function() {
    return this.height / this.weight;
  }
};

console.log("User object", user);
console.log("User age", user.age); // get prop age
console.log("User age", user["age"]); // get prop age
console.log("User BMI", user.calculateBMI());

var key = "age";
console.log("Objec value", user[key]); // get value for key
//console.log("Objec value", user.key); // key undefined in user

console.log("Object keys", Object.keys(user));
console.log("Object values", Object.values(user));
console.log("Object entries", Object.entries(user));

var keys = Object.keys(user);
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  console.log("User key", key);
  if (typeof user[key] === "function") {
    console.log("User method", user[key]());
  } else {
    console.log("User prop", user[key]);
  }
}

// define blueprint for user
function User(options) {
  this.name = options.name;
  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.sayHi = function() {
    console.log("Hi");
  };
}

User.prototype.sayHiTo = function() {
  console.log("Hi", this.name);
};

// override  Object parent method
// User.prototype.toString = function() {
//   alert("haha");
// };

var user1 = new User({
  name: "Geo1",
  age: 20,
  height: 170,
  weight: 70
});
console.log(user1);
console.log("User name", user1.name);
user1.sayHiTo();
var user2 = new User({
  name: "Geo2",
  age: 30,
  height: 180,
  weight: 70
});
console.log("User2", user2);
console.log("User prototype", User.prototype);
user2.sayHiTo();

function Post(options) {
  this.userId = options.userId;
  this.id = options.id;
  this.title = options.title;
  this.body = options.body;
}

$.get("https://jsonplaceholder.typicode.com/posts/1").then(function(response) {
  console.log("Post", response);
  var post1 = new Post(response);
  console.log("POST ", post1);
});
