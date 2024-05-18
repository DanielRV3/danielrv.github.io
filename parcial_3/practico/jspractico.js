let numero=0
function generaForm(){
    numero=document.forms[0].cant.value;

    for (let i = 1; i <= numero; i++) {
        let input = document.createElement('input');
        let nombre = "p"+i;

        input.setAttribute('id', nombre);
        input.setAttribute('name', nombre);
        input.setAttribute('class', 'box');
        input.setAttribute('min', '0');
        input.setAttribute('max', '25');
        document.getElementById("boxes").appendChild(input);
    }
    let input = document.createElement('input');
    input.setAttribute('type', 'submit');
    document.forms[1].appendChild(input);
}

function traduce(){
    let arr="abcdefghijklmnopqrstuvwxyz"
    let palabra=""

    for (let i = 1; i <= numero; i++) {
        let nombre = "p"+i;
        palabra+=arr[document.forms[1][nombre].value];
    }
    console.log(palabra);
    document.getElementById("output").innerHTML=palabra;
}