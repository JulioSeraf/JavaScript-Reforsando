//THIS Es una palabra reservada que hace referencia al objeto que estamos invocando

// se invocamos el this directamente en el cosole
console.log(this) // Nos devolver el objeto global windows
console.log(window)
console.log(this === window)// => true

//Se puede criar un variavel con this
this.nombre = 'Contexto global';
console.log(nombre);

function imprimir(){
    console.log(this.nombre)
};
imprimir();

// se criamos una function con la misma function de imprimir , la variavel this respeitara el scope local de la variavel 
const obj = {
    nombre: 'contexto Objeto',
    imprimir: function(){
        console.log(this.nombre)
    }
};
obj.imprimir();
//el mismo pasa se la criamos com un shorthand
const obj2 = {
    nombre: 'Contexto Objeto 2',
    imprimir
};

obj2.imprimir()
// ahora se lo criamos com una  arrow function, ya que este tipo de functionn no cria su scope , lo que hace es que el contexto de la palabra this lo agarrar directamente del objeto father neste caso el objeto global Windows
const obj3 = {
    nombre: 'contexto Objeto 3',
    imprimir: ()=>{
        console.log(this.nombre)
    }
}
obj3.imprimir()

function Persona(nombre){
    // antes de las arrow fuction para solucionar el pasar paramentro a una function anonimal desde otra function se criaba un variavel y le passava el this.
    //ex: var that = this; 
    // that.nombre = nombre;
    this.nombre = nombre;
    // return console.log(this.nombre)

    // se retornamos un fuction sin un parametro nombre a agarrar, ell lo corre del constexto Goblal => windowns 
    // return function(){
    //     console.log(this.nombre); => Retorna "Contexto global"
    // }
    // ahora se criamos una arrow function aqui, como no cria un scope, el agarra el contexto de nombre de su objeto father neste caso => functio persona
    return ()=>{
        console.log(this.nombre); // return "julio" el parametro que recibe la fuction father persona
    }
};

let julio = new Persona('julio');
julio();