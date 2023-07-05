function showhide() {
    var article = document.getElementById("article");

    if (article.style.display === "none") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}

var initialArticle = document.createElement("article");
initialArticle.id = "article";
initialArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage";
initialArticle.style.display = "none";

document.body.appendChild(initialArticle);