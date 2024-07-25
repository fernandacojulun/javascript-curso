//var
var nombre = 'Juan';
var nombre = 'Pedro'; // Redeclaración permitida
nombre = 'Ana'; // Reasignación permitida


//let

let nombre = 'Juan';
let variable = 2.5
// let nombre = 'Pedro'; // Error: Redeclaración no permitida en el mismo ámbito
nombre = 'Ana'; // Reasignación permitida


//const
const nombre = 'Juan';
// const nombre = 'Pedro'; // Error: Redeclaración no permitida
// nombre = 'Ana'; // Error: Reasignación no permitida

//Nombre de las variables
let nombreApellido; // Válido
let $nombre; // Válido
let _nombre; // Válido
let nombre = 'Juan';
let Nombre = 'Pedro'; // Diferente variable
let  fora = 'Ana'; // Válido, pero no recomendado
if (true) {
    let nombre = 'Ana'; // Diferente variable
}
// let 1nombre; // Inválido
// let nombre-completo; // Inválido
// let var; // Inválido
// let function; // Inválido


