const numero = document.getElementById('num'),
    result = document.querySelector('.res'),
    celsius = document.getElementById('ce'),
    fahrenheit = document.getElementById('fa'),
    displayTem = document.querySelector('.temp');
/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const primo = (num = '')=>{
    limpiar();
    result.innerHTML = '';
    if(num === '') return result.innerHTML = `No ingresaste numero!`;
    if(num === '0') return result.innerHTML = `El numero no puede ser 0`;
    if(Math.sign(num) === -1) return result.innerHTML = `El valor no puede ser Negativo`;
    num = parseInt(num);
    console.log(num % 2);
    if(num % 2 === 1 && num / 1 === num){
        return result.innerHTML = `El numero ${num} es Primo`;
    }
};
document.getElementById('primo').addEventListener('click',()=> primo(numero.value));
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar =(num = '')=>{
    limpiar();
    num = parseInt(num);
    (!num)
    ? result.innerHTML = `No ingresaste un Numero`
    :(num % 2 === 1)
    ? result.innerHTML = `El numero ${num} es Impar`
    : result.innerHTML = `El numero ${num} es Par`;
};
document.getElementById('par-impar').addEventListener('click',()=> parImpar(numero.value));
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const reverter = ()=>{
    document.getElementById('revert').addEventListener('click',()=>{
        celsius.ariaPlaceholder = 'JULI'
    })
} 
reverter();
const graFah = (cel = '', fal = '')=>{
    cel = parseInt(cel);
    fal = parseInt(fal);
    result.innerHTML = '';
    let reves = true;


    // switch(valor = 'ce'){
    //     case 'ce':
    //         result.innerHTML = (fal - 32)/1.8;
    //     break;
    //     case 'fa':
    //         result.innerHTML = (cel*1.8)+32;
    //     break;
    // };

};
document.getElementById('temp').addEventListener('click',()=>{
    displayTem.style.display = "block";
   graFah(celsius,fahrenheit); 
});

function limpiar(){
    result.innerHTML = '';
    displayTem.style.display = 'none';
};
document.getElementById('limpiar').addEventListener('click',()=>limpiar());