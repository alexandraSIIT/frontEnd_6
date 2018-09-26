console.log("Select by id", $("#comments-list"));
console.log("Select by id html element", $("#comments-list")[0]);
console.log("Select by class", $(".comment-item"));
console.log("Select by tag", $("section"));
console.log("Select by selector", $("section.comment-item strong"));

// Get set content
var h1 = $("h1");
h1.text("Comments List New");
h1.html("Comments List <em>New</em>");
console.log("H1 content", h1.html());
// empty html content h1.html('');

// Get set attributes
var commentList = $("#comments-list");
commentList.attr("id", "comments-list-new");
console.log("Comments List id", commentList.attr("id"));
commentList.attr({
  id: "comments-list-new2",
  "data-title": "Comments list title"
});
console.log("Comments List id", commentList.attr("id"));
console.log("Comments List id", commentList.attr("data-title"));

var commentsItems = $(".comment-item");
commentsItems.attr("title", "Comment title");

// Set get style
commentsItems.css("border", "solid 1px red");
commentsItems.css({
  border: "solid 2px green",
  "background-color": "#ccc"
});
console.log("Get comment border", commentsItems.css("border"));

// Add new comment
var commentHtml =
  '<section class="comment-item">' +
  "<h3>Comment 3</h3>" +
  "<p>Comment 3 content <strong>Author</strong></p>" +
  "</section";

commentList.append(commentHtml);
commentList.prepend(commentHtml);

// Remove frist comment
console.log("commentsItems.first()", commentsItems.first()[0]);
commentsItems.first().remove();

var searchBtn = $("#search-btn");
searchBtn.on("click", searchComments);

function searchComments() {
  var searchValue = $("[name=search]").val();
  // $("[name=search]").val("abc"); // set value from js
  console.log("Search = ", searchValue);
}

var saveBtn = $("#save-btn");
saveBtn.on("click", addComment);
function addComment(event) {
  event.preventDefault();
  var comment = {};
  comment.title = $("[name=title]").val();
  comment.body = $("[name=body]").val();
  comment.author = $("[name=author]").val();

  if (comment.title && comment.body.length > 5) {
    addCommentHTML(comment);
  }
}

function addCommentHTML(comment) {
  var commentHtml =
    '<section class="commet-item">' +
    "<h3>" +
    comment.title +
    "</h3>" +
    "<p>" +
    comment.body +
    "<strong>" +
    comment.author +
    "</strong></p>" +
    "</section>";
  commentList.append(commentHtml);
}
