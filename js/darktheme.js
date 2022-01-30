dktheme = document.getElementById("dktheme");
estado = 0;

dktheme.addEventListener("click",function (event) {
    event.preventDefault();
    if (estado == 0){
        darktheme();
        estado = 1;
    } else if (estado == 1){
        brighttheme();
        estado = 0;
    }
});

function darktheme(){
    document.querySelector("header").style.backgroundColor = "black";
}

function brighttheme(){
    document.querySelector("header").style.backgroundColor = "white";   
}
