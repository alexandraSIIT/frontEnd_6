var articles = new Articles();

getArticles();
function getArticles() {
  articles.getAll().then(function() {
    console.log("List", articles.items);
    displayArticles(articles.items);
  });
}
function displayArticles(response) {
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
      // the clicked button has a div as parent, and that has the article as parent
      var grandpa = event.target.parentNode.parentNode; // the article
      var grandpaId = grandpa.id; // article_3
      var articleId = grandpaId.replace("article_", ""); // 3
      // call delete article request from model
      var article = new Article({ id: articleId });
      article.deleteArticle().then(function() {
        removeArticleFromDOM(response, grandpa);
      });
    });

    var editButton = articleClone.querySelector(".article-edit");
    // this sends the event as parameter to updateArticleOnClick function
    editButton.addEventListener("click", updateArticleOnClick);

    // append the clone to the articles container
    articlesContainer.appendChild(articleClone);
  }

  // remove the template from DOM
  template.remove();
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
    var article = new Article({
      id: articleId,
      title: inputTitle.value,
      body: inputBody.value
    });

    article.updateArticle().then(function(response) {
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

function removeArticleFromDOM(response, grandpa) {
  console.log("deleted", response);
  grandpa.remove();
}

addArticle();
function addArticle() {
  var btnSave = document.getElementById("btn-save");
  btnSave.addEventListener("click", function(event) {
    event.preventDefault(); // prevent form submit, prevent page refresh
    var title = document.querySelector("[name=title]").value;
    var body = document.querySelector("[name=body]").value;
    if (title !== "" && body !== "") {
      var article = new Article({
        title: title,
        body: body
      });
      article.saveArticle().then(function() {
        getArticles();
      });
    }
  });
}
