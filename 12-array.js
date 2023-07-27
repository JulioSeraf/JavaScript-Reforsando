// ARRAY [] son espacios en memoria que podemos guardar varios valores como numero, string, boleanos, functiones y hasta mesmo otros arrays y objestos

// criamos array com [] asignando a una variavel

const array = [];

// y dentro deste [] asignamos sus valores 

const arry = ['julio', 24, false, unaFunction(),[1,2,3]];

// para asesar a su valores tbn usamos [] con a posicion(indice) del valores derseados, lembrando que a posicion inicial de un array es 0  

 // al dale la en indice 0 asesamos a al valor de string "julio" correspondente al arry
 arry[0];
 // consecutivamente podemos assesar la functicion dentro del arry dando su posicion correspondente neste caso 3
 arry[3];

 // tbn podemos criar array com la propiedad Array

 const arrayDeString = Array.of('julio','serafim');

 // Usando el metodo fill() podemos criar un array con varias posicion de una sola vez

 const arrayDeVariasPosicion = Array(50).fill(false);
 // hay varios metodos funcionais para Arrays unos de ellos es el forEach() q nos da asseso a cada valor y su indice de un Array 

 const arrayForEach = [1,2,3,4];
 arrayForEach.forEach((val,i)=>{
    console.log(`La primeira propiedad del la function nos da asseso al valor del array${val} , la segunda propiedad nos da asseso al indice del valor ${i}`)
 })
