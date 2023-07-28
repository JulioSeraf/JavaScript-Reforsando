// Dentro de la progamacion Orientada a Objetos (POO)
/* 
Clases - Modelo a seguir
Objeto - Es una instacia de una clase
    Atributos - es una caracteristica o Propiedad de un objeto(son variaveis dentro de un Objeto)
    Métodos - Son las aciones que un objeto puede Realizar(son functiones dentro de un Objeto)
*/

// aqui criamos dos objetos , com caracteristicas y metodos iguales , pero hemos tenido que copiar y colar , lo que nos muy funcional 
const animal1= {
    nombre: 'Sunny',
    navegar(){
        console.log('Estoy a navegar!!');
    }
};

const animal2 = {
    nombre: 'Merry',
    navegar(){
        console.log('Ya no Navego!!');
    }
};

console.log(animal1);
console.log(animal2);
// Para construir varios objetos criamos una function construtora ( Una function genera un Prototapy vacio)

function Animal(nombre,genero){
    // Importante: dentro de una function Construtors tanto los atributos, como los metodos dever ser criados com la palavra reservado THIS

    //Atributos 
    this.nombre = nombre;
    this.genero = genero;
    //metodos
    this.sonar = function(){
        console.log('teste de metodo de function Construtora');
    };
    this.saludar = function(){
        console.log(`hola me llamo ${this.nombre}`);
    };
};

// Para criar un novo objeto baseado en la function costrutota Animal usamos la palavra reservado NEW

const merry = new Animal('merry','Hembra'),
      sunny = new Animal('Sunny','Macho');

console.log(merry,sunny);
// Como podemos ver se criamos metodos dentro del construtos, estes se repenten para cada objeto nuevo criado
merry.sonar();
merry.saludar();
sunny.sonar();
sunny.saludar();

// Lo correto seria criar los metodos fuera de la function construtora y si dentro de su Prototipo

// Function Construtota donde asginamos los metodos al prototipo no a la function como tal 

const Humano = function(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
}
// Para cria los metodos fuera de la function construtora primero llamamos el nombre de la function neste caso "Humano" seguido de la palavra reservada "prototype" y del metodo a criar 
const julio = new Humano('Julio','Hombre'),
    carla = new Humano('Carla','Mujer');

Humano.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre}`)
};
// pasando los metodos para lo Prototype mejoramos muchos nuestro gendimento de memoria de nustro programa
console.log(julio,carla)
julio.saludar();