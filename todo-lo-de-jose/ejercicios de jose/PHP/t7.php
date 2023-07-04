


<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
  <label for="radio">Ingresa el radio:</label>
  <input type="number" name="radio" id="radio" step="0.01" required>
  <br>
  <input type="submit" value="Calcular">
</form>

<?php

/*Suponiendo que pi = 3.1416. Escribe un programa que pida al usuario que introduzca el 
radio, y presente por pantalla el cálculo del perímetro de la circunferencia (2*pi*r), el área 
del círculo (pi*r2 ), y el volumen de la esfera (V = 4*pi*r3 /3).*/


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $radio = $_POST["radio"];
  $pi = 3.1416;

  $perimetro = 2 * $pi * $radio;
  $area = $pi * pow($radio, 2);
  $volumen = (4 * $pi * pow($radio, 3)) / 3;

  echo "El perímetro de la circunferencia es: $perimetro<br>";
  echo "El área del círculo es: $area<br>";
  echo "El volumen de la esfera es: $volumen";
}
?>

