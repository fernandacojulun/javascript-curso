class cuentabancaria{
  saldo;
  static saldoActual = 0;

  constructor(saldo) {
    this.saldo = saldo;
    cuentabancaria.saldoActual++; 
  }

acreditar (numero)
{

  this.saldo += numero;

}

debitar (numero)
{
  if(numero <= this.saldo){
    this.saldo -= numero
  }

}

static mostrar() {
  console.log(`saldo - ${this.saldo}`)
}

}

let cuenta1 = new cuentabancaria();
let cuenta2 = new cuentabancaria();

cuenta1.acreditar(500);
console.log(cuenta1.saldo);
cuenta2.debitar(100);
console.log(cuenta2.saldo);


 