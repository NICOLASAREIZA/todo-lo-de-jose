<form method="post" action="">
  <label for="iniciales">Por favor, Ingrese sus iniciales:</label>
  <input type="text" name="iniciales" id="iniciales" required>
  <br>
  <label for="altura">Ingrese su altura:</label>
  <input type="number" name="altura" id="altura" required>
  <input type="submit" value="Enviar">
</form>

<?php

$iniciales = $_POST["iniciales"];
$altura = $_POST["altura"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  echo " Sus iniciales son: $iniciales y su altura $altura ";
}

?>