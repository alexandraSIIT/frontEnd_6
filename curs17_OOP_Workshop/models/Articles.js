function Articles() {
  this.items = [];
}

var articlesRootUrl = "https://jsonplaceholder.typicode.com/posts/";
Articles.prototype.getAll = function() {
  var me = this;
  return $.get(articlesRootUrl).then(function(response) {
    // console.log("Articles", response);
    for (var i = 1; i < response.length; i++) {
      var article = new Article(response[i]);
      me.items.push(article);
    }
  });
};
