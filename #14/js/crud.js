

var tablaUsuario = localStorage.getItem("tablaUsuarioBD");
tablaUsuario = JSON.parse(tablaUsuario);
if(tablaUsuario == null){ //Si está vacía
  var tablaUsuario = [];
}

function listar(){//Este es el buscar
  console.log("ingreando a la lista");
  //contiene el dato de cada fila
  var dataFila = '';//variable que contendrá la fila
  if(tablaUsuario.length > 0){
    for(const i in tablaUsuario){
      var varUsuario = JSON.parse(tablaUsuario[i]);
      dataFila += "<tr>";
      dataFila += "<td>" + varUsuario.codigo + "</td>";
      dataFila += "<td>" + varUsuario.nombre + "</td>";
      dataFila += "<td>" + varUsuario.apellido + "</td>";
      dataFila += "<td>" + varUsuario.rol + "</td>";
      dataFila += "<td>" + varUsuario.correo + "</td>";
      dataFila += "<td>" + varUsuario.telefono + "</td>";
      dataFila += "<td>" +
                  "<button type='button' class='btn btn-warning' onclick='abrirForm("+varUsuario.idForm+")'>Editar</button"+"</td>";
      dataFila += "</tr>";
    }
    document.getElementById("dataUsers").innerHTML = dataFila;
  }
}

function abrirForm(idForm){
  localStorage.setItem('idForm', JSON.stringify(idForm));
  window.location.replace("usuarios.html");
  }