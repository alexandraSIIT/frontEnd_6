var articlesRootUrl = "https://jsonplaceholder.typicode.com/";

$.ajax({
  url: articlesRootUrl + "posts",
  method: "GET",
  success: function(response) {
    console.log(response); // these are the articles

    var template = document.getElementById("template");
    var articlesContainer = document.getElementById("articles");

    for (var i = 0; i < 10; i++) {
      // clone the template
      var articleClone = template.cloneNode(true);

      // set a unique id for each article
      articleClone.id = "article_" + response[i].id;

      // populate the cloned template
      var articleIdElement = articleClone.querySelector(".article-id");
      articleIdElement.innerHTML = response[i].id;

      var articleTitleElement = articleClone.querySelector(".article-title");
      articleTitleElement.innerHTML = response[i].title;

      var articleBodyElement = articleClone.querySelector(".article-body");
      articleBodyElement.innerHTML = response[i].body;

      var articleAuthorElement = articleClone.querySelector(".article-author");
      articleAuthorElement.innerHTML = "Author:" + response[i].userId;

      var deleteButton = articleClone.querySelector(".article-delete");
      deleteButton.addEventListener("click", function(event) {
        console.log("event", event);
        // event.target = the button that we clicked
        deleteArticle(event.target);
      });

      // append the clone to the articles container
      articlesContainer.appendChild(articleClone);
    }
  }
});

function deleteArticle(clickedButton) {
  console.log("clicked button", clickedButton);
  var grandpa = clickedButton.parentNode.parentNode; // the article
  var grandpaId = grandpa.id; // article_3

  var articleId = grandpaId.replace("article_", ""); // 3

  $.ajax({
    url: articlesRootUrl + "posts/" + articleId,
    method: "DELETE",
    success: function(response) {
      console.log("deleted", response);
      grandpa.remove();
    }
  });
}
