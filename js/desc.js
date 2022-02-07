fotojao = document.getElementById("joao");
fotogab = document.getElementById("gab");
textojao = document.getElementById("textojao");
textogab = document.getElementById("textogab");

textojao.classList.add("sumir");
textogab.classList.add("sumir");

fotogab.addEventListener("click", function(event) {
    event.preventDefault();
    textojao.classList.remove("sumir");
    textogab.classList.add("sumir");
    console.log(textojao.p)
});

fotojao.addEventListener("click", function(event) {
    event.preventDefault();
    textojao.classList.add("sumir");
    textogab.classList.remove("sumir");
});