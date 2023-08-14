const numero = document.getElementById('num'),
    result = document.querySelector('.res'),
    celsius = document.getElementById('ce'),
    fahrenheit = document.getElementById('fa'),
    displayTem = document.querySelector('.temp'),
    revez = document.getElementById('revert');
/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const primo = (num = '')=>{
    limpiar();
    result.innerHTML = '';
    if(num === '') return result.innerHTML = `No ingresaste numero!`;
    if(num === '0') return result.innerHTML = `El numero no puede ser 0`;
    if(Math.sign(num) === -1) return result.innerHTML = `El valor no puede ser Negativo`;
    num = parseInt(num);
    let primo = 0;
    for(let i = 1; i <= num; i++){
        if(num%i === 0) {
            primo++;
        };
    };
    if(primo === 2){
        result.innerHTML = `${num} es primo`;
    }else{
        result.innerHTML = `${num} NO! es  primo`;
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

revez.addEventListener('click',()=>{
    if(revez.value === 'Valor ºF'){
        celsius.style.display ='none';
        celsius.value = '';
        result.innerHTML = 'Converter aqui';
        fahrenheit.style.display = 'block'; 
        revez.value = 'Valor ºC'
    }else if(revez.value === 'Valor ºC'){
        celsius.style.display ='block';
        fahrenheit.value = '';
        result.innerHTML = 'Converter aqui';
        fahrenheit.style.display = 'none'; 
        revez.value = 'Valor ºF'
    };
});
function graFah(cel = '', fal = ''){
    cel = parseInt(cel);
    fal = parseInt(fal);
    result.innerHTML = '';
    (revez.value === 'Valor ºF')
        ? result.innerHTML = ((cel*1.8)+32).toFixed(3) + ' ºF'
        : result.innerHTML = ((fal - 32)/1.8 ).toFixed(3 )+ ' ºC';
};
document.getElementById('temp').addEventListener('click',()=>{ displayTem.style.display = "block";
result.innerHTML = 'Converter aqui';
});
result.addEventListener('click', ()=>{
    graFah(celsius.value, fahrenheit.value)
});
function limpiar(){
    result.innerHTML = '';
    displayTem.style.display = 'none';
};
document.getElementById('limpiar').addEventListener('click',()=>limpiar());