<form action="#" method="post">
    <input type="number" name="Peso" placeholder="Ingrese la cantidad de pesos">
    <button type="submit"> Calcular </button>
</form>

<?php

    const euro = 4444;
    $Peso = $_POST['Peso'];

    $Euros = euro*$Peso;

    echo "La cantidad de euros son " .$Euros;

?>