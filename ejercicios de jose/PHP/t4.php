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

$precio = $_POST["precio"];
$descuento = $_POST["descuento"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $precioDes= $precio - ($precio * $descuento / 100);
  
    echo "El precio con descuento es: $precioDes";
  }

?>