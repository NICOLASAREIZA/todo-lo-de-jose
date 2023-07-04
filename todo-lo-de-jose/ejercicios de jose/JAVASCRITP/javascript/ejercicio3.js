function validar(){

    let altura, iniciales

    altura = document.getElementById("altura").value 
    iniciales = document.getElementById("iniciales").value 

    print = document.getElementById("respuesta")
    print.innerHTML = "Sus iniciales son " + iniciales + " y su altura es " + altura;
}