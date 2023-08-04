// Este operadpr funciona ponendo 2 codiciones
// Cortocircuito OR = Cuando el valor de la izquerda de la expresión valida true, es el valor que se cargara por defecto 

console.log(true || 'valor de la derecha'); // true
console.log('tudo ok'|| 'valor de la derecha'); // tudo ok
console.log( 2 || 'valor de la derecha');  // 2
console.log( false || 'valor de la derecha'); // valor de la derecha
console.log( null || 'valor de la derecha'); // valor de la derecha
console.log( undefined || 'valor de la derecha'); // valor de la derecha
console.log( "" || 'valor de la derecha'); // valor de la derecha

console.clear();

// Cortocircuito AND = cuando el valor de la izquerda de la expresión valida false es el valor que cargara por defecto

console.log(true && 'valor de la derecha'); // true
console.log('tudo ok' && 'valor de la derecha'); // tudo ok
console.log( 2 && 'valor de la derecha');  // 2
console.log( false && 'valor de la derecha'); // valor de la derecha
console.log( null && 'valor de la derecha'); // null
console.log( undefined && 'valor de la derecha'); // undefined
console.log( "" && 'valor de la derecha'); // valor de la derecha
