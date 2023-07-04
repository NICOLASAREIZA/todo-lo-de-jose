function calcular() {
    var moneda = document.getElementById("moneda").value;
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var convertir_a = document.getElementById("convertir_a").value;
    var tasa_cambio = 0;
    var descuento = 0;

    switch(moneda) {
        case "dolar":
            tasa_cambio = 4000;
            descuento = 0.1;
            break;
        case "euro":
            tasa_cambio = 3500;
            descuento = 0.12;
            break;
        case "yuan":
            tasa_cambio = 35;
            descuento = 0.14;
            break;
        default:
            tasa_cambio = 1;
            break;
    }

    if(convertir_a == "peso_colombiano") {
        var resultado = cantidad * tasa_cambio;
        resultado = resultado - (resultado * descuento);
        document.getElementById("resultado").value = resultado;
    }
}

function calcular_dolar() {
    document.getElementById("moneda").value = "dolar";
    document.getElementById("convertir_a").value = "peso_colombiano";
    calcular();
}

function calcular_euro() {
    document.getElementById("moneda").value = "euro";
    document.getElementById("convertir_a").value = "peso_colombiano";
    calcular();
}

function calcular_yuan() {
    document.getElementById("moneda").value = "yuan";
    document.getElementById("convertir_a").value = "peso_colombiano";
    calcular();
}