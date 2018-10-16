getArticles().then(displayArticles);

function displayArticles(articles) {
  console.log(articles); // these are the articles

  var template = document.getElementById("template");
  var articlesContainer = document.getElementById("articles");

  for (var i = 0; i < 10; i++) {
    displayArticle(articles[i], template, articlesContainer);
  }
}

function displayArticle(article, template, articlesContainer) {
  // clone the template
  var articleClone = template.cloneNode(true);

  // set a unique id for each article
  articleClone.id = "article_" + article.id;

  // populate the cloned template
  var articleIdElement = articleClone.querySelector(".article-id");
  articleIdElement.innerHTML = article.id;

  var articleTitleElement = articleClone.querySelector(".article-title");
  articleTitleElement.innerHTML = article.title;

  var articleBodyElement = articleClone.querySelector(".article-body");
  articleBodyElement.innerHTML = article.body;

  var articleAuthorElement = articleClone.querySelector(".article-author");
  articleAuthorElement.innerHTML = "Author:" + article.userId;

  var deleteButton = articleClone.querySelector(".article-delete");
  deleteButton.addEventListener("click", deleteArticleOnClick);

  var editButton = articleClone.querySelector(".article-edit");
  // this sends the event as parameter to updateArticleOnClick function
  editButton.addEventListener("click", updateArticleOnClick);

  getArticleComments(article.id).then(displayArticleComments);

  // append the clone to the articles container
  articlesContainer.appendChild(articleClone);
}

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
    patchArticle(articleId, inputTitle, inputBody).then(function(article) {
      updateArticleInDOM(article, grandpa, inputTitle, inputBody, updateButton);
    });
  });
}

function updateArticleInDOM(
  article,
  domElement,
  inputTitle,
  inputBody,
  updateButton
) {
  console.log("edited", article);

  // populate items with the response from the API
  domElement.querySelector(".article-title").innerText = article.title;
  domElement.querySelector(".article-body").innerText = article.body;

  // remove input and textarea created by us
  inputTitle.remove();
  inputBody.remove();
  updateButton.remove();

  // enable back the "Edit" button
  domElement.querySelector(".article-edit").disabled = false;
}

function deleteArticleOnClick(event) {
  console.log("clicked button", event.target);
  var grandpa = event.target.parentNode.parentNode; // the article
  var grandpaId = grandpa.id; // article_3

  var articleId = grandpaId.replace("article_", ""); // 3

  deleteArticle(articleId).then(function(article) {
    removeArticleFromDOM(article, grandpa);
  });
}

function removeArticleFromDOM(article, domElement) {
  console.log("deleted", article);
  domElement.remove();
}

function displayArticleComments(comments) {
  console.log("comments", comments);
}
