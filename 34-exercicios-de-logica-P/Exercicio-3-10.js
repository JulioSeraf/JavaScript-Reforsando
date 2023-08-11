const result = document.getElementById('res'),
    numero = document.getElementById('num');
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const aleatorio = document.getElementById('aleatorio').addEventListener(`click`,()=>{
   let numAle = 0;
   while(numAle < 500){
    numAle = Math.trunc(Math.random()*600);
   }
   return (result.innerHTML = numAle, numero.value = numAle);
});
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicúa = document.getElementById('but-igual').addEventListener('click',()=>{
    let nu1 = numero.value,
        nu2 = numero.value.split('').reverse().join('');
        console.log(nu2);
        (nu1 !== nu2)? result.innerHTML = 'false':result.innerHTML = 'true';
});
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = document.getElementById('but-fac').addEventListener('click',()=>{
    let tot = 1;
    for(let i = 1; i <= numero.value; i++){
        tot *= i;
    };
    console.log(tot)
    return result.innerHTML = tot;
});

document.getElementById('limpiar').addEventListener('click',()=>{
    result.innerHTML = 0;
})