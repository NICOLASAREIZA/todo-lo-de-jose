<form method="post" action="">
  <label for="Base">Por favor, Ingrese la base del rectangulo</label>
  <input type="number" name="Base" id="Base" required>
  <br>
  <label for="Altura">Ingrese la altura del rectangulo</label>
  <input type="number" name="Altura" id="Altura">
  <br>
  <input type="submit" value="Calcular">
</form>

<?php

$Base = $_POST['Base'];
$Altura = $_POST['Altura'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $Perimetro = ($Base*2) + ($Altura*2);
    
    $Area = $Base*$Altura;
    
    echo "El perimetro del rectangulo es " .$Perimetro. " y su area es de " .$Area;
 
}  

?>  
