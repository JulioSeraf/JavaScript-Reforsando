// Se necessitas conservar la referencia de un scope en particular y lo necessitas usar en algun codigo, los seguintes metodos. call() - apply() - bird()

//call
this.lugar = 'Contexto Global';

function saludar(saludo, persona){
    console.log(`${saludo} ${persona} estamos en el $${this.lugar}`)
}

saludar('hola','man') //=> return constexto global

// criamos una mesma proprienda pero com un scope local dentro del obj
const obj ={
    lugar: 'Contexto Objeto'
};

//Se invocamos la function saludar aqui nos retornaria el lugar global , por que la funcion sin el parametro lo agarra del global, pero al usar el metodo call() y le asignamos el objeto ese metodo agarra su scope

saludar.call(obj,'hola','julio');// scope de obj
// el call y apply solo igual lo que cambia es como le pasamos el parametros de la function, con call() como hemos visto es por "," ya apply() usamos" [,]"
saludar.apply(obj,['hola','serafim']); // scope de obj
// para seguir usando el contexto global usamos null o this
saludar.call(null,'hola','julio');//scope global
saludar.call(this,'hola','julio');//scope global

// Ahora bird cria un enlace como las arrow function

const persona ={
    nombre: 'julio',
    saludar: function(){
        console.log('hola '+ this.nombre)
    }
}
persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona)
};

otraPersona.saludar()