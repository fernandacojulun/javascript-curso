/* Fernanda María Mercedes Cojulún
   2017-000740 */

function recibir() {
  var numeroUno = prompt ("Ingresa el primer numero");
  var numeroDos = prompt ("Ingresa el segundo numero");
  alert ('Los números ingresados son: ' + numeroUno + ' y ' + numeroDos);
}

function nombre() {
  var nombre = prompt ("¿Cúal es tu nombre?");
  alert ('¡Buneas Noches: ' + nombre + '!');
}

function matematica() {
  var Numero1 = parseFloat(prompt ("Ingresa el primer numero"));
  var Numero2 = parseFloat(prompt ("Ingresa el segundo numero"));
  
  var suma = Numero1 + Numero2;
  var resta = Numero1 - Numero2;
  var multiplicacion = Numero1 * Numero2;
  var division = Numero1 / Numero2;

  alert ('Los números ingresados son: ' + Numero1 + ' y ' + Numero2 + '\n \n' +
         'La suma es: ' + suma + '\n' + 
         'La resta es: ' +resta+  '\n' +
         'La multi es: '+ multiplicacion+'\n' +
         'La division es: '+ division);
}

function centrigrados() {
  var grados = prompt ("Ingresa los grados Centígrados que deseas convertir");
  var formula = (grados * 9/5) + 32;
  alert (grados + ' Grados Centrígrados equivalen a =s ' + formula+ ' Grados Fahrenheit');
}


