<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
  <label for="radio">Ingresa el radio:</label>
  <input type="number" name="radio" id="radio" step="0.01" required>
  <br>
  <input type="submit" value="Calcular">
</form>

<?php
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

