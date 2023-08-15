const result = document.querySelectorAll('.res');
const disPlay = document.querySelectorAll('.dis');
//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function binarioDec(){
    clear(1)
    let valor = document.getElementById('num'),
        binario = document.getElementById('bin'),
        decimal = document.getElementById('dec');
        binario.addEventListener('click',()=>{
           if(valor.value === '') return result[1].innerHTML =`No ingresaste Valor a Coverter`; 
           if(new RegExp('[2-9]').test(valor.value)) return result[1].innerHTML = `El Valor ingresado solo puede ser 0 y 1`;
           let num = parseInt(valor.value);
           let bin = '';
           for(;num > 1;){
                bin = (Math.floor(num%2)).toString() + bin;
                num = num / 2;
           };
           return result[1].innerHTML = `El binario de "${valor.value}" es "${bin}".`;
        });
        decimal.addEventListener('click',()=>{
            if(valor.value === '') return result[1].innerHTML =`No ingresaste Valor a Coverter`;
            if(new RegExp('[2-9]').test(valor.value)) return result[1].innerHTML = `El Valor ingresado solo puede ser 0 y 1`;
            let num = (valor.value).split('').reverse();
            let dec =0;
            for(let i = 0; i < num.length; i++){
                dec += parseInt(num[i])*2**i;
            };
            return result[1].innerHTML = `El Decimal del Binario "${valor.value}" es "${dec}".`
        });
};
//Solucion Teacher
const convertirBD = (numero = undefined, base = undefined)=>{
    if(numero === undefined || base === undefined) return console.warn('No ingresaste un numero');
    if(typeof numero !== 'number') return console.warn(`El Valor "${numero}" ingresado, No es un numero`);
    if(typeof base !== 'number') return console.warn(`El Valor "${base}" ingresado, No es un numero`);
    if(base===2){
        return console.info(`El decimal del Binario ${numero} base ${base} = ${parseInt(numero, base)} base 10 `)
    }else if(base === 10){
        return console.info(`El decimal del Binario ${numero} base ${base} = ${numero.toString(2)} base 2`)
    }else{
        return console.error('El tipo de base a convertir no es correto');
    };
    
};
convertirBD(10011,10);
convertirBD(4,10);
// convertirBD();

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function desconto(){
    // disPlay[0].style.display = 'block';
    clear(0);
        document.getElementById(`but-desc`).addEventListener('click',()=>{
            let valor = document.getElementById('valor'),
            desc = document.getElementById('desc');
            valor = parseInt(valor.value);
            desc = parseInt(desc.value);
            console.log(desc)
            if(isNaN(valor)) return result[0].innerHTML = 'No ingresaste un valor para Descuelto';
            if(isNaN(desc)) return result[0].innerHTML = 'No ingresaste un descuelto para el valor';
            return result[0].innerHTML = `El Valor de $${valor} pos desconto de ${desc}% es $${valor - (valor*(desc/100))}.`
        });
};

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function anos(){
   result[2].innerHTML = '';
    clear(2);
    document.getElementById('calc').addEventListener('click',()=>{
        let date = document.getElementById('date');
    let hoy = new Date().toLocaleDateString();
    date = date.value.split('-')
    hoy = hoy.split('/');
    let ano = parseInt(hoy[2]) - parseInt(date[0]),
       mes = parseInt(hoy[1]) - parseInt(date[1]),
       dia = parseInt(hoy[0]) - parseInt(date[2]);
       console.log(mes)
       if(isNaN(ano)) return result[2].innerHTML = `No ingresaste el Año!`;
       if(isNaN(mes)) return result[2].innerHTML = `No ingresaste el Mes!`;
       if(isNaN(dia)) return result[2].innerHTML = `No ingresaste el Dia!`;
    return result[2].innerHTML = `Nasciste a ${ano} Años ${mes} mes(s) y ${dia} dia(s).`;
    });
    
};
// document.getElementById('limpiar').addEventListener('click',()=>{
//Limpador 
function clear(nu){
    disPlay.forEach((item,i) => {
        item.style.display = 'none';
        if(i === nu) item.style.display ='block';
    });
};

// document.body.style.backgroundColor = 'red';