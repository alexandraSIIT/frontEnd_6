var rootUrl = "https://jsonplaceholder.typicode.com/";

function getArticleComments(articleId) {
  var url = rootUrl + "posts/" + articleId + "/comments";
  return $.get(url);
}

function deleteArticle(articleId) {
  // DO NOT FORGET TO RETURN THE PROMISE!!!
  // AJAX calls always create (automatically) a promise
  return $.ajax({
    url: rootUrl + "posts/" + articleId,
    method: "DELETE"
  });
}

function updateArticle(articleId, inputTitle, inputBody) {
  return $.ajax({
    url: rootUrl + "posts/" + articleId,
    method: "PATCH",
    data: {
      title: inputTitle.value,
      body: inputBody.value
    }
  });
}

function getArticles() {
  return $.ajax({
    url: rootUrl + "posts",
    method: "GET"
  });
}
