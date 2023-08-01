//Metodos privado es un metodo que solo pueder ser llamado dentro de la clase a que fue criado pero este tipo de metodo no esta presente en JavaScript

// Los setters y getters son metodos especiales que nos permiten estabelecer y obteber los valores de atributos de nustra clases

//Un Metodo estatico es aquel q se puede usar sin necessidad de estancia la a class
// Para isso usamos la palavra reservada Static
class Perro{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
        // atributo criado para teste de metodo getters y setters
        this.raza = null;

    }
ladrar(){
    console.log('guaauuu!!, guauuu!!')
};
static soyUnPerro(){
    console.log('Hola soy un perro!!, te lo pude provar mira');
};
// Normalmente para destinguir que un metodo es getter o setters antes de criar su nombre anteponemos GET OR SET a su numbre
//Metodo getter(metodo obtenedor)
get getRaza(){
    // normalmente lo que hace un metodo obtenedor es retornar un valor
    return this.raza;
};
// Para criar un metodo estabelecedor(metodo que modifica el atributo/propiedad) usamos Set y le passamos un paramentro a usar para modiicar 

set setRaza(raza){
    // despues indicamos a cual atributo modificar neste caso this.raza
    this.raza = raza;
}
}
// estanciar la clase seria pasarles los paramentros o sea criar el objeto en si
const rex = new Perro('rex','macho');

// Para hacelar la llamada del metodo get , los hacemos como se fuera una propriedad, ya q apesar de ser un metodo JavaScript lo reconoce como Propiedad

console.log(rex.getRaza)// retorna null

// set seria igual, le pasamos el valor del parametro como proprieda y no como metodo

//pasamos el valor
rex.setRaza = 'danes';

// y lo llamamos en consola con get

console.log(rex.getRaza)
