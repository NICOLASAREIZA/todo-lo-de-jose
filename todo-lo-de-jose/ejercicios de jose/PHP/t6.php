

<form action="#" method="post">
    <input type="number" name="Peso" placeholder="Ingrese la cantidad de pesos">
    <button type="submit"> Calcular </button>
</form>

<?php

/* Suponiendo que 1 euro = 4444 pesos. Escribe un programa que pida al usuario un número 
de pesos y calcule el cambio en euros.*/

    const euro = 4444;
    $Peso = $_POST['Peso'];

    $Euros = euro*$Peso;

    echo "La cantidad de euros son " .$Euros;

?>