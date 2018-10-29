function Article(options = {}) {
  this.id = options.id;
  this.userId = options.userId;
  this.title = options.title;
  this.body = options.body;
}

var articlesRootUrl = "https://jsonplaceholder.typicode.com/posts/";

Article.prototype.getArticleDetails = function() {
  var me = this;
  return $.get(articlesRootUrl + me.id).then(function(response) {
    console.log("Article", response);
    me.id = response.id;
    me.userId = response.userId;
    me.title = response.title;
    me.body = response.body;
  });
};

Article.prototype.saveArticle = function() {
  return $.post({
    url: articlesRootUrl,
    data: {
      title: this.title,
      body: this.body
    }
  });
};

Article.prototype.updateArticle = function() {
  return $.ajax({
    url: articlesRootUrl + this.id,
    method: "PUT",
    data: {
      title: this.title,
      body: this.body
    }
  });
};

Article.prototype.deleteArticle = function() {
  return $.ajax({
    url: articlesRootUrl + this.id,
    method: "DELETE"
  });
};
