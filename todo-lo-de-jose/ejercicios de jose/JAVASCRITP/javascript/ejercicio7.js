function calcular(){

    let radio 
    const pi = 3.1416

    radio = document.getElementById("radio").value 

    perimetro = 2*pi*radio;
    area = pi*(radio*radio);
    volumen = 4*pi*(radio*radio*radio)/3;

    print = document.getElementById("respuesta")
    print.innerHTML = "El perimetro de la circunsferencia es de " + perimetro + ", su area es de "+ area + " y su volumen es de " + volumen;
}