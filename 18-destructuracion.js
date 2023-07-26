// Destructure o Destructuracion es un nueva forma de asignar valores a Arrays y Objetos en JavaScript

// Con Array []-------------------
let numeros = [1,2,3];
 // sin Destruturacion asignando cada valor del array a una variavel 
 let uno = numeros[0],
     dos = numeros[1],
     tres = numeros[2];

console.log(uno,dos,tres);
// Con destructuracion
const[one,two,three] = numeros;

console.log(one,two,three)

// con Objetos {}----------------
const persona = {
    nombre: 'julio',
    apellido: 'Serafim',
    edad: '26'
};

// Muy importante que el nombre de la varivel criada en los Objetos para hacer las destruturacion sea igual que su propiedad neste caso nombre(propiedade Objeto) = nombre(variavel de destructuracion)
let{nombre,apellido,edad}= persona;
console.log(nombre, apellido,edad);