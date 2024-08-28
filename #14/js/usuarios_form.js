//Sacar datos de la tabla que se van a guardar más abajo
var tablaUsuario = localStorage.getItem("tablaUsuarioBD");
tablaUsuario = JSON.parse(tablaUsuario);
if(tablaUsuario == null){ //Si está vacía
  var tablaUsuario = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if(idForm == null){
  var idForm = 0;
}

cargarPagina();

function guardar(){
  //Toma los datos del formulario y lo envía
  console.log("Presiono Guardar...");
  var objUsuario = JSON.stringify({
    codigo : idForm,
    nombre : document.getElementById("nombre").value,
    apellido :  document.getElementById("apellido").value,
    rol: document.getElementById("rol").value,
    correo : document.getElementById("correo").value,
    telefono : document.getElementById("telefono").value,
  })
  console.log(objUsuario);
  //Editar paciente

  //Nuevos Usuarios
  tablaUsuario.push(objUsuario);
  localStorage.setItem("tablaUsuarioBD", JSON.stringify(tablaUsuario))
  window.location.replace("admin.html");
}

function cargarPagina(){
  if(idForm > 0){
    //Sacar datos de la fila de la tabla y ponerlo en el formulario
  
  }
}

