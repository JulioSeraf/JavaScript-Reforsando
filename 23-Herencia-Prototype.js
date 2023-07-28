// La Herencia es la capacidade de un un child de heredar caracteristica de un Father 

const Animal = function(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
};
Animal.prototype.sonar = function(){
    console.log('teste de metodo de function Construtora');
};
// Herancia Prototipica 
function perro(nombre,genero,tamanio){
    //Usamos el nombre "super" neste atributo pq cual trabajamos con las Class, usamos un metodo llamado Super() para hacer la herancia del objeto Father
    this.super = Animal;
    //los parametros de super son heredados de los parametros de Animal
    this.super(nombre,genero);
    this.tamanio = tamanio;
};

// Perro esta heredando de Animal
perro.prototype = new Animal();
perro.prototype.constructor = perro;

//Sobreescrivir metodos del prototype padre en el hijo
perro.prototype.sonar = function(){
    console.log('guaall,guauuull!!');
};

const rex = new perro('rex','macho','grande'),
    loly = new Animal('loly','hembra');

    rex.sonar()
    loly.sonar()