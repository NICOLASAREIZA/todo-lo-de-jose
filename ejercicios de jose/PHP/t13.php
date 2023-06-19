<form action="#" method="post">
    <input type="text" name="name" placeholder="Ingrese su nombre">
    <select name="genero">
        <option name="1"> Masculino </option>
        <option name="2"> Femenino </option>
    </select>
    <input type="number" name="salario" placeholder="Ingrese su salario">
    <input type="number" name="tiempo" placeholder="Ingrese su tiempo de servicio">

    <button type="submit"> Validar </button>
</form>

<?php

    const Femenino = "Femenino";
    const Masculino = "Masculino";

    $name = $_POST['name'];
    $genero = $_POST['genero'];
    $salario = $_POST['salario'];
    $tiempo = $_POST['tiempo'];
    $aumento15 = $salario+($salario*0.15);
    $aumento20 = $salario+($salario*0.20);

    if($genero == Femenino){
        if($tiempo > 5){
            echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 20% del salario básico, para un total de $".$aumento20;
        }elseif($tiempo <= 5){
            echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 15% del salario básico, para un total de $".$aumento15;
            }
    }
    
        if($genero == Masculino){
            if($tiempo > 6){
                echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 20% del salario básico, para un total de $".$aumento20;
            }elseif($tiempo <= 6){
                echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 15% del salario básico, para un total de $".$aumento15;
            }
        }
    

?>