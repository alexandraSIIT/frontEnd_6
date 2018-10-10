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

      var editButton = articleClone.querySelector(".article-edit");
      // this sends the event as parameter to updateArticleOnClick function
      editButton.addEventListener("click", updateArticleOnClick);

      getArticleComments(response[i].id);

      // append the clone to the articles container
      articlesContainer.appendChild(articleClone);
    }
  }
});

function updateArticleOnClick(event) {
  // event.target is the clicked button
  // disable the button so we can't click it several times
  event.target.disabled = true;

  var grandpa = event.target.parentNode.parentNode; // the article
  var grandpaId = grandpa.id;
  var articleId = grandpaId.replace("article_", "");

  var inputTitle = document.createElement("input");
  inputTitle.setAttribute("class", "new-title");
  inputTitle.setAttribute("style", "width: 80%"); // the default width is too small
  inputTitle.value = grandpa.querySelector(".article-title").innerText;
  grandpa.appendChild(inputTitle);

  var inputBody = document.createElement("textarea");
  inputBody.setAttribute("class", "new-body");
  inputBody.setAttribute("style", "width: 80%");
  inputBody.value = grandpa.querySelector(".article-body").innerText;
  grandpa.appendChild(inputBody);

  var updateButton = document.createElement("button");
  updateButton.innerText = "Update";
  grandpa.appendChild(updateButton);

  updateButton.addEventListener("click", function() {
    $.ajax({
      url: articlesRootUrl + "posts/" + articleId,
      method: "PATCH",
      data: {
        title: inputTitle.value,
        body: inputBody.value
      },
      success: function(response) {
        console.log("edited", response);

        // populate items with the response from the API
        grandpa.querySelector(".article-title").innerText = response.title;
        grandpa.querySelector(".article-body").innerText = response.body;

        // remove input and textarea created by us
        inputTitle.remove();
        inputBody.remove();
        updateButton.remove();

        // enable back the "Edit" button
        event.target.disabled = false;
      }
    });
  });
}

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

function getArticleComments(articleId) {
  var url = articlesRootUrl + "posts" + articleId + "/comments";

  try {
    $.get(url, function(response, error) {
      console.log("comments", response, error);
    });
  } catch (error) {
    console.log("error", error);
  }
}
