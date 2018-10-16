var articlesRootUrl = "https://jsonplaceholder.typicode.com/";

getArticles().then(function(response) {
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
      deleteArticleOnClick(event.target);
    });

    var editButton = articleClone.querySelector(".article-edit");
    // this sends the event as parameter to updateArticleOnClick function
    editButton.addEventListener("click", updateArticleOnClick);

    // same as below, but shorter
    getArticleComments(response[i].id).then(displayComments);

    // getArticleComments(response[i].id).then(function(response) {
    //   displayComments(response);
    // });

    // append the clone to the articles container
    articlesContainer.appendChild(articleClone);
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
    updateArticle(articleId, inputTitle, inputBody).then(function(response) {
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
    });
  });
}

function deleteArticleOnClick(clickedButton) {
  console.log("clicked button", clickedButton);
  var grandpa = clickedButton.parentNode.parentNode; // the article
  var grandpaId = grandpa.id; // article_3

  var articleId = grandpaId.replace("article_", ""); // 3

  // the old way, with callbacks
  // deleteArticle(articleId, removeArticleFromDOM, grandpa);

  // the new way, with promises
  deleteArticle(articleId).then(function(response) {
    removeArticleFromDOM(response, grandpa);
  });
}

function removeArticleFromDOM(response, grandpa) {
  console.log("deleted", response);
  grandpa.remove();
}

function displayComments(comments) {
  // this function takes care of displaying the comments in DOM / console
  console.log("comments", comments);
}
