const result = document.getElementById('res'),
    numero = document.getElementById('num');
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const aleatorio = document.getElementById('aleatorio').addEventListener(`click`,()=>{
   let numAle = 0;
   while(numAle < 500){
    numAle = Math.trunc(Math.random()*601);
   }
   return (result.innerHTML = numAle, numero.value = numAle);
});

// Solución Teacher 
const aleatorioTeacher = ()=> console.info(Math.round((Math.random()*100)+500));
aleatorioTeacher();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicúa = document.getElementById('but-igual').addEventListener('click',()=>{
    let nu1 = numero.value,
        nu2 = numero.value.split('').reverse().join('');
        console.log(nu2);
        (nu1 !== nu2)? result.innerHTML = 'false':result.innerHTML = 'true';
});
//Solución Teacher
const capicúaTeacher = (num = 0)=>{
    if(!num) return console.warn('No ingresaste un Número');
    if(typeof num !== 'number') return console.warn(`El valor "${numero}" ingresado No es un número`);
    num = num.toString();
    let nu1 = num,
        nu2 = num.split('').reverse().join('');

        (nu1 !== nu2)
        ? console.info(`No lo es, Numero Original ${nu1}, Numero al revés ${nu2}`)
        :console.info(`Si es Capicúa, Numero Original ${nu1}, Numero al revés ${nu2}`);
};
capicúaTeacher(22.22);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = document.getElementById('but-fac').addEventListener('click',()=>{
    let factorial = 1;
    for(let i = 1; i <= numero.value; i++){
        factorial *= i;
    };
    return result.innerHTML = factorial;
});

//Solución Teacher 
const factorialTeacher = (numero = undefined)=>{
    if(numero === undefined) return console.warn('No Ingresaste un NUMERO');
    if(typeof numero !== 'number') return console.error(`El valor "${numero}"ingresado no es un número`);
    if(Math.sign(numero) === -1) return console.error('El Numero no puede ser Negativo');
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *= i;
    };
    return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorialTeacher(5);


//Limpiador  
document.getElementById('limpiar').addEventListener('click',()=>{
    result.innerHTML = 0;
})