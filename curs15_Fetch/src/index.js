var articlesRootUrl = "https://jsonplaceholder.typicode.com/";

// "response" is a variable that has the value of the API response;
// we named it like this to make it easier to remember what it represents,
// but it can have any name
getArticles().then(function(response) {
  console.log(response); // these is an array with articles as array elements

  var template = document.getElementById("template");
  var articlesContainer = document.getElementById("articles");

  // traverse the array (parcurgerea sirului)
  for (var i = 0; i < 10; i++) {
    // clone the template; copy template's children as well (deep parameter = true)
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

    // callbacks from event listeners receive as parameter the event that just happened
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

  // remove the template from DOM
  template.remove();
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

      // because PUT does not work as expected (it only returns the article ID, not the entire object)
      // we set the DOM elements with the input title and body that we sent
      grandpa.querySelector(".article-title").innerText = inputTitle.value;
      grandpa.querySelector(".article-body").innerText = inputBody.value;

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
  // the clicked button has a div as parent, and that has the article as parent
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
