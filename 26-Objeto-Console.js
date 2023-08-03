//Objeto console 
console.log(console);
// Es el objeto que nos da acesso a la consola de la pagina, y viene con varios metodos de uso

// METODO log(), carrega lo que asignamos a la consola, un geristro de lo que a passado en la aplicacion,
console.log('Esta carregado!');

// METODO error carrega un error a la consola
console.error('Esto es una message de error');

// METODO warn muestra un aviso a la consola
console.warn('este es un aviso');

// METODO info  mostra una informacio en la cosola
console.info('Estas avisado');

// variavel de teste
let nombre = 'Julio',
    edad = 26,
    apellido = 'Serafim';

// podemos llamar las variaveis por separado con varios consoles
console.log(nombre);
console.log(edad);
console.log(apellido);
// o lo simplificamas en un solo console.log()
console.log(nombre,apellido,edad);

// tbam podemos criar un texto 
console.log(`Hola mi nombre es${nombre} ${apellido} y tengo ${edad} años`);

// tbm podemos usar comodines % para asignar las variaveis al texto, para texto usamos %s ("s" de string) y %d ("d" para digitos) y al fina del texto asignamos as variaveis que queremos en ordens 

console.log(`Hola, me llamo %s %s y tengo %d anos` ,nombre,apellido,edad);

// METODO clear() = limpia la consola

console.clear();

// METODO dir() = Con dir() podemos mostrar en cosola un elemento en forma de Objeto para ver todos sus metodos 
 // ex: document
 console.log(document); // nos mostra como elemento // ESTA ATUALIZADO, JA NOS MOSTRA COMO Objeto
 console.dir(document); // nos mostra como Objeto 

 // METODO group() y groupEnd() = Cria un grupo de console 

 console.group('Apreendendo FrontEnd Dev');
    console.log('Primero HTML');
    console.log('Segundo CSS');
    console.log('Tercero Logica de Progamación');
 console.groupEnd();
//  groupColapsed es igual al group
 console.groupCollapsed('Apreendendo FrontEnd Dev');
 console.log('Primero HTML');
 console.log('Segundo CSS');
 console.log('Tercero Logica de Progamación');
console.groupEnd();

// METODO table() = nos mostra lo Objeto consola en forma de table
console.table(Object.entries(console));

// con Arrays 
const number = [1,2,3,4,5,6],
    vocales = ["a","e","i","o","u"];
console.table(number);
console.table(vocales);
//con Objetos igual
 const perro = {
    nombre: 'rex',
    raza: 'pincher',
    genero:'macho'
 };

 console.table(perro);
 console.clear();
 // METODO time() = Es usado para saber el tiempo intemedio que tarda la peticion de un app, para calcular el redimiento de un aplicación

 console.time('Tiempo');

 const arreglos = Array(1000000); // array de 1000000 posiciónes
 
 for(let i in arreglos){
    arreglos[i] = i;
 };
 console.timeEnd('Tiempo');

 console.clear();

// METEDO count() = conta las vezes que un codigos se esta executando
 
for(let i = 0; i < 10; i++){
    console.count('Execución');
    console.log(i);
};
console.clear();

// METODO assert() = Se utiliza para hacer una Prueba Logica, Primero colocamos la condicion , despues asignamos las variaveis  entre [], y la respuesta al final 

const x = 3,
    y = 2,
    pruebaXY = 'Se espera q X ses menor q Y';

console.assert(x< y,[x,y],pruebaXY);
