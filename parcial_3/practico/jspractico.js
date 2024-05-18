let longitud=0
function generaForm(){
    longitud=document.forms[0].cant.value;

    for (let i = 1; i <= longitud; i++) {
        let input = document.createElement('input');
        let nombre = "p"+i;

        input.setAttribute('id', nombre);
        input.setAttribute('name', nombre);
        input.setAttribute('class', 'box');
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'number');
        input.setAttribute('min', '0');
        input.setAttribute('max', '25');
        document.getElementById("boxes").appendChild(input);
    }
    let input = document.createElement('input');
    input.setAttribute('type', 'submit');
    input.setAttribute('class', 'btn btn-outline-danger');
    document.forms[1].appendChild(input);

    document.getElementById('form-2').style.display = "block";
}

function traduce(){
    const arr="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let palabra=""

    for (let i = 1; i <= longitud; i++) {
        let nombre = "p"+i;
        let letra=document.forms[1][nombre].value;
        if(letra==="") return false;
        letra= parseInt(letra);
        palabra+=arr[letra];
    }
    console.log(palabra);
    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML="Palabra codificada: <strong>" + palabra + "</strong>";
    pdf(palabra);
}

function pdf(palabra){
    const doc = new jsPDF();
    doc.setFontSize(25);
    doc.text('Palabra codificada: '+ palabra,10, 20);
    doc.setFontSize(20);
    let string = doc.output('datauristring');
    document.getElementById('show-pdf').setAttribute('src',string);
}