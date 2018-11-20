var radioButtons = document.getElementsByName("language");

// read an item from local storage
var savedLanguageLocalStorage = localStorage.getItem("language");

for (var i = 0; i < radioButtons.length; i++) {
  var radioElement = radioButtons[i];

  // preselect the radio button whose value equals the one saved in local storage
  if (radioElement.value === savedLanguageLocalStorage) {
    radioElement.checked = "checked";
  }

  radioElement.addEventListener("click", function(event) {
    // save the value of the radio button in local storage when it's clicked
    // write an item in local storage
    localStorage.setItem("language", event.target.value);
  });
}
