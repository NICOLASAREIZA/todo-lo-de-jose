<form action="#" method="post">
    <input type="number" name="resis1" placeholder="Ingrese la primer resistencia" >
    <input type="number" name="resis2" placeholder="Ingrese la segunda resistencia" >
    <button type="submit"> Calcular </button>
</form>

<?php

    $resistencia1 = $_POST['resis1'];
    $resistencia2 = $_POST['resis2'];

    $paralelo = ($resistencia1 * $resistencia2)/($resistencia1 + $resistencia2);

    echo "La resistencia equivalente en paralelo es de " .$paralelo;

?>