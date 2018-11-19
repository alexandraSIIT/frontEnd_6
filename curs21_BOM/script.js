console.log("document", document);
console.log("frames", window.frames);
console.log("title", window.parent.document.title);

console.log("screen", window.screen);
console.log("screenX", window.screenX);
console.log("screenY", window.screenY);
console.log("fullScreen", window.fullScreen);
console.log("orientation", window.orientation);

console.log("innerHeight", window.innerHeight);
console.log("innerWidth", window.innerWidth);
console.log("outerHeight", window.outerHeight);
console.log("outerWidth", window.outerWidth);

console.log("scrollbars", window.scrollbars);
console.log("scrollX", window.scrollX);
console.log("pageXOffset", window.pageXOffset);
console.log("scrollY", window.scrollY);
console.log("pageYOffset", window.pageYOffset);

console.log(1);
console.log(2);

setTimeout(() => {
  console.log(3);
}, 0);

for (let i = 0; i < 100; i++) {
  console.log(i);
}

let interval = setInterval(() => {
  console.log("Hello from setInterval");
}, 2000); // 2 seconds

setTimeout(() => {
  // stop the interval function from executing after 15 seconds
  // otherwise, it would execute forever
  clearInterval(interval);
}, 15000); // 15 seconds

console.log(history.length);
// history.back();
// history.forward();

// history.go(-1);
// history.go(1);

// const stateObj = {};
// window.history.pushState(stateObj, "next page", "next.html");

window.onpopstate = function(event) {
  console.log(
    "location: ",
    document.location,
    "state: ",
    JSON.stringify(event.state)
  );
};
