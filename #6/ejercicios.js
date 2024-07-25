function comparacion() {
  var numeroUno = prompt ("Ingresa el primer numero a comparar");
  var numeroDos = prompt ("Ingresa el segundo numero a comparar");

  if(numeroUno === numeroDos ){
    alert ('Los números ' + numeroUno+ ' y '+ numeroDos + ' son iguales' );
  }
  else
  alert ('Los números ' + numeroUno +' y ' + numeroDos + ' no son iguales' );
}

function PositivoYNegativo() {
  var numero = prompt ("Ingresa el número que deseas comparar");

  if(numero > 0 ){
    alert ('El número ' + numero+ ' es '+ 'Positivo' );
  }
  else
  alert ('El número ' + numero+ ' es '+ 'Negativo' );
}

function ordenMayorMenor(num1,num2) {
  let myArr = [0, 0];
  myArr.map((x,i, arr) => (arr[i] = prompt("Ingresa un número")));
  myArr.sort((a,b) =>{
  if (a == b){
    return 0;
  }
  if (a > b){
    return -1;
  }
    return 1;
  });
  
  alert(myArr);
}

function ordenMenorMayor(num1,num2,num3) {
  let myArr = [0, 0, 0];
  myArr.map((x,i, arr) => (arr[i] = prompt("Ingresa un número")));
  myArr.sort((a,b) =>{
  if (a == b){
    return 0;
  }
  if (a > b){
    return -1;
  }
    return 1;
  });
  
  alert(myArr);
}