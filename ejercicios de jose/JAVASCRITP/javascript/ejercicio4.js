function calcular(){

    let precio, descuento 

    precio = document.getElementById("precio").value 
    descuento = document.getElementById("descuento").value 

    total = precio-(precio*descuento)/100

    print = document.getElementById("respuesta")
    print.innerHTML = "El precio de su compra aplicando el descuento es de " + total;
}