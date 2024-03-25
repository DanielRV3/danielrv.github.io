let parcial = 0;
let altura= "77vh"

const subtitulos= document.querySelectorAll(".subtitulo");
const secciones = document.querySelectorAll(".contenido");
const iframes =document.querySelectorAll("iframe");
const menus = document.querySelectorAll(".menu");
const botones=document.querySelectorAll(".button");
const nav_btn = document.querySelectorAll("#boton-nav ul li");
const botonMenu=document.querySelectorAll(".boton-menu img");

function transicion(){

    for(let i=0; secciones.length;i++){
        secciones[i].style.height = altura;
    }
    //document.body.style.overflow = "scroll"
    document.body.style.height = "auto"
}

function reset1(){
    iframes[0].src = "parcial_1/practicas/practica1.html";
    iframes[1].src = "parcial_1/trabajos/reto1.html";
    iframes[2].src = "parcial_1/sistema_solar/sistemasolar.html";
}
function reset2(){
    iframes[0].src = "parcial_2/practica_1/practica1.html";
    iframes[1].src = "parcial_2/practica_4/reto3.html";
    iframes[2].src = "parcial_2/practica_9/siete_barrios.html";
}
function reset3(){
    iframes[0].src = "media_index/construccion.html";
    iframes[1].src = "media_index/construccion.html";
    iframes[2].src = "media_index/construccion.html";
}
function parcial1(){
    document.body.style.backgroundColor = "rgba(137,163,255,0.65)"
    document.body.style.height = "200vh";
    //document.body.style.overflow = "hidden";

    nav_btn[0].style.backgroundColor = "whitesmoke"
    nav_btn[1].style.backgroundColor = "#222222"
    nav_btn[2].style.backgroundColor = "#222222"

    nav_btn[0].style.color = "black"
    nav_btn[1].style.color = "whitesmoke"
    nav_btn[2].style.color = "whitesmoke"

    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(47,46,80,0.74)";
    }
    for (let i = 0; i < secciones.length; i++) {
        ocultar(i);
        subtitulos[i].style.backgroundColor = "#3D405B";
        secciones[i].style.backgroundColor = "rgba(114,120,146,0.74)";
        secciones[i].style.height = "0";
        iframes[i].style.backgroundColor = "#eaeeff";
        secciones[i].getElementsByClassName("menu")[0].getElementsByClassName("button")[0].style.backgroundColor = "#044069";
    }
    for(let i = 0; i<botonMenu.length; i++){
        botonMenu[i].style.filter = "hue-rotate(0deg)";
    }
    for(let i=0;i<menus.length;i++){
        menus[i].style.backgroundColor = "rgba(87,102,162,0.74)";
        menus[i].style.overflowY = "hidden"
    }

    altura="77vh";
    setTimeout(transicion, 1100);
    setTimeout(reset1,1100);

    parcial=0;
}
function parcial2(){
    document.body.style.backgroundColor = "rgba(172,255,166,0.65)";
    document.body.style.height = "200vh";
    //document.body.style.overflow = "hidden";

    nav_btn[0].style.backgroundColor = "#222222"
    nav_btn[1].style.backgroundColor = "whitesmoke"
    nav_btn[2].style.backgroundColor = "#222222"

    nav_btn[0].style.color = "whitesmoke"
    nav_btn[1].style.color = "black"
    nav_btn[2].style.color = "whitesmoke"

    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(40,68,56,0.74)";
    }
    for(let i = 0; i<secciones.length; i++){
        ocultar(i);
        subtitulos[i].style.backgroundColor = "#3b5e3b";
        secciones[i].style.backgroundColor = "rgba(115,152,114,0.74)";
        secciones[i].style.height = "0";
        iframes[i].style.backgroundColor = "#edffea";
        secciones[i].getElementsByClassName("menu")[1].getElementsByClassName("button")[0].style.backgroundColor = "rgb(58, 107, 35)";
    }
    for(let i = 0; i<botonMenu.length; i++){
        botonMenu[i].style.filter = "hue-rotate(250deg)";
    }
    for(let i=0;i<menus.length;i++){
        menus[i].style.backgroundColor = "rgba(86,154,85,0.74)";
        menus[i].style.overflowY = "auto"
    }
    botones[0].style.backgroundColor = "rgb(58, 107, 35)";

    altura="77vh";
    setTimeout(transicion, 1100);
    setTimeout(reset2,1100);

    parcial=1;
}
function parcial3(){


    document.body.style.backgroundColor = "rgba(255,136,107,0.65)";
    document.body.style.height = "200vh";
    //document.body.style.overflow = "hidden";

    nav_btn[0].style.backgroundColor = "#222222"
    nav_btn[1].style.backgroundColor = "#222222"
    nav_btn[2].style.backgroundColor = "whitesmoke"

    nav_btn[0].style.color = "whitesmoke"
    nav_btn[1].style.color = "whitesmoke"
    nav_btn[2].style.color = "black"

    for(let i=0; i<botones.length;i++){
        botones[i].style.backgroundColor = "rgba(82,35,35,0.74)";
    }
    for(let i = 0; i<secciones.length; i++){
        ocultar(i);
        subtitulos[i].style.backgroundColor = "#774033";
        secciones[i].style.backgroundColor = "rgba(187,111,95,0.74)";
        secciones[i].style.height = "0";
        iframes[i].style.backgroundColor = "#ffeaea";
        secciones[i].getElementsByClassName("menu")[2].getElementsByClassName("button")[0].style.backgroundColor = "#b02d2d";
    }
    for(let i = 0; i<botonMenu.length; i++){
        botonMenu[i].style.filter = "hue-rotate(500deg)";
    }
    for(let i=0;i<menus.length;i++){
        menus[i].style.backgroundColor = "rgba(194,94,74,0.74)";
        menus[i].style.overflowY = "hidden"
    }

    altura="77vh";
    setTimeout(transicion, 1100);
    setTimeout(reset3,1100);

    parcial=2;
}

function mostrar(seccion) {
    let menuParcial = document.getElementsByClassName("contenido")[seccion].getElementsByClassName("menu")[parcial];
    let botonesSeccion = menuParcial.getElementsByClassName("button");

    iframes[seccion].style.width = "75vw";
    menuParcial.style.width = "20vw";
    //document.getElementsByClassName("menu")[x].style.padding = "1%";
    for(let i=0; i<botonesSeccion.length;i++){
        botonesSeccion[i].style.color = "whitesmoke";
        botonesSeccion[i].style.transitionDelay = "0.3s";
    }

    document.getElementsByClassName("abrir")[seccion].style.display = "none";
    document.getElementsByClassName("cerrar")[seccion].style.display = "flex";
}

function ocultar(seccion) {
    let menuParcial = document.getElementsByClassName("contenido")[seccion].getElementsByClassName("menu")[parcial];
    let botonesSeccion = menuParcial.getElementsByClassName("button");

    iframes[seccion].style.width = "95vw";
    menuParcial.style.width = "0";
    //document.getElementsByClassName("menu")[x].style.padding ="1% 0 1% 0";
    for(let i=0; i<botonesSeccion.length;i++){
        botonesSeccion[i].style.color = "transparent";
        botonesSeccion[i].style.transitionDelay = "0s";
    }
    document.getElementsByClassName("abrir")[seccion].style.display = "flex";
    document.getElementsByClassName("cerrar")[seccion].style.display = "none";
}

function navegador() {
    const head = document.querySelector("header");
    const navbar= document.getElementById("selector");
    const altura = head.offsetHeight*0.75;

    if (window.scrollY >= altura) {
        navbar.style.height = "13vh";
        /*head.style.marginBottom = "13vh";
        sub.style.marginTop = "13vh";*/
    } else {
        navbar.style.height = "0";
        /*head.style.marginBottom = "0";
        sub.style.marginTop = "0";*/
    }
}
function botonesMenu(seccion,numboton){
    let botonM = document.getElementsByClassName("contenido")[seccion].getElementsByClassName("menu")[parcial].querySelectorAll(".button");
    for(let i=0;i<botonM.length;i++){
        if(parcial===0){
            botonM[i].style.backgroundColor = "rgba(47,46,80,0.74)";
        }
        if(parcial===1){
            botonM[i].style.backgroundColor = "rgba(40,68,56,0.74)";
        }
        if(parcial===2){
            botonM[i].style.backgroundColor = "rgba(82,35,35,0.74)";
        }
    }
    if(parcial===0){
        botonM[numboton].style.backgroundColor = "#044069";
    }
    if(parcial===1){
        botonM[numboton].style.backgroundColor = "rgb(58, 107, 35)";
    }
    if(parcial===2){
        botonM[numboton].style.backgroundColor = "#b02d2d";
    }
}
function sites(){
    document.getElementsByName("trabajos")[0].src = "media_index/sabaton.html";
}
function canva(){
    document.getElementsByName("trabajos")[0].src = "media_index/sabaton_canva.html";
}