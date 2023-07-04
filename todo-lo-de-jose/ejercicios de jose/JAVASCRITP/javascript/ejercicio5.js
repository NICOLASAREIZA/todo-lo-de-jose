function calcular(){

    let base, altura

    base = document.getElementById("base").value 
    altura = document.getElementById("altura").value 

    perimetro = (base*2) + (altura*2);
    area = base*altura;

    print = document.getElementById("respuesta")
    print.innerHTML = "El perimetro del rectangulo es de " + perimetro + " y su area es de " + area;
}