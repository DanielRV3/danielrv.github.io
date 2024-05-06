const iframe = document.getElementById("demo");
const botones = document.querySelectorAll("button");
let anterior=0;
function variables(){
    iframe.src="semana1/variables.html";

    botones[anterior].classList.remove("active");
    botones[0].classList.add("active");
    anterior=0;
}
function parrafos(){
    iframe.src="semana1/parrafos.html";
    botones[anterior].classList.remove("active");
    botones[1].classList.add("active");
    anterior=1;
}
function tabla1(){
    iframe.src="semana1/tabla_random1.html";
    botones[anterior].classList.remove("active");
    botones[2].classList.add("active");
    anterior=2;
}
function tabla2(){
    iframe.src="semana1/tabla_random2.html";
    botones[anterior].classList.remove("active");
    botones[3].classList.add("active");
    anterior=3;
}
function tabla3(){
    iframe.src="semana1/tabla_random3.html";
    botones[anterior].classList.remove("active");
    botones[4].classList.add("active");
    anterior=4;
}
function tabla4(){
    iframe.src="semana1/tabla_random4.html";
    botones[anterior].classList.remove("active");
    botones[5].classList.add("active");
    anterior=5;
}
function login(){
    iframe.src="semana1/login.html";
    botones[anterior].classList.remove("active");
    botones[6].classList.add("active");
    anterior=6;
}
function conversor(){
    iframe.src="semana1/conversor.html";
    botones[anterior].classList.remove("active");
    botones[7].classList.add("active");
    anterior=7;
}
function arreglos(){
    iframe.src="semana1/arreglos1.html";
    botones[anterior].classList.remove("active");
    botones[8].classList.add("active");
    anterior=8;
}