// There are two approaches for handling errors when using (jQuery) AJAX:
// 1. using catch in the promise functions chain - see getArticleComments below
// 2. using the second argument of the then function - see deleteArticle below

var rootUrl = "https://jsonplaceholder.typicode.com/";

function getArticleComments(articleId) {
  var url = rootUrl + "posts/" + articleId + "comments"; // intentionally incorrect
  return (
    $
      .get(url)
      // if an error occurs, the catch function will "catch" that error and will use it to display it to the user
      .catch(function(error) {
        console.log(
          "GET Comments request was rejected with status ",
          error.status
        );
      })
  );
}

function deleteArticle(articleId) {
  // DO NOT FORGET TO RETURN THE PROMISE!!!
  // AJAX calls always create (automatically) a promise
  return $
    .ajax({
      url: rootUrl + "posts" + articleId,
      method: "DELETE"
    })
    .then(
      function(response) {
        // = the first argument of then
        // if API call is successful, process the response and then return it / the results of the processing
        // note that here the response is already in JSON format, and is the actual response from the API (unlike with Fetch)
        console.log(response);
        return response;
      },
      function(error) {
        // = the second argument of then
        // if API call is not successful, "process" the error (in our case, log it in the console)
        console.log(
          "DELETE article request was rejected with status ",
          error.status
        );
      }
    );
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
