const result = document.querySelectorAll('.res');
//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
function binarioDec(){
    let valor = document.getElementById('num'),
        binario = document.getElementById('bin'),
        decimal = document.getElementById('dec');
        binario.addEventListener('click',()=>{
           if(valor.value === '') return result[1].innerHTML =`No ingresaste Valor a Coverter`; 
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
            let num = (valor.value).split('').reverse();
            let dec =0;
            for(let i = 0; i < num.length; i++){
                dec += parseInt(num[i])*2**i;
            };
            return result[1].innerHTML = `El Decimal del Binario "${valor.value}" es "${dec}".`
        });
};

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function desconto(){
    let valor = document.getElementById('valor'),
        desc = document.getElementById('desc');
        valor = parseInt(valor.value);
        desc = parseInt(desc.value);
        document.getElementById(`but-desc`).addEventListener('click',()=>{
            return result[0].innerHTML = `El Valor de ${valor} pos desconto de ${desc}% es $${valor - (valor*(desc/100))}.`
        });
};

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// document.body.style.backgroundColor = 'red';