dktheme = document.getElementById("dktheme");
estado = 0;
diferenciais = document.getElementsByClassName("diferencial-single");
titulodif = document.getElementsByClassName("titulodif");
icons = document.querySelectorAll("i")
emails = document.getElementsByClassName("email");

dktheme.addEventListener("click", function(event) {
    event.preventDefault();
    if (estado == 0) {
        background = "rgb(30,30,30)";
        color = "rgb(187,143,243)";
        toggleDarkTheme(background, color);
        estado = 1;
    } else if (estado == 1) {
        background = "white";
        color = "#490a5c";
        toggleDarkTheme(background, color);
        estado = 0;
    }
});

function toggleDarkTheme(background, color) {
    //header//
    document.querySelector("header").style.backgroundColor = background;
    document.querySelector("h2").style.color = color;
    as = document.querySelectorAll("a");
    for (var i = 0; i < 3; i++) as[i].style.color = color;

    //quem somos//
    document.getElementById("quem__somos").style.backgroundColor = background;
    document.getElementById("h2quemsomos").style.color = color;
    document.getElementById("h4clique").style.color = color;

    //habilidades//
    for (var i = 0; i < diferenciais.length; i++) { // muda os diferencias-single
        diferenciais[i].style.backgroundColor = background;
        titulodif[i].style.color = color;
    }
    for (var i = 0; i < icons.length; i++) icons[i].style.color = color; // muda cor dos icones

    //contact//
    document.getElementById("contactid").style.backgroundColor = background;
    document.getElementById("titulocontato").style.color = color;
    document.getElementById("infos__contato").style.color = color;
    for (var i = 0; i < emails.length; i++) emails[i].style.color = color;
}