var article = new Article();

article.id = getUrlParameter("id");

article.getArticleDetails().then(function() {
  console.log("Article Details", article);
  console.log("Article Title", article.title);

  displayArticle();
});
// TEMA
function displayArticle() {}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
