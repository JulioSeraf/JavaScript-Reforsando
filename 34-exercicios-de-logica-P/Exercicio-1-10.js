/*

4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */


const text = document.getElementById('text'),
res = document.getElementById('resCot');

/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

function contador(){
    res.innerText = '';
    let num = [1,2,3,4,5,6,7,8,9,0];
    let valida = false;
    for(let i in num){
        if(text.value.includes(num[i])){
            valida = true;
        }
    }
    if(valida === true){
        res.innerText = 'El texto no puede contener numeros';
    }else if(text.value == ''){
        res.innerText = 'Informe un texto para hacer la contagem';
    }else if(text.value.length >= 1){
        res.innerHTML = 'El texto contiene un total de ' + `<br><strong>${text.value.length}</strong><br>` + ' caracteres.';
    };
};

/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
function cortar(){
    
}

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function separarString(){
    res.innerHTML = '';
    let textS = text.value.split(' ');
    if(textS[0] === '' &&  textS.length === 1){
        res.innerHTML = 'Informe el texto que quieres separar';
    }else if(textS.length === 1){
        res.innerHTML = 'El texto solo contiene la palavra ' + `<br><strong>${textS}</strong>`;
    }else if(textS.length > 1){
        textS.forEach((string,inde ) =>{
            res.innerHTML += `<strong> ${inde} ${string}</strong><br>`;
        });
    };
};