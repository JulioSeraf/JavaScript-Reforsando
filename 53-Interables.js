//Interable es una caracteristica que tiene algunas datos de JS

// Los tipos de objetos/datos interables son aquellos que podemos recorrer, como array, objetos, strings, map , set etc...

//incluso los elementos de DOM tienes caracteristica interable como los querySelectorAll

// resumindo el interable es el elemeto que esta a recorrer y el interador es el meacanismo que recorre dicho elemento 

// ejemplo de interador denemos el for in, for of

const interable = [1,23,1];
// accedendo al interador del interable
const interador = interable[Symbol.iterator]();

console.log(interable);

console.log(interador);

// para acceder a la propieda de in iterador usamos su metodo next() que como primero valor retorna el valor de la propiedad y el segundo valor el informa se ya se a terminado los valores 
console.log(interador.next()); //=> value :1 / done: false
console.log(interador.next()); //=> value :23 / done: false
console.log(interador.next()); //=> value :1 / done: true

// Par automatizar el percorrer del interador podemos usar um for in o neste caso un while hasta que el segundo valor de next informe que ya no hay propriedades
 let next = interador.next();

 while(!next.done){
    console.log(next.value);
    next = interador.next();
 };