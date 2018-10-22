// When using Fetch API, only the "server network errors" are caught using .catch, i.e.,
// when the server cannot be reached: connection refused or name not resolved.
// To fix that, use the response.ok property - see below in getArticleComments function

var rootUrl = "https://jsonplaceholder.typicode.com/";

function getArticleComments(articleId) {
  var url = rootUrl + "posts/" + articleId + "comments"; // intentionally incorrect
  // return $.get(url);

  return (
    fetch(url, { method: "GET" })
      .then(function(response) {
        console.log("response", response);
        // if it's an error (see URL below), response looks like this:
        // body: (...) //ReadableStream
        // bodyUsed: false
        // headers: Headers { }
        // ok: false
        // redirected: false
        // status: 404
        // statusText: ""
        // type: "cors"
        // url: "https://jsonplaceholder.typicode.com/posts/1comments"

        // if there is no error (again, see URL below), response looks like this:
        // body: (...) //ReadableStream
        // bodyUsed: true
        // headers: Headers { }
        // ok: true
        // redirected: false
        // status: 200
        // statusText: ""
        // type: "cors"
        // url: "https://jsonplaceholder.typicode.com/posts/1/comments"

        if (response.ok) {
          // deserialize response (turn string into json)
          return response.json();
        } else {
          throw Error(
            "GET Comments request was rejected with status " + response.status
          );
        }
      })
      // The catch below will not be triggered by itself, unless the server cannot be reached: connection refused or name not resolved.
      // This only happens with "Fetch API", not also with jQuery ajax (or other similar libraries).
      // However, it will be triggered if the response.ok is verified and the error is thrown (as done above)
      .catch(function(error) {
        console.log("ERROR:", error);
      })
  );

  // The code below was just a test to prove that what we return here is the input to the next function in the chain
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
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(
          "DELETE article request was rejected with status " + response.status
        );
      }
    })
    .catch(function(error) {
      console.log("ERROR:", error);
    });
}

function updateArticle(articleId, inputTitle, inputBody) {
  return fetch(rootUrl + "posts/" + articleId, {
    method: "PUT",
    body: JSON.stringify({
      title: inputTitle.value,
      body: inputBody.value
    })
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(
          "UPDATE article request was rejected with status " + response.status
        );
      }
    })
    .catch(function(error) {
      console.log("ERROR:", error);
    });
}

function getArticles() {
  return fetch(rootUrl + "posts")
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(
          "GET articles request was rejected with status " + response.status
        );
      }
    })
    .catch(function(error) {
      console.log("ERROR:", error);
    });
}
