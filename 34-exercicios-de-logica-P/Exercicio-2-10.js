const text = document.getElementById('text'),
    res = document.querySelector('.res'), 
    reverir = document.getElementById('revez'),
    divPalabra = document.querySelector('.palabra'),
    divRenplace = document.querySelector('.renplace');

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const revez =(texto = '') => (!texto)
    ? res.innerHTML = 'Informe un texto para Inverter'
    : res.innerHTML = texto.split('').reverse().join('');
reverir.addEventListener('click',() => {
    divPalabra.style.display = 'none';
    revez(text.value);
 });
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
document.getElementById('busPa').addEventListener('click',()=>{
    res.innerHTML = '';
    let palabra = document.getElementById('palaBusca');
    if(!text.value) return res.innerHTML = 'Informe un texto';
    divPalabra.style.display = 'block';
    document.getElementById('buscar').addEventListener('click',()=>{
        let cont = 0;
        if(!palabra.value) return res.innerHTML = 'Incriva la palabra que quieres buscar';
        res.innerHTML = '';
        text.value.split(' ').forEach(pala => {
            if(pala.includes(palabra.value)){
                cont++;
            };
        });
        return res.innerHTML = `La palabra ${palabra.value} se repite ${cont} en el texto`
    });
});
// Solución Teacher 
const textoEnCandena = (cadena = '', texto= '')=>{
    if(!cadena) return console.warn('No ingresaste el texto largo');
    if(!texto) return console.warn('No ingresaste el Texto a buscar');

    let i = 0,
        con = 0;

    while(i !== -1){
        i = cadena.indexOf(texto,i);
        if(i!== -1){
            i++;
            con++;
        };
    };
    return console.info(`La palabra ${texto} se repete ${con} veces`);
};
textoEnCandena('hola mundo, hello mundo', 'mundo')
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
document.getElementById('pali').addEventListener('click',()=>{
    if(!text.value) return res.innerHTML = 'Informe una Palabra';
    let pNormal = text.value.toLowerCase();
    let pReverse = text.value.toLowerCase().split('').reverse().join('');
    if(pNormal === pReverse) return res.innerHTML = `La palabra ${pReverse} es un Palíndrono`;
    return res.innerHTML = 'La palavra informada nos un Palíndrono';
});
//

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
document.getElementById('cambiar').addEventListener('click',()=>{
    let oldString = document.getElementById('old'),
        newString = document.getElementById('new');
    if(!text.value) return res.innerHTML = 'Informe el Texto';
    divRenplace.style.display= `block`;
    res.innerHTML = text.value;
    document.getElementById('but-cambiar').addEventListener('click',()=>{
        res.innerHTML = text.value.replaceAll(oldString.value,newString.value);
    });
});
//Solución Teacher 
const eliminarCaracters = (texto = '', patron = '')=>{
    (!texto)
    ? console.warn('No ingresaste un texto')
    :(!patron)
    ? console.warn('No ingresaste un patron')
    :console.info(texto.replace(new RegExp(patron,"ig"),''));
};
eliminarCaracters('JULIO SERAFIM DE OLIVEIRA','DE OLIVEIRA')
//Lipiador 
document.getElementById('limpiar').addEventListener('click',()=>{
    text.value = '';
    res.innerHTML = '';
    divPalabra.style.display = 'none';
    divRenplace.style.display = 'none';

});