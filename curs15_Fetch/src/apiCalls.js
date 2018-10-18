var rootUrl = "https://jsonplaceholder.typicode.com/";

function getArticleComments(articleId) {
  var url = rootUrl + "posts/" + articleId + "/comments";
  // return $.get(url);

  return fetch(url, { method: "GET" })
    .then(function(response) {
      // deserialize response (turn string into json)
      return response.json();
    })
    .catch(function(error) {
      console.log("ERROR!!!", error);
    });
  // .then(function(response) {
  //   console.log("api response", response);
  //   return "facem pauza";
  // });
}

function deleteArticle(articleId) {
  // DO NOT FORGET TO RETURN THE PROMISE!!!
  // AJAX calls always create (automatically) a promise
  return fetch(rootUrl + "posts" + articleId, {
    method: "DELETE"
  })
    .then(
      function(response) {
        return response.json();
      },
      function(error) {
        console.log("ERROR in then!!!", error);
      }
    )
    .catch(function(error) {
      console.log("ERROR!!!", error);
    });
}

function updateArticle(articleId, inputTitle, inputBody) {
  return fetch(rootUrl + "posts/" + articleId, {
    method: "PUT",
    body: JSON.stringify({
      title: inputTitle.value,
      body: inputBody.value
    })
  });
}

function getArticles() {
  return fetch(rootUrl + "posts").then(function(response) {
    return response.json();
  });
}
