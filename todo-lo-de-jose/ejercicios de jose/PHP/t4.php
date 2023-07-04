


<form method="post" action="">
  <label for="precio">Por favor, Ingrese el precio.</label>
  <input type="number" name="precio" id="precio" required>
  <br>
  <label for="descuento">Ingresa el porcentaje de descuento (%):</label>
  <input type="number" name="descuento" id="descuento">
  <br>
  <input type="submit" value="Enviar">
</form>

<?php

/*Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el 
precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el 
descuento 20, el programa dirá que el precio final con descuento es de 240.*/

$precio = $_POST["precio"];
$descuento = $_POST["descuento"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $precioDes= $precio - ($precio * $descuento / 100);
  
    echo "El precio con descuento es: $precioDes";
  }

?>