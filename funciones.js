let parcial=1;
let x=0;
let subtitulos= document.querySelectorAll(".subtitulo");
let secciones = document.querySelectorAll(".contenido");
let iframes =document.querySelectorAll("iframe");
let menus = document.querySelectorAll(".menu");
let botones=document.querySelectorAll(".button");
let nav_btn = document.querySelectorAll("#boton-nav ul li");

function parcial1(){
    parcial=1;
    document.body.style.backgroundColor = "rgba(137,163,255,0.65)"
    nav_btn[0].style.backgroundColor = "whitesmoke"
    nav_btn[1].style.backgroundColor = "#222222"
    nav_btn[2].style.backgroundColor = "#222222"

    nav_btn[0].style.color = "black"
    nav_btn[1].style.color = "whitesmoke"
    nav_btn[2].style.color = "whitesmoke"

    for (let i = 0; i < secciones.length; i++) {
        subtitulos[i].style.backgroundColor = "#3D405B";
        secciones[i].style.backgroundColor = "rgba(114,120,146,0.74)";
        iframes[i].style.backgroundColor = "#eaeeff";
        menus[i].style.backgroundColor = "rgba(87,102,162,0.74)";
    }
    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(47,46,80,0.74)";
    }
}
function parcial2(){
    parcial=2;
    document.body.style.backgroundColor = "rgba(172,255,166,0.65)";

    nav_btn[0].style.backgroundColor = "#222222"
    nav_btn[1].style.backgroundColor = "whitesmoke"
    nav_btn[2].style.backgroundColor = "#222222"

    nav_btn[0].style.color = "whitesmoke"
    nav_btn[1].style.color = "black"
    nav_btn[2].style.color = "whitesmoke"

    for(let i = 0; i<secciones.length; i++){
        subtitulos[i].style.backgroundColor = "#3b5e3b";
        secciones[i].style.backgroundColor = "rgba(115,152,114,0.74)";
        iframes[i].style.backgroundColor = "#edffea";
        menus[i].style.backgroundColor = "rgba(86,154,85,0.74)";

    }
    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(40,68,56,0.74)";
    }
}
function parcial3(){
    parcial=3;
    document.body.style.backgroundColor = "rgba(255,136,107,0.65)";

    nav_btn[0].style.backgroundColor = "#222222"
    nav_btn[1].style.backgroundColor = "#222222"
    nav_btn[2].style.backgroundColor = "whitesmoke"

    nav_btn[0].style.color = "whitesmoke"
    nav_btn[1].style.color = "whitesmoke"
    nav_btn[2].style.color = "black"

    for(let i = 0; i<secciones.length; i++){
        subtitulos[i].style.backgroundColor = "#774033";
        secciones[i].style.backgroundColor = "rgba(187,111,95,0.74)";
        iframes[i].style.backgroundColor = "#ffeaea";
        menus[i].style.backgroundColor = "rgba(194,94,74,0.74)";
    }
    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(82,35,35,0.74)";
    }
}

function mostrar() {
    document.getElementsByName("muestra")[0].style.width = "75vw";
    document.getElementsByClassName("menu")[x].style.width = "20vw";
    //document.getElementsByClassName("menu")[x].style.padding = "1%";
    for(let i=0; i<botones.length;i++){
        document.getElementsByClassName("button")[i].style.color = "whitesmoke";
        document.getElementsByClassName("button")[i].style.transitionDelay = "0.3s";
    }
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "flex";
}

function ocultar() {
    document.getElementsByName("muestra")[0].style.width = "95vw";
    document.getElementsByClassName("menu")[x].style.width = "0";
    //document.getElementsByClassName("menu")[x].style.padding ="1% 0 1% 0";
    for(let i=0; i<botones.length;i++){
        document.getElementsByClassName("button")[i].style.color = "transparent";
        document.getElementsByClassName("button")[i].style.transitionDelay = "0s"
    }
    document.getElementById("abrir").style.display = "flex";
    document.getElementById("cerrar").style.display = "none";
}

function navegador() {
    const head = document.querySelector("header");
    const navbar= document.getElementById("selector");
    const sub = document.getElementsByClassName("subtitulo")[0];
    const altura = head.offsetHeight;

    if (window.scrollY >= altura*0.8) {
        navbar.style.height = "13vh";
        /*head.style.marginBottom = "13vh";
        sub.style.marginTop = "13vh";*/
    } else {
        navbar.style.height = "0";
        /*head.style.marginBottom = "0";
        sub.style.marginTop = "0";*/
    }
}