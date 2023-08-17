// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const numOrganizados = (arr = undefined)=>{
    if(arr === undefined || arr.length === 0) return console.warn('No ingresaste valor');
    if(!(arr instanceof Array)) return console.warn('El valor ingresado no es array');
    arr.forEach(item => { if(typeof item !== 'number') return console.info(`El valor "${item}" no es un Numero`)});
    return console.info([
        arr.slice().sort((a,b)=> a-b),
        arr.slice().sort((a,b) => b-a)
    ]);
};
numOrganizados([2,4,5,7,2,2])
// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const igualNo = (arr)=>{
    if(arr === undefined || arr.length === 0) return console.warn('No ingresaste valor');
    if(!(arr instanceof Array)) return console.warn('El valor ingresado no es array');
    let nerArray = [];
    for ( i of arr){
        if(!nerArray.includes(i)){
            nerArray.push(i)
        };
    };
    return console.info([
        nerArray,
        arr.filter((value, index, self) => self.indexOf(value)=== index),
        // Set es un Metodo que cria un Objeto que su no adimete do duplicaciones de elementos. 
        new Set(arr)
    ])
    ;
};

igualNo([1,2,3,3,4, 'julio','julio',76,43])
// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (arr)=>{
    if(arr === undefined || arr.length === 0) return console.warn('No ingresaste valor');
    if(!(arr instanceof Array)) return console.warn('El valor ingresado no es array');
    arr.forEach(item => {if(typeof item !== 'number') return console.warn(`El valor "${item} no es un numero"`)});
    let tot = 0;
    for(i of arr){
        tot += i;
    };
    return console.log((tot / arr.length).toFixed(1));
}
promedio([2,4,5,3,4,5,10])