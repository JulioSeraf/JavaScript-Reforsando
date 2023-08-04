
// Estos 3 metodos son del Objeto Windows, son metodos que nos permite enteractuar con el usuario

// METODO Windows.alert() = como diz el nombre nos mostra un alerta para el usuario 
window.alert('Este un Messagen de Alerta para el usuario');

// METODO Windows.confirm() = Mostra un mensaje de conformacion para el usuario confirmar si o no 
let respuesta = window.confirm('Dime que si !!'); // se le da a ACEPTAR = true , CANCELAR = false
console.log(respuesta) // false or true
// METODO windows.prompt() = Permite que el usuario ingresar una rspuesta/valor

 let nombre = window.prompt('CUAL TU NOMBRE?');
 console.log(nombre); // respuesta de Usuario


