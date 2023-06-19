<form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
  <label for="numero">Por favor, introduce un número entero:</label>
  <input type="number" name="numero" id="numero" required>
  <input type="submit" value="Enviar">
</form>


<?php

$numero = $_POST["numero"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  echo "Has introducido el número $numero, gracias.";
}


?>