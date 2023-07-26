// Parametros REST son una forma de ir agregando virtualmente paramentros infinitos detro de una function

// Para criar un REST adicionamos 3 putos delante do paramentro desejado neste caso ' ...C '
function sumar(a,b,...c){
    let resultado = a+b;
    c.forEach(function(n){
        resultado +=n;
    });
    return resultado;
}
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));


// Operador de propagacion o Spread Operator 

const arr1 =[1,2,3,4,5],
      arr2 =[6,7,8,9,0];
//criamos un 3 array de 2 posicon, cada uno con su 5 posioncion ;
const arr3 = [arr1,arr2],
// ya con spread adicionando los ... al principio de array podemos fazer a juncion de los dos array en uno
      arr3V2 = [...arr1,...arr2];
console.log(arr3);
console.log(arr3V2);
