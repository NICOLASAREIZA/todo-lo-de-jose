function validar(){

    const corre = "fund@gmail.com";
    const pass = "123456";

    let correo, password

    correo = document.getElementById("correo").value 
    password = document.getElementById("password").value 

    respuesta = document.getElementById("respuesta")

    if(correo == corre && password == pass){
        respuesta.innerHTML = "Bienvenidos a fundamentos de programación";
    }else{
        respuesta.innerHTML = "Error en los datos de ingreso";
    }

}