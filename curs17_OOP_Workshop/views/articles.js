var articles = new Articles();

articles.getAll().then(function() {
  console.log("List", articles.items);

  displayArticles();
});

function displayArticles() {}
