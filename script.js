function showAlert () {

    alert("esta es una alerta de javascript");
}

let button = document.getElementById("boton_1");

button.addEventListener("click", function () { alert("haz hecho click en el boton");});  