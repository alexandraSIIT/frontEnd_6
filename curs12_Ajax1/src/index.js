// console.log("Hello there");

// setTimeout(function() {
//   console.log("Hello from set timeout");
// }, 3000);

// console.log("Hello again");

// var x = 1;

// setTimeout(function() {
//   x = 100;
// }, 2000);

// console.log(x);

// setTimeout(function() {
//   console.log(x);
// }, 3000);

// var x = setTimeout(function() {
//   return 100;
// }, 1000);

// console.log(x);

var weatherApiURL =
  "https://api.wunderground.com/api/86c20099e2a92264/conditions/q/RO/Cluj-Napoca.json";

var button = document.getElementById("getWeatherButton");
button.addEventListener("click", function() {
  $.ajax({
    url: weatherApiURL,
    method: "GET",
    success: function(apiResponse) {
      console.log(apiResponse.current_observation.feelslike_c);

      var p = document.getElementById("temperature");
      p.innerText =
        "The temperature in Cluj-Napoca is " +
        apiResponse.current_observation.feelslike_c +
        "C";
    }
  });
});
