function Mes() {
  var numero = parseInt(prompt ("Ingresa un número del 1 a 12"));

  switch(numero) {
    case 1:
      alert ('El ' +  numero + ' Corresponde al mes de Enero');
      break;
    case 2:
      alert ('El ' +  numero + ' Corresponde al mes de Febrero');
      break;
    case 3:
      alert ('El ' +  numero + ' Corresponde al mes de Marzo');
      break;
    case 4:
      alert ('El ' +  numero + ' Corresponde al mes de Abril');
      break;
    case 5:
      alert ('El ' +  numero + ' Corresponde al mes de Mayo');
      break;
    case 6:
      alert ('El ' +  numero + ' Corresponde al mes de Junio');
      break;
    case 7:
      alert ('El ' +  numero + ' Corresponde al mes de Julio');
      break;
    case 8:
      alert ('El ' +  numero + ' Corresponde al mes de Agosto');
      break;
    case 9:
      alert ('El ' +  numero + ' Corresponde al mes de Septiembre');
      break;
    case 10:
      alert ('El ' +  numero + ' Corresponde al mes de Octubre');
      break;
    case 11:
      alert ('El ' +  numero + ' Corresponde al mes de Noviembre');
      break;
    case 12:
      alert ('El ' +  numero + ' Corresponde al mes de Diciembre');
      break;
    default:
      alert ('No reconozco el valor');
      break;
  }
  
}

function login(){
  var usuario = prompt ("Ingresa tu usuario");
  var password = prompt ("Ingresa tu contraseña");

  if(usuario == 'Juan' && password == "1234"){
    alert('Bienvenido');

  }
  else{
    alert ("Datos incorrectos");
  }

}

function calculadora(){
  var opcion = parseInt(prompt ('Qué operación deseas realizar: 1-suma, 2-resta, 3-multi, 4-división'));
  var num1 = parseInt(prompt ("Ingresa tu primer número"));
  var num2 = parseInt(prompt ("Ingresa tu segundo número"));
  var suma = num1 + num2;
  var resta = num1 - num2;
  var multiplicacion = num1 * num2;
  var división = num1 / num2;

  switch(opcion) {
    case 1:
      alert ('La suma es: ' +  suma );
      break;
    case 2:
      alert ('La resta es: ' +  resta );
      break;
    case 3:
      alert ('La multiplicación es: ' +  multiplicacion );
      break;
    case 4:
      alert ('La división es: ' +  división );
      break;
    default:
      alert ('No tengo respuesta');
      break;
  }
  


}

function edad (){
  var edad = parseInt(prompt ('Ingresa tu edad'));
  if(edad >= 18){
    alert("Es mayor de edad");
  }
  else{
    alert("Es menor de edad");
  }
}

function parEimpar(){
  var numero = parseInt(prompt ('Ingresa un numero para determinar si es par o impar'));

  if (numero % 2 == 0){
    alert ("El " + numero + "  es numero Par");
  }
  else{
    alert ("El " + numero + "  es numero Impar");

  } 
}

function menu(){
  console.log ("----------------------------------------------------");
  console.log ("-------------------- MENU --------------------------");
  console.log ("----------------------------------------------------");
  console.log ("Instrucciones: Elige la opción que deseas realizar");
  console.log ("                                                    ");
  console.log ("1. SUMAR");
  console.log ("2. RESTAR");
  console.log ("3. SALIR");
  
  alert("Abre la consola para visualizar");
  const opcion = parseInt(prompt ('Ingresa la operación que deseas realizar'));
  
  switch (opcion){
    case 1:
      var num1 = parseInt(prompt ("Ingresa tu primer número"));
      var num2 = parseInt(prompt ("Ingresa tu segundo número"));
      var suma = num1 + num2;
      alert("Abre la consola para ver el resultado");
      console.log('La suma es: ' +  suma);
     // alert ('La suma es: ' +  suma );
      break;
    case 2:
      var num1 = parseInt(prompt ("Ingresa tu primer número"));
      var num2 = parseInt(prompt ("Ingresa tu segundo número"));
      var resta = num1 - num2;
      alert("Abre la consola para ver el resultado");
      console.log('La resta es: ' +  resta);
    //  alert ('La resta es: ' +  resta );
      break;
    case 3:
      alert("HASTA PRONTO");
    //  alert ('La resta es: ' +  resta );
      break;
    default:
      console.log("No has ingresado opción");
      //alert ('Hasta pronto!');
      break;
    }
   }
  
  




