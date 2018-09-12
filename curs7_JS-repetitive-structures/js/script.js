var budget = 100;
while (budget > 0) {
  console.log("Yay!");
  budget = budget - 10;
  console.log("Budget after buying chocolate: " + budget);
}

console.log("No more chocolate for you");

for (var budgetFor = 100; budgetFor > 0; budgetFor = budgetFor - 10) {
  console.log("Yay! ~ For");
  console.log("For ~ Budget after buying chocolate: " + budgetFor);
}

var products = [
  {
    name: "iPhone X",
    price: 5000,
    discount: true
  },
  {
    name: "Samsung",
    price: 4000,
    discount: false
  },
  {
    name: "Alcatel",
    price: 2000,
    discount: false
  }
];
// 1. List all product names
// 2. For products with discount , apply a 100lei discount on the original price
// and display the new price next to the d

// console.log(products[0].name);
// console.log(products[1].name);
// console.log(products[2].name);

// Looks like we need a 'for' here!!
for (var i = 0; i < products.length; i++) {
  var currentProduct = products[i];
  if (currentProduct.discount) {
    currentProduct.price = currentProduct.price - 100;
    console.log(
      "!!!Discount." + currentProduct.name + " " + currentProduct.price
    );
  } else {
    console.log(currentProduct.name + " " + currentProduct.price);
  }
}

// Data for Health Center workshop
var users = [
  {
    firstName: "John",
    lastName: "Doe",
    height: 1.8,
    weight: 90,
    sex: "M"
  },
  {
    firstName: "Marry",
    lastName: "Ane",
    height: 1.6,
    weight: 90,
    sex: "F"
  },
  {
    firstName: "Kevin",
    lastName: "Dale",
    height: 1.7,
    weight: 50,
    sex: "M"
  },
  {
    firstName: "Carren",
    lastName: "Jen",
    height: 1.7,
    weight: 65,
    sex: "F"
  }
];
