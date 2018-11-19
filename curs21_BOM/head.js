window.onload = function() {
  // need to access this inside onload, otherwise the div is not loaded when we try to access it
  // because head.js is loaded inside the <head> tag in HTML
  const firstDiv = document.getElementById("first");
  firstDiv.style.color = "#FF0000";
};
