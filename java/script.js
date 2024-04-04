
function enviarFormulario() {
    alert("¡Formulario enviado con éxito!");
}

function vaciarFormulario() {
    var direccion = document.getElementById("direccion");
    direccion.value = " " 
    var nombre = document.getElementById("nombre");
    nombre.value = " " 
    var email = document.getElementById("email");
    email.value = " " 
    var cedula = document.getElementById("cedula");
    cedula.value = " "
    var maculino = document.getElementById("maculino");
    masculino.value = " " 
    var femenino = document.getElementById("femenino");
    femenino.value = " " 
    var ocupacion = document.getElementById("ocupacion");
    ocupacion.value = " " 

    alert("¡Formulario vaciado exitosamente!");
}
