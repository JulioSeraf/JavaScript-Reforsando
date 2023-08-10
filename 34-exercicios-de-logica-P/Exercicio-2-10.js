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
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
document.getElementById('pali').addEventListener('click',()=>{
    if(!text.value) return res.innerHTML = 'Informe una Palabra';
    let pNormal = text.value;
    let pReverse = text.value.split('').reverse().join('');
    if(pNormal === pReverse) return res.innerHTML = `La palabra ${pReverse} es un Palíndrono`;
    return res.innerHTML = 'La palavra informada nos un Palíndrono';
});
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

//Lipiador 
document.getElementById('limpiar').addEventListener('click',()=>{
    text.value = '';
    res.innerHTML = '';
    divPalabra.style.display = 'none';
    divRenplace.style.display = 'none';

});