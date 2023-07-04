/
<form method="post" action="">
  <label for="iniciales">Por favor, Ingrese sus iniciales:</label>
  <input type="text" name="iniciales" id="iniciales" required>
  <br>
  <label for="altura">Ingrese su altura:</label>
  <input type="number" name="altura" id="altura" required>
  <input type="submit" value="Enviar">
</form>

<?php
/*Escribe un programa que pregunte al usuario su altura aproximada, sus iniciales y conteste 
diciendo: “Sus iniciales son: A.J.R. y su altura 1.34 (por ejemplo)”*/

$iniciales = $_POST["iniciales"];
$altura = $_POST["altura"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  echo " Sus iniciales son: $iniciales y su altura $altura ";
}

?>