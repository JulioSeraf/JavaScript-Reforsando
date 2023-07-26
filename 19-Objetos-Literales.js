// Objetos Literales es una nueva forma de escrivir atributos y metodos, tbn de asignalos

let nombre = 'julio';
let edad = 26;

const persona = {
    nombre: nombre,
    edad: edad,
    hablar:function(){
        console.log('Hello word!!!');
    }
};

console.log(persona);
persona.hablar();

// Con Objeto Literales , podemos simplificar el codigo arriba

const person ={
    // Si usamos a viriavel com propieda en el objeto javaScript dinamicamente utiliza el nombre de la variavel com propeidade del objeto e sua valor com el valor del objeto
    nombre,
    edad,
    // ya para la function para simplificar criamos directamente sin asignar una propiedade de objeto ya que el nombre de la functio en si sera la propriedad del Objeto 
    hablar(){
        console.log('Hello Word!!!!');
    }
}

console.log(person)