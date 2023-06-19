function calcular(){

    const gener1 = "Femenino";
    const gener2 = "Masculino";

    let name, genero, salario, tiempo

    name = document.getElementById("name").value 
    genero = document.getElementById("genero").value 
    salario = document.getElementById("salario").value 
    tiempo = document.getElementById("tiempo").value 
    aumento15 = parseInt(salario) + parseInt((salario*0.15));
    aumento20 = parseInt(salario) + parseInt((salario*0.20));

    respuesta = document.getElementById("respuesta")

    if(genero == gener1){
        if(tiempo > 5){
            respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 20% su salario será de "+aumento20
        }else if(tiempo <= 5){
            respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 15% su salario será de "+aumento15
        }
        }if(genero == gener2){
            if(tiempo > 6){
                respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 20% su salario será de "+aumento20
            }else if(tiempo <= 6){
                respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 15% su salario será de "+aumento15
            }
            }
    }
    

