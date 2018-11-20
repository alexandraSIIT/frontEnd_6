// console.log(document.cookie);

function getCookiesAsObject() {
  // save the cookie string in a variable
  var cookieString = document.cookie;

  // transform from string to array of key=value strings
  var cookiesArray = cookieString.split("; ");
  // console.log(cookiesArray); // ["_ga=GA1.2.363480909.1542644257", ..]

  var result = {};

  for (var i = 0; i < cookiesArray.length; i++) {
    var cookieElement = cookiesArray[i];
    // console.log(cookieElement); // "_ga=GA1.2.363480909.1542644257"

    var cookieDataArray = cookieElement.split("=");
    // console.log(cookieDataArray); // ["_ga", "GA1.2.363480909.1542644257"]

    var cookieName = cookieDataArray[0]; // "_ga"
    var cookieValue = cookieDataArray[1]; // "GA1.2.363480909.1542644257"

    result[cookieName] = cookieValue;
  }

  // need to return the result to be able to use it outside the function
  return result;
}

var cookiesObject = getCookiesAsObject();
// console.log("cookies object", cookiesObject);

// write a cookie
// document.cookie = "language=ro-RO";
// cookiesObject = getCookiesAsObject();
// console.log("cookies object after addition", cookiesObject);

const radios = document.getElementsByName("language");
console.log("radio buttons", radios);

var savedLanguageCookie = cookiesObject.language;
console.log("saved language cookie", savedLanguageCookie);

for (var i = 0; i < radios.length; i++) {
  var radioElement = radios[i];
  // if the value of the radio button equals the saved language cookie, preselect it
  if (radioElement.value === savedLanguageCookie) {
    radioElement.checked = "checked";
  }

  radioElement.addEventListener("click", function(event) {
    // event.target = the radio button that we clicked
    document.cookie = "language=" + event.target.value;
  });
}
