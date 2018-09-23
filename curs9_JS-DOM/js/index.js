console.log("DOM", document);

// Select by id
console.log("Comments List", document.getElementById("comments-list"));

// Select by class
console.log("Comment Items", document.getElementsByClassName("comment-item"));
// Select by class first item
console.log(
  "Comment Item first",
  document.getElementsByClassName("comment-item")[0]
);

// Select by tag
console.log("Comments List", document.getElementsByTagName("section"));

// Selects by css selector
console.log(
  "First comment with class",
  document.querySelector("section.comment-item")
);

// Selects by css selector
console.log(
  "All comments by class",
  document.querySelectorAll("section.comment-item")
);
