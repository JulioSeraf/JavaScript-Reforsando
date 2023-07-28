//La Clase en JavaScript es mas para facilitar las escritura (un azucar sintatico), ya que JavaScript es un linguaje orientado a objeto baseado en Prototype 
class Animal{
    //Las Clases no reciben parametros para isso tenemons un metodo llamado Constructor
    constructor(nombre,genero){
    //Aqui es donde definimos los atributos con los paramentros
    //Atributos 
        this.nombre = nombre;
        this.genero = genero;
    }
    // los metodos en las Classe ja son criando dentro del Prototype, envitando su duplicacion y el desperdicio de memoria
    //metodos
    sonar(){
        console.log('teste de metodo de function Construtora');
    };
    saludar(){
        console.log(`hola me llamo ${this.nombre}`);
    };
};
//Para hacer que una clase herede caracteristica de otra clase usamoa la paralavra reservada "extends"

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //usamos el metodo Super() para hacer la herencia de las Classe Animal
        super(nombre,genero);
        this.tamanio = tamanio;
    };
    // al usar el mesmo metodo de animal el perro lo pedomos subescrivir
    sonar(){
        console.log('soy un perro !!');
    };
    // y criar nuevos metodos sin afetar la class Animal
    ladra(){
        console.log('guauuu!!');
    };
};
const perry = new Perro('perry','macho','GRANDE'),
    jerry = new Animal('jerry','Hembra');
    perry.sonar();
    perry.ladra();
    jerry.sonar();

    console.log(perry,jerry)