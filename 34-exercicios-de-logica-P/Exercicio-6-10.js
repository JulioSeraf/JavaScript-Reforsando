const enviar = document.querySelectorAll(`.enviar`);
//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
function vocalesConso(){
    displayDiv(2);
    enviar[2].addEventListener('click',()=>{
        let text = document.getElementById('email');
        text = text.
        if(text === '') return console.warn('No ingresaste el texto');
        if(typeof text !== 'string') return console.warn(`${text} no es un Texto`);
        let consoante = 0,
        vocales = 0,
        text1 = text;
        text = text.replace(/\s+/g , '');
        console.log(text)
        text.value.split('').forEach(letra => { 
            if(new RegExp('[aeiouAEIOU]',"g").test(letra)){
                vocales++;
            }else{
                consoante++;
            };
        });
        return console.info(`El texto "${text1}" contiene un total de ${vocales} vocales y un ${consoante} consoantes`);
    })
};
// vocalCosoante('julio serafim');
//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
function nombres(){
    displayDiv(1);
    const nombreValido = (nombre = undefined)=>{
    if(nombre === undefined)return console.warn('No ingresaste un Nombre');
    if(typeof nombre !== 'string'|| new RegExp("[^a-zA-Z ]",'g').test(nombre)) return console.warn(`"EL nombre no puede contener numeros o caracteres especiales`);
    return console.info(`El nombre "${nombre.replace(/\s+/, ' ')}" es valido`)
}};
// nombreValido('julio');

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function emails(){
    displayDiv(0);
    const correEl = (corre = undefined)=>{
    if(corre === undefined) return console.warn('No ingresaste un corre.');
    if(typeof corre !== 'string' || new RegExp("[^a-zA-Z.,@_]-").test(corre)) return console.warn('No ingresaste un email valido');
    if(!new RegExp('(@gamil.com)').test(corre)) return console.warn('Corre invalido');
    return console.info(`El corre : "${corre}" es correto.`);
}};

function displayDiv(id){
    const dis = document.querySelectorAll('.div');
    dis.forEach((item,i)=>{
        if(i === id){
            item.style.display = `block`;
        }else{
            item.style.display = 'none';
        };
    });
};