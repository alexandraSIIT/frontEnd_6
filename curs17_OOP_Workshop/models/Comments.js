function Comments() {
  this.items = [];
}

var articlesRootUrl = "https://jsonplaceholder.typicode.com/posts/";
Comments.prototype.getAll = function(articleId) {
  var me = this;
  return $
    .get(articlesRootUrl + articleId + "/comments")
    .then(function(response) {
      for (var i = 0; i < response.length; i++) {
        var comment = new Comment(response[i]);
        me.items.push(comment);
      }
      return me.items;
    });
};
