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

// Content
var h1 = document.querySelector("h1");
h1.innerText = "Comments List New"; // Save as text
h1.innerHTML = "Comments List <em>New</em>"; // Save as HTML
console.log("Get title", h1.innerHTML); // Get h1 content

// Style first comment
var firstComment = document.querySelector("section.comment-item");
firstComment.style.border = "solid 1px green";

// Style all comments
var commentsItems = document.querySelectorAll("section.comment-item");
for (var i = 0; i < commentsItems.length; i++) {
  commentsItems[i].style.border = "solid 1px blue";
}

// Set attribute
var commentsList = document.getElementById("comments-list");
commentsList.setAttribute("id", "comments-list-new");
commentsList.setAttribute("data-title", "Comments TITLE");
console.log("Comments id", commentsList.getAttribute("id"));
console.log("Comments id", commentsList.getAttribute("data-title"));

// commentsList.innerHTML += "<section>...</section>";
// Add new comment
var newComment = document.createElement("section");
// newComment.setAttribute("class", "comment-item");
var classes = newComment.classList;
classes.add("comment-item");
newComment.innerHTML =
  "<h3>New comment</h3><p>New comment body<strong></strong></p>";
commentsList.appendChild(newComment);

// List of comments from db
var data = [
  {
    id: "1",
    title: "Comment 01",
    body: "Comment 01 body",
    author: "AB"
  },
  {
    id: "2",
    title: "Comment 02",
    body: "Comment 03 body",
    author: "CD"
  }
];
console.log("data", data);

for (var i = 0; i < data.length; i++) {
  var comment = data[i];
  addComment(comment);
}

function addComment(comment) {
  var newComment = document.createElement("section");
  // newComment.setAttribute("class", "comment-item");
  var classes = newComment.classList;
  classes.add("comment-item");
  newComment.innerHTML =
    "<h3>" +
    comment.title +
    "</h3><p>" +
    comment.body +
    "<strong>" +
    comment.author +
    "</strong></p>";
  commentsList.appendChild(newComment);
}

var searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function() {
  var searchText = document.querySelector("[name=search]").value;
  console.log("Search = ", searchText);
});

var input = document.querySelector("[name=search]");
input.addEventListener("keyup", function() {
  console.log("Search =", input.value);
  console.log("Search =", this.value);
});

var saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", addCommentHtml);
function addCommentHtml(event) {
  // Prevent native form submit
  event.preventDefault();
  var comment = {};
  comment.title = document.querySelector("[name=title]").value;
  comment.body = document.querySelector("[name=body]").value;
  comment.author = document.querySelector("[name=author]").value;
  addComment(comment);
}
