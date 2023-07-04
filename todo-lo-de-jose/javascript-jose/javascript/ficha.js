//mostrar el resultado HTML
const n = document.querySelector("#datonombre")
const s = document.querySelector("#datosistema")
const o = document.querySelector("#datoobjetivo")
const d = document.querySelector("#datodescripción")
const r = document.querySelector("#datorequerimientos1")
const a = document.querySelector("#datorecomendaciones1")
const b = document.querySelector("#datorequisitos")
const c = document.querySelector("#datorecomendaciones2")
const e = document.querySelector("#datorequerimientos2")
const f = document.querySelector("#datofecha")

function almacenarData(){
    //capturar la data del html
    let r1 = document.getElementById("nombre").value
    let r2 = document.getElementById("sistema").value
    let r3 = document.getElementById("objetivo").value
    let r4 = document.getElementById("descripción").value
    let r5 = document.getElementById("requerimientos1").value
    let r6 = document.getElementById("recomendaciones1").value
    let r7 = document.getElementById("requisitos").value
    let r8 = document.getElementById("recomendaciones2").value
    let r9 = document.getElementById("requerimientos2").value
    let r10 = document.getElementById("fecha").value


    //almacenamiento de la data con localStorage
    localStorage.setItem("nombre", r1)
    localStorage.setItem("sistema", r2)
    localStorage.setItem("objetivo", r3)
    localStorage.setItem("descripción", r4)
    localStorage.setItem("requerimientos1", r5)
    localStorage.setItem("recomendaciones1", r6)
    localStorage.setItem("requisitos", r7)
    localStorage.setItem("recomendaciones2", r8)
    localStorage.setItem("requerimientos2", r9)
    localStorage.setItem("fecha", r10)


    /*Limpiando los campos o inputs*/
    document.getElementById("nombre").value = "";
    document.getElementById("sistema").value = "";
    document.getElementById("objetivo").value = "";
    document.getElementById("descripción").value = "";
    document.getElementById("requerimientos1").value = "";
    document.getElementById("recomendaciones1").value = "";
    document.getElementById("requisitos").value = "";
    document.getElementById("recomendaciones2").value = "";
    document.getElementById("requerimientos2").value = "";
    document.getElementById("fecha").value = "";
    
}

function cargarData(){

    let nombre = localStorage.getItem("nombre");
    let sistema = localStorage.getItem("sistema");
    let objetivo = localStorage.getItem("objetivo");
    let descripción = localStorage.getItem("descripción");
    let requerimientos = localStorage.getItem("requerimientos1");
    let recomendaciones1 = localStorage.getItem("recomendaciones1");
    let requisitos = localStorage.getItem("requisitos");
    let recomendaciones2 = localStorage.getItem("recomendaciones2");
    let requerimientos2 = localStorage.getItem("requerimientos2");
    let fecha = localStorage.getItem("fecha");

    /*Mostrar datos almacenados*/
    n.innerHTML = "<b>"+nombre+"</b>"
    s.innerHTML = "<b>"+sistema+"</b>";
    d.innerHTML = "<b>"+objetivo+"</b>";
    o.innerHTML = "<b>"+descripción+"</b>"
    r.innerHTML = "<b>"+requerimientos+"</b>";
    a.innerHTML = "<b>"+recomendaciones1+"</b>";
    b.innerHTML = "<b>"+requisitos+"</b>";
    c.innerHTML = "<b>"+recomendaciones2+"</b>";
    e.innerHTML = "<b>"+requerimientos2+"</b>";
    f.innerHTML = "<b>"+fecha+"</b>";
}

document.getElementById('reset').addEventListener('click', function(){localStorage.clear();
}); 