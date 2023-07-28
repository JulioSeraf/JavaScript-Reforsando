// Es una nueva forma de definir una fuction anonima, functiones que sean expresadas(asignadas a una variavel )
// Para criar una function arrown (flecha) usamos el simbulo de igual (=>)

let exFunctioFlecha = ()=>{
    console.log('Este es un exemplo de functio flecha');
};

// Caso nuestra function tenga solo una linea de codigo podemos omitir los {} 

let sinCochetes = ()=> console.log('Este es un exemplo de una function arrow de una line de codigo');

// tbn podemos omitir el retorn 
 
let sinReturn = (a,b)=> a+b; // retorna directo la suma de a+ + b;

// tbn podemos omitir los () caso a function reciba un parametro, caso hay mas de un parametro ya tienemos que usar los ()

let sinParentesis = nombre => console.log(`hola soy ${nombre}`);

// Una de las caracteristica de la as arrown function es que ellas saltan los contexto de los objtos que se encontran, por eso tenemos que tener cuidado al usarlas como metodos de objetos 

// Neste caso al usar una function declara , ella respeta el contexto del objeto que se encontra, nuestra palavra reservada THIS passa a ser el objeto Perro
const perro ={
    nombre: `rex`,
    funDeclarada: function(){
    console.log(this)
}}
perro.funDeclarada();

// Caso usamos el una function flecha nustro objeto THIS passa a heredar el contexto del objeto padre que se declar neste caso el WINDOWS

const gato ={
    nombre: `peludo`,
    funDeclarada:()=>{
    console.log(this)
}};
gato.funDeclarada();
