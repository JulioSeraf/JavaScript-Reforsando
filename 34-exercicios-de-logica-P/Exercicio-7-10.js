
//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevarQ = (array = undefined)=>{
    if(array === undefined) return console.warn('No ingresaste el Array');
    if(!(array instanceof Array)) return console.warn('El valor ingressado no es un array');
    let result = [];
    for(i of array){
        if(typeof i !== 'number') return console.warn(`El valor ${i} No es un Numero`);
        result.push(Math.pow(i,2))
    }
    return console.info(`EL array ${array} elevando al cuadrado es ${result}`)
}
elevarQ([1,2,3,5]);



//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const menorMaior = (array = undefined)=>{
    if(array === undefined ) return console.warn(`No ingresaste un valor`);
    if(!(array instanceof Array)) return console.warn('El valor ingresado no es un array');
    for(i of array){
        if(typeof i !== 'number') return console.warn(`EL valor ${i}, No es un numero`);
    }
    array.sort(function(a,b){
        return a-b
    })
   return console.info(`EL numero mas alto del array [${array}] es ${array.pop()} y el mas bajo ${array.shift()}`)
}
menorMaior([2,6,7,88,-10,-30]);
//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
console.info("===========================================================")
const parImpar = (array)=>{
    if(array === undefined ) return console.warn(`No ingresaste un valor`);
    if(!(array instanceof Array)) return console.warn('El valor ingresado no es un array');
    let pares = [],
        impares =[];
    array.forEach(item =>{
        if(typeof item !== 'number') return console.warn(`El valor "${item}" ingresado no es un numero`)
        if(item % 2 === 0){
            pares.push(item);
        }else{
            impares.push(item);
        };
    });
    return console.info(`El array "${array}" continer los seguintes numero Pare: ${pares} y los seguinte numeros Impares ${impares} `)
};
parImpar([1,2,3,3,4,34,,5,3,2,3])