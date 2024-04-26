function grafica(){
    // Generate values
    const inicio = parseInt(document.getElementById("form").inicio.value);
    const final = parseInt(document.getElementById("form").final.value);
    const funcion = parseInt(document.getElementById("form").tipo.value)
    let exp = "Math.sin(x)";
    const xValues = [];
    const yValues = [];
    if(inicio<final){
        switch (funcion){
            case 1:
                exp = "Math.sin(x)";
                break;
            case 2:
                exp = "Math.cos(x)";
                break;
            case 3:
                exp = "Math.tan(x)";
                break;
            case 4:
                exp = "Math.tanh(x)";
                break;
        }
	
	for (let x = inicio; x <= final; x += 0.01) {
        xValues.push(x);
        yValues.push(eval(exp));
	//document.getElementById("myPlot").innerHTML = eval(exp);
    }
    // Display using Plotly
    const grafica = {
        x:xValues,
        y:yValues,
        mode:"lines",
        marker: {color:"rgba(38,137,21,0.68)"}
    };
    const data = [grafica];
    const layout = {title: "y = " + exp};
    Plotly.newPlot("myPlot", data, layout);
    }else{
        document.getElementById("myPlot").innerHTML = "Valores inválidos";
    }

}

function coseno(){
    const inicio = parseInt(document.getElementById("form").inicio.value);
    const final = parseInt(document.getElementById("form").final.value);
    const exp = "Math.cos(x)";
    const xValues = [];
    const yValues = [];
    for (let x = inicio; x <= final; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }
    // Display using Plotly
    const grafica = {
        x:xValues,
        y:yValues,
        mode:"lines",
        marker: {color:"rgba(38,137,21,0.68)"}
    }
    const data = [grafica];
    const layout = {title: "y = " + exp};
    Plotly.newPlot("myPlot", data, layout);
}
function tangente(){
    const inicio = parseInt(document.getElementById("form").inicio.value);
    const final = parseInt(document.getElementById("form").final.value);
    const exp = "Math.tan(x)";
    const xValues = [];
    const yValues = [];
    for (let x = inicio; x <= final; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }
    // Display using Plotly
    const grafica = {
        x:xValues,
        y:yValues,
        mode:"lines",
        marker: {color:"rgba(38,137,21,0.68)"}
    }
    const data = [grafica];
    const layout = {title: "y = " + exp};
    Plotly.newPlot("myPlot", data, layout);
}
function cotangente(){
    const inicio = parseInt(document.getElementById("form").inicio.value);
    const final = parseInt(document.getElementById("form").final.value);
    const exp = "Math.tanh(x)";
    const xValues = [];
    const yValues = [];
    for (let x = inicio; x <= final; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }
    // Display using Plotly
    const grafica = {
        x:xValues,
        y:yValues,
        mode:"lines",
        marker: {color:"rgba(38,137,21,0.68)"}
    }
    const data = [grafica];
    const layout = {title: "y = " + exp};
    Plotly.newPlot("myPlot", data, layout);
}