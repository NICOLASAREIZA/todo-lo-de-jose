<form action="#" method="post">
    <input type="number" name="ph" placeholder="Ingrese el nivel de ph">
    <input type="number" name="materia" placeholder="Ingrese la materia orgánica">
    <input type="number" name="fosforo" placeholder="Ingrese el fosforo">
    <input type="number" name="calcio" placeholder="Ingrese el calcio">
    <input type="number" name="magnesio" placeholder="Ingrese el magnesio">
    <input type="number" name="potasio" placeholder="Ingrese el potasio">
    <input type="number" name="aluminio" placeholder="Ingrese el aluminio">
    <button type="submit"> Calcular </button>
</form>

<?php

    $ph = $_POST['ph'];
    $materia = $_POST['materia'];
    $fosforo = $_POST['fosforo'];
    $calcio = $_POST['calcio'];
    $magnesio = $_POST['magnesio'];
    $potasio = floatval($_POST['potasio']);
    $aluminio = floatval($_POST['aluminio']);

    if($ph >= 5 && $ph <= 5.5 && $materia > 8 && $fosforo > 30 && $calcio > 3 && $magnesio > 0.9 && $potasio > 0.4 && $aluminio < 1){
        echo "El suelo es apto para la siembra de café";
    }else{
        echo "El suelo no es apto para la siembra de café";
    }

?>