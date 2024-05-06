let arreglo = [0,0,0,0,0,0];

function arregloRandom() {//llenar con numeros random
    for (let i = 0; i < 6; i++)
        arreglo[i]=parseInt(Math.floor(Math.random()*100)+1);
   // arregloImprimir();
}
function arregloImprimir() {
    document.getElementById("demo").innerHTML="Arreglo resultante: "+arreglo;
}
function arregloOrdenar(){
    arreglo=arreglo.sort(function(a, b){return a - b});
    //arregloImprimir();
}
function arregloReversa(){
    arreglo=arreglo.reverse();
}