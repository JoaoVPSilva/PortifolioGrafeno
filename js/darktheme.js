dktheme = document.getElementById("dktheme");
estado = 0;

dktheme.addEventListener("click", function(event) {
    event.preventDefault();
    if (estado == 0) {
        darktheme();
        estado = 1;
    } else if (estado == 1) {
        brighttheme();
        estado = 0;
    }
});

function darktheme() {
    //header//
    document.querySelector("header").style.backgroundColor = "rgb(30,30,30)";
    document.querySelector("h2").style.color = "rgb(187,143,243)";
    as = document.querySelectorAll("a");
    for (var i = 0; i < 3; i++) as[i].style.color = "rgb(187,143,243)";

    //quem somos//
    document.getElementById("quem__somos").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("h2quemsomos").style.color = "rgb(187,143,243)";

    //habilidades//

    document.getElementById("dif_single0").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("titulodif0").style.color = "rgb(187,143,243)";
    document.getElementById("dif_single1").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("titulodif1").style.color = "rgb(187,143,243)";
    document.getElementById("dif_single2").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("titulodif2").style.color = "rgb(187,143,243)";

    //contact//
    document.getElementById("contactid").style.backgroundColor = "rgb(30,30,30)";
    document.getElementById("titulocontato").style.color = "rgb(187,143,243)";
    document.getElementById("gabcontato").style.color = "rgb(187,143,243)";
    document.getElementById("joaocontato").style.color = "rgb(187,143,243)";


}

function brighttheme() {
    //header//
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("h2").style.color = "#490a5c";
    as = document.querySelectorAll("a");
    for (var i = 0; i < 3; i++) as[i].style.color = "#490a5c";

    //quem somos//
    document.getElementById("quem__somos").style.backgroundColor = "white";
    document.getElementById("h2quemsomos").style.color = "#490a5c";

    //habilidades//
    document.getElementById("dif_single0").style.backgroundColor = "white";
    document.getElementById("titulodif0").style.color = "#490a5c";
    document.getElementById("dif_single1").style.backgroundColor = "white";
    document.getElementById("titulodif1").style.color = "#490a5c";
    document.getElementById("dif_single2").style.backgroundColor = "white";
    document.getElementById("titulodif2").style.color = "#490a5c";

    //contact//
    document.getElementById("contactid").style.backgroundColor = "white";
    document.getElementById("titulocontato").style.color = "#490a5c";
    document.getElementById("gabcontato").style.color = "#490a5c";
    document.getElementById("joaocontato").style.color = "#490a5c";
}