

<form method="post" action="#">
  <label for="edad">Por favor, Ingrese su edad:</label>
  <input type="number" name="edad" id="edad" required>
  <input type="submit" value="Enviar">
</form>


<?php

/*Escribe un programa que pregunte al usuario cuántos años tiene, y conteste al usuario: 
“Ahora sé que tienes (x) años, gracias”. X es la cantidad de años ingresada por el teclado.*/

$edad = $_POST["edad"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  echo "Ahora sé que tienes $edad años, gracias. ";
  echo " $edad es la cantidad de años ingresada por el teclado ";
}


?>