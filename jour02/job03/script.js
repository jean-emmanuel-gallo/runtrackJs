document.addEventListener("DOMContentLoaded", function () {
    var compteurElement = document.getElementById("compteur");
    var compteur = 0;

    function addone() {
        compteur++;
        compteurElement.textContent = compteur.toString();
    }

    var buttonElement = document.getElementById("button");
    buttonElement.addEventListener("click", addone);
})