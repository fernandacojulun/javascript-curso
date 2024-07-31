function cuadradonumero(){
  var numero = parseInt(prompt ('Ingresa un numero'));
  
  while(numero >= 0){
    var cuadrado = numero * numero;
    numero = alert('El cuadro de ese numero es: '+ cuadrado );   
    numero = parseInt(prompt ('Ingresa un numero: '));
  }
  alert('Has ingresado un número negativo');
}

function negativoVrsPositivo(){
  var numero = parseInt(prompt ('Ingresa un numero'));
  
  do{
    if(numero >= 0){
      alert('El número es positivo');
      numero = parseInt(prompt ('Ingresa un numero: '));
      
    }
    else{
      alert('El número es negativo');
      numero = parseInt(prompt ('Ingresa un numero: '));
    }  

  }
  while(numero != 0) 

 }

 function parEimpar(){

  var numero = parseInt(prompt ('Ingresa un numero para determinar si es par o impar'));
  do{
        if (numero % 2 == 0){
          alert ("El " + numero + "  es numero Par");
          numero = parseInt(prompt ('Ingresa un numero para determinar si es par o impar'));
        }
        else{
          alert ("El " + numero + "  es numero Impar");
          numero = parseInt(prompt ('Ingresa un numero para determinar si es par o impar'));
        } 
  }
  while(numero != 0)   

}

function suma(){
  let suma=0;
  let cont=0; 

  do{
    while(suma >=0){
      let numero = parseInt(prompt("Pone un numero"));
      if(!isNaN(numero)){
        console.log(`Sumando: ${numero}`);
        suma += numero;
        cont++;
      }
      else{
        alert("Eso no es un número");
      }
      console.log(`la suma total es de: ${suma}`);
      console.log(`El total de numeros introducidos es ${cont}`);
  } 
  
}
  while(numero != 0) 
}