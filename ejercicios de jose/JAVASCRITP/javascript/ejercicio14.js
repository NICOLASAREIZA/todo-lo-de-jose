function calcular(){

    let ph, materia,fosforo, calcio, magnesio, potasio, aluminio

    ph = document.getElementById("ph").value 
    materia = document.getElementById("materia").value 
    fosforo = document.getElementById("fosforo").value 
    calcio = document.getElementById("calcio").value 
    magnesio = document.getElementById("magnesio").value 
    potasio = document.getElementById("potasio").value
    aluminio = document.getElementById("aluminio").value 

    print = document.getElementById("respuesta")

    if(ph > 5 && ph <=  5.5 && materia > 8 && fosforo > 30 && calcio > 3 && magnesio > 0.9 && potasio > 0.4 && aluminio < 1){
        print.innerHTML = "El suelo es apto para la siembra de café"
    }else{
        print.innerHTML = "El suelo no es apto para la siembra de café"
    }
}