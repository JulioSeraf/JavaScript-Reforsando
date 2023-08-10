const text = document.getElementById('text'),
res = document.getElementById('resCot');
const diplayOn = document.getElementById('cortar');
const diplayRep = document.querySelector('.repetir');

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
// solucion teacher
const contarCaracteres = (cadena = '')=> 
    (!cadena)
    ? console.warn('No existe texto para contar')
    : console.info(`El texto ${cadena} contiene ${cadena.length} caracteres`);

contarCaracteres('julio');

/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
function cortar(){
    res.innerHTML = '';
    let corIni = document.getElementById('inicio'),
    corFim = document.getElementById('fim'),
    butCort = document.getElementById('but-corte');
    if(text.value === ''){
        res.innerHTML = 'Informe un texto a Recortar'
    }else{
        diplayOn.style.display = 'block';
    }
    butCort.addEventListener('click',()=>{
        diplayOn.style.display = 'none';
        if(text.value === ''){
            res.innerHTML = 'infome un texto a recortar'
        }else if(corFim.value === ''){
            res.innerHTML = 'informe el fim de corte';
        }else{
            res.innerHTML = text.value.slice(corIni.value,corFim.value)
        };
    });

};
// solución teacher 
const cortarString = (cadena = '', longitud = undefined)=> (!cadena)
    ? console.warn('No ingresaste texto')
    : (longitud === undefined)
    ? console.warn('No ingresaste longtud para el corte de texto')
    : console.info(cadena.slice(0,longitud));

cortarString('Hola mundo !!',5);
cortarString();
cortarString(`hola mundo`);
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
// solución Teacher
const separarTexto = (cadena ='', separador = undefined) => (!cadena)
    ? console.warn('No ingresaste texto para Separar')
    :(separador === undefined)
    ? console.info('No adicionaste el separador')
    : console.info(`Segue la separación del Texor ${cadena.split(separador)}`);
    
separarTexto("julio serafim de no Oliveira",' ');
separarTexto();
separarTexto('hola texto');
/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
function repetir(){
    res.innerHTML = '';
    let numRep = document.getElementById('rep');
    if(text.value === ''){
        res.innerHTML = 'Informe un texto a Repetir'
    }else{
        diplayRep.style.display = 'block';
        document.getElementById('but-rep').addEventListener('click',()=>{
            diplayRep.style.display = 'none';
             res.innerHTML = text.value.concat(`<br>`).repeat(numRep.value);
        });
    };
};
// solución Teacher
const reString = (cadena = '', numRe = undefined)=>{
    if(!cadena) return console.warn('No ingresaste texto');
    if(numRe === undefined) return console.warn('Informe cuantas veses quieress repetir el texto');
    if(numRe === 0 ) return console.warn('El numero de repetición no puede ser 0');
    if(Math.sign(numRe) === -1) return console.warn('El numero de repetición no pude ser negativo');
    return console.info(cadena.repeat(numRe));
};

reString(`julio`,4);
reString();
reString('mano ');
reString('juñio', -5);
reString('maluco',0)
//lipiador
document.getElementById('limpiar').addEventListener('click',()=>{
    text.value = '';
    res.innerHTML = '';
    diplayOn.style.display = 'none';
    diplayRep.style.display = 'none';
});