//Metodos privado es un metodo que solo pueder ser llamado dentro de la clase a que fue criado pero este tipo de metodo no esta presente en JavaScript

//Un Metodo estatico es aquel q se puede usar sin necessidad de estancia la a class
// Para isso usamos la palavra reservada Static
class Perro{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
ladrar(){
    console.log('guaauuu!!, guauuu!!')
};
static soyUnPerro(){
    console.log('Hola soy un perro!!, te lo pude provar mira');
    ladrar();
};
}

